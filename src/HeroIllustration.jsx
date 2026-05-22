import { useEffect, useState, useCallback, useRef } from 'react';

/* ─── All animation styles scoped with hi- prefix ─── */
const ILLUS_CSS = `
  /* Container */
  .hi-wrap {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  .hi-static-shell {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  /* Central laptop image — static, no hover */
  .hi-center-img {
    display: block;
    width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 24px 48px rgba(0,0,0,0.55));
    position: relative;
    z-index: 2;
  }

  /* All peripheral elements — absolute positioned */
  .hi-elem {
    position: absolute;
    z-index: 3;
    pointer-events: none;
  }

  .hi-cube-right {
    top: 22%;
    right: 5%;
    width: 80.4px;
  }

  .hi-stack-bottom-left {
    left: 1%;
    bottom: 7%;
    width: 102.17px;
  }

  .hi-group7-right {
    top: 35%;
    right: 0;
    width: 70.09px;
  }

  .hi-cloud-bottom-left {
    left: 30%;
    top: 90%;
    width: 69.2px;
  }

  .hi-cloud-top-right {
    left: 78%;
    top: 02%;
    width: 69.2px;
  }

  .hi-wave-bottom {
    left: 25%;
    bottom: 2%;
    width: 19.47px;
  }

  /* ── ENTRY keyframes ── */
  @keyframes hiFromRight { from { opacity:0; transform:translateX(82px);            } to { opacity:1; transform:translateX(0);          } }
  @keyframes hiFromBottom{ from { opacity:0; transform:translateY(34px);            } to { opacity:1; transform:translateY(0);          } }
  @keyframes hiFromTR    { from { opacity:0; transform:translate(34px,-34px);       } to { opacity:1; transform:translate(0,0);         } }
  @keyframes hiFromTop   { from { opacity:0; transform:translateY(-34px);           } to { opacity:1; transform:translateY(0);          } }

  /* Entry animation classes */
  .hi-entry-right { animation: hiFromRight 1.18s cubic-bezier(0.22,0.85,0.28,1) both; }
  .hi-entry-bottom{ animation: hiFromBottom 1.18s cubic-bezier(0.22,0.85,0.28,1) both; }
  .hi-entry-tr    { animation: hiFromTR    1.18s cubic-bezier(0.22,0.85,0.28,1) both; }
  .hi-entry-top   { animation: hiFromTop   1.18s cubic-bezier(0.22,0.85,0.28,1) both; }

  /* Shared delay so the whole cluster appears together */
  .hi-sync { animation-delay: 0.16s; }

`;

export default function HeroIllustration({ style, className }) {
  const [animKey, setAnimKey] = useState(0);
  const restartPendingRef = useRef(false);
  const rafRef = useRef(null);
  const replayTimerRef = useRef(null);

  // Inject illustration styles once into <head>
  useEffect(() => {
    const styleId = 'hi-illustration-styles';
    if (document.getElementById(styleId)) return;
    const tag = document.createElement('style');
    tag.id = styleId;
    tag.textContent = ILLUS_CSS;
    document.head.appendChild(tag);
  }, []);

  // Trigger initial animation after a short delay on mount
  useEffect(() => {
    const t = setTimeout(() => setAnimKey(1), 350);
    return () => clearTimeout(t);
  }, []);

  const waitForTopAndRestart = useCallback(function checkTop() {
    if (!restartPendingRef.current) return;

    if (window.scrollY <= 1) {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }

      if (replayTimerRef.current) {
        clearTimeout(replayTimerRef.current);
      }

      replayTimerRef.current = setTimeout(() => {
        if (!restartPendingRef.current) return;
        restartPendingRef.current = false;
        setAnimKey(1);
      }, 350);
      return;
    }

    rafRef.current = requestAnimationFrame(checkTop);
  }, []);

  const handleRestart = useCallback(() => {
    restartPendingRef.current = true;
    setAnimKey(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    waitForTopAndRestart();
  }, [waitForTopAndRestart]);

  useEffect(() => {
    const onKey = (e) => {
      if (
        (e.key === 'r' || e.key === 'R') &&
        !e.ctrlKey && !e.metaKey && !e.altKey
      ) {
        handleRestart();
      }
    };

    const onRestart = () => handleRestart();

    window.addEventListener('keydown', onKey);
    window.addEventListener('cloudserver:restart', onRestart);
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (replayTimerRef.current) {
        clearTimeout(replayTimerRef.current);
      }
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('cloudserver:restart', onRestart);
    };
  }, [handleRestart]);

  const showPeripherals = animKey > 0;

  return (
    <div className={`hi-wrap ${className || ''}`} style={style}>
      <style>{ILLUS_CSS}</style>

      <div className="hi-static-shell">
        {/* ══════════════════════════════════════════
            CENTRAL IMAGE — static
            ══════════════════════════════════════════ */}
        <img
          src="/main.png"
          alt="Cloud Infrastructure Illustration"
          className="hi-center-img"
        />
      </div>

      {/* ══════════════════════════════════════════
          PERIPHERAL ELEMENTS — fly in then stay static
          ══════════════════════════════════════════ */}
      {showPeripherals && (
        <>

          {/* ── RIGHT SERVER CUBE ── */}
          <div className="hi-elem hi-entry-bottom hi-sync" style={{ top: '80%', right: '20%' }}>
            <img
              src="/Group.png"
              alt="Server"
              width="47.81"
              style={{ filter: 'drop-shadow(0 6px 16px rgba(37,99,235,0.55))' }}
            />
          </div>

          {/* ── BOTTOM-LEFT SERVER STACK ── */}
          <div className="hi-elem hi-entry-bottom hi-sync" style={{ bottom: '10%', left: '-4%' }}>
            <img
              src="/Group (2).png"
              alt="Server Stack"
              width="102"
              style={{ filter: 'drop-shadow(0 8px 20px rgba(37,99,235,0.50))' }}
            />
          </div>

          {/* ── RIGHT SIDE CLOUD / GROUP 7 ── */}
          <div className="hi-elem hi-entry-right hi-sync hi-group7-right">
            <img
              src="/Group 7.png"
              alt="Cloud"
              width="72"
              style={{ filter: 'drop-shadow(0 4px 12px rgba(255,255,255,0.25))' }}
            />
          </div>

          {/* ── BOTTOM-LEFT CLOUD ── */}
          <div className="hi-elem hi-entry-bottom hi-sync hi-cloud-bottom-left">
            <img
              src="/Vector.png"
              alt="Cloud"
              width="69.2"
              style={{ filter: 'drop-shadow(0 4px 10px rgba(255,255,255,0.22))' }}
            />
          </div>

          {/* ── BOTTOM WAVE / SPARKS ── */}
          <div className="hi-elem hi-entry-bottom hi-sync hi-wave-bottom">
            <img
              src="/Group (1).png"
              alt="Wave"
              width="16.47"
              style={{ filter: 'drop-shadow(0 4px 10px rgba(255,255,255,0.18))' }}
            />
          </div>

          {/* ── Top Right CLoud ── */}
          <div className="hi-elem hi-entry-top hi-sync hi-cloud-top-right">
            <img
              src="/Vector.png"
              alt="Cloud"
              width="69.2"
              style={{ filter: 'drop-shadow(0 4px 10px rgba(255,255,255,0.22))' }}
            />
          </div>

        </>
      )}

    </div>
  );
}
