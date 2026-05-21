import { useEffect, useState, useCallback, useRef } from 'react';

/* ─── All animation styles scoped with hi- prefix ─── */
const ILLUS_CSS = `
  /* Container */
  .hi-wrap {
    position: relative;
    display: inline-block;
  }

  /* Central laptop image — static, no hover */
  .hi-center-img {
    display: block;
    width: 100%;
    height: auto;
    filter: drop-shadow(0 24px 48px rgba(0,0,0,0.55));
    position: relative;
    z-index: 2;
  }

  /* All peripheral elements — absolute positioned */
  .hi-elem {
    position: absolute;
    z-index: 3;
  }

  /* ── ENTRY keyframes ── */
  @keyframes hiFromRight { from { opacity:0; transform:translateX(60px);            } to { opacity:1; transform:translateX(0);          } }
  @keyframes hiFromBL    { from { opacity:0; transform:translate(-45px,45px);       } to { opacity:1; transform:translate(0,0);         } }
  @keyframes hiFromTR    { from { opacity:0; transform:translate(45px,-45px);       } to { opacity:1; transform:translate(0,0);         } }

  /* Entry animation classes */
  .hi-entry-right { animation: hiFromRight 0.65s cubic-bezier(0.34,1.2,0.64,1) both; }
  .hi-entry-bl    { animation: hiFromBL    0.65s cubic-bezier(0.34,1.2,0.64,1) both; }
  .hi-entry-tr    { animation: hiFromTR    0.65s cubic-bezier(0.34,1.2,0.64,1) both; }

  /* Stagger delays */
  .hi-d1 { animation-delay: 0.10s; }
  .hi-d2 { animation-delay: 0.22s; }
  .hi-d3 { animation-delay: 0.34s; }
  .hi-d4 { animation-delay: 0.46s; }

`;

export default function HeroIllustration({ style, className }) {
  const [animKey, setAnimKey] = useState(0);
  const restartPendingRef = useRef(false);
  const rafRef = useRef(null);
  const replayTimerRef = useRef(null);

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

      {/* ══════════════════════════════════════════
          CENTRAL IMAGE — static
          ══════════════════════════════════════════ */}
      <img
        src="/cloud_main.png"
        alt="Cloud Infrastructure Illustration"
        className="hi-center-img"
      />

      {/* ══════════════════════════════════════════
          PERIPHERAL ELEMENTS — fly in then stay static
          ══════════════════════════════════════════ */}
      {showPeripherals && (
        <>

          {/* ── RIGHT SERVER CUBE ── */}
          <div className="hi-elem hi-entry-right hi-d2" style={{ top: '38%', right: '-10%' }}>
            <img
              src="/server_cube.png"
              alt="Server"
              width="90"
              style={{ filter: 'drop-shadow(0 6px 16px rgba(37,99,235,0.55))' }}
            />
          </div>

          {/* ── BOTTOM-LEFT SERVER STACK ── */}
          <div className="hi-elem hi-entry-bl hi-d3" style={{ bottom: '2%', left: '-8%' }}>
            <img
              src="/box1-removebg-preview.png"
              alt="Server Stack"
              width="120"
              style={{ filter: 'drop-shadow(0 8px 20px rgba(37,99,235,0.50))' }}
            />
          </div>

          {/* ── BOTTOM-LEFT CLOUD ── */}
          <div className="hi-elem hi-entry-bl hi-d1" style={{ bottom: '-20%', left: '18%' }}>
            <img
              src="/box3-removebg-preview.png"
              alt="Cloud"
              width="110"
              style={{ filter: 'drop-shadow(0 4px 12px rgba(255,255,255,0.25))' }}
            />
          </div>

          {/* ── TOP-RIGHT SMALL CLOUD ── */}
          <div className="hi-elem hi-entry-tr hi-d4" style={{ top: '2%', right: '5%' }}>
            <img
              src="/box3-removebg-preview.png"
              alt="Server"
              width="110"
              style={{ filter: 'drop-shadow(0 4px 12px rgba(255,255,255,0.25))' }}
            />
          </div>

        </>
      )}

    </div>
  );
}
