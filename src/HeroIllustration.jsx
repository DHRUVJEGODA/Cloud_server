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
  @keyframes hiFromRight { from { opacity:0; transform:translateX(110px);           } to { opacity:1; transform:translateX(0);          } }
  @keyframes hiFromBottom{ from { opacity:0; transform:translateY(45px);            } to { opacity:1; transform:translateY(0);          } }
  @keyframes hiFromTR    { from { opacity:0; transform:translate(45px,-45px);       } to { opacity:1; transform:translate(0,0);         } }
  @keyframes hiFromTop   { from { opacity:0; transform:translateY(-45px);           } to { opacity:1; transform:translateY(0);          } }

  /* Entry animation classes */
  .hi-entry-right { animation: hiFromRight 0.95s cubic-bezier(0.22,1,0.36,1) both; }
  .hi-entry-bottom{ animation: hiFromBottom 0.95s cubic-bezier(0.22,1,0.36,1) both; }
  .hi-entry-tr    { animation: hiFromTR    0.95s cubic-bezier(0.22,1,0.36,1) both; }
  .hi-entry-top   { animation: hiFromTop   0.95s cubic-bezier(0.22,1,0.36,1) both; }

  /* Shared delay so the whole cluster appears together */
  .hi-sync { animation-delay: 0.22s; }

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
          <div className="hi-elem hi-entry-right hi-sync" style={{ top: '38%', right: '-10%' }}>
            <img
              src="/server_cube.png"
              alt="Server"
              width="90"
              style={{ filter: 'drop-shadow(0 6px 16px rgba(37,99,235,0.55))' }}
            />
          </div>

          {/* ── BOTTOM-LEFT SERVER STACK ── */}
          <div className="hi-elem hi-entry-bottom hi-sync" style={{ bottom: '2%', left: '-8%' }}>
            <img
              src="/box1-removebg-preview.png"
              alt="Server Stack"
              width="120"
              style={{ filter: 'drop-shadow(0 8px 20px rgba(37,99,235,0.50))' }}
            />
          </div>

          {/* ── BOTTOM-LEFT CLOUD ── */}
          <div className="hi-elem hi-entry-bottom hi-sync" style={{ bottom: '-17%', left: '24%' }}>
            <img
              src="/box3-removebg-preview.png"
              alt="Cloud"
              width="110"
              style={{ filter: 'drop-shadow(0 4px 12px rgba(255,255,255,0.25))' }}
            />
          </div>

          {/* ── WINDOWS LOGO ── */}
          <div className="hi-elem hi-entry-bottom hi-sync" style={{ left: '18%', bottom: '-15%' }}>
            <img
              src="/windows_logo.png"
              alt="Windows Logo"
              width="40"
              style={{ filter: 'drop-shadow(0 4px 10px rgba(255,255,255,0.22))' }}
            />
          </div>

          {/* ── OVAL RINGS ── */}
          <div className="hi-elem hi-entry-bottom hi-sync" style={{ left: '70%', bottom: '-7%' }}>
            <img
              src="/oval_rings.png"
              alt="Oval Rings"
              width="67"
              style={{ filter: 'drop-shadow(0 4px 10px rgba(255,255,255,0.18))' }}
            />
          </div>

          {/* ── TOP-RIGHT SMALL CLOUD ── */}
          <div className="hi-elem hi-entry-top hi-sync" style={{ top: '2%', right: '5%' }}>
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
