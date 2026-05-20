import React, { useEffect, useState, useCallback } from 'react';

/* ─── All animation styles scoped with hi- prefix ─── */
const ILLUS_CSS = `
  /* Container */
  .hi-wrap {
    position: relative;
    display: inline-block;
  }

  /* Central laptop image — always visible, floats */
  .hi-center-img {
    display: block;
    width: 100%;
    height: auto;
    animation: hiFltLaptop 4s ease-in-out infinite alternate;
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
  @keyframes hiFromLeft  { from { opacity:0; transform:translateX(-60px);           } to { opacity:1; transform:translateX(0);          } }

  /* Entry animation classes */
  .hi-entry-right { animation: hiFromRight 0.65s cubic-bezier(0.34,1.2,0.64,1) both; }
  .hi-entry-bl    { animation: hiFromBL    0.65s cubic-bezier(0.34,1.2,0.64,1) both; }
  .hi-entry-tr    { animation: hiFromTR    0.65s cubic-bezier(0.34,1.2,0.64,1) both; }
  .hi-entry-left  { animation: hiFromLeft  0.65s cubic-bezier(0.34,1.2,0.64,1) both; }

  /* Stagger delays */
  .hi-d1 { animation-delay: 0.10s; }
  .hi-d2 { animation-delay: 0.22s; }
  .hi-d3 { animation-delay: 0.34s; }
  .hi-d4 { animation-delay: 0.46s; }

  /* ── Float keyframes ── */
  @keyframes hiFltLaptop { from{transform:translateY(0)}  to{transform:translateY(-20px)} }
  @keyframes hiFltA      { from{transform:translateY(0)}  to{transform:translateY(-10px) translateX(3px)} }
  @keyframes hiFltB      { from{transform:translateY(0)}  to{transform:translateY(-12px) translateX(-4px)} }
  @keyframes hiFltC      { from{transform:translateY(0)}  to{transform:translateY(-9px)  translateX(5px)} }
  @keyframes hiFltD      { from{transform:translateY(0)}  to{transform:translateY(-14px)} }

  /* Float classes */
  .hi-flt-a { animation: hiFltA 5.5s ease-in-out infinite alternate; animation-delay:0.4s; }
  .hi-flt-b { animation: hiFltB 4.6s ease-in-out infinite alternate; animation-delay:0.8s; }
  .hi-flt-c { animation: hiFltC 5.0s ease-in-out infinite alternate; animation-delay:1.1s; }
  .hi-flt-d { animation: hiFltD 4.2s ease-in-out infinite alternate; animation-delay:0.6s; }

  /* Press-R hint */
  .hi-hint {
    position: absolute;
    bottom: -28px;
    right: 0;
    font-size: 0.7rem;
    color: rgba(148,163,184,0.55);
    font-family: 'Poppins', sans-serif;
    letter-spacing: 0.04em;
    pointer-events: none;
    user-select: none;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .hi-hint kbd {
    background: rgba(37,99,235,0.18);
    border: 1px solid rgba(37,99,235,0.38);
    border-radius: 4px;
    padding: 1px 7px;
    font-size: 0.68rem;
    color: rgba(147,197,253,0.85);
    font-family: inherit;
  }
`;

export default function HeroIllustration({ style, className }) {
  // animKey increments to force React to unmount/remount peripheral elements,
  // which guarantees CSS keyframe animations replay from scratch.
  const [animKey, setAnimKey] = useState(0);

  // Trigger initial animation after a short delay on mount
  useEffect(() => {
    const t = setTimeout(() => setAnimKey(1), 350);
    return () => clearTimeout(t);
  }, []);

  // Re-animate on R key press — increment the key to force remount
  const handleReplay = useCallback(() => {
    setAnimKey(prev => prev + 1);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (
        (e.key === 'r' || e.key === 'R') &&
        !e.ctrlKey && !e.metaKey && !e.altKey
      ) {
        handleReplay();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [handleReplay]);

  // Don't render peripherals until the first animKey triggers
  const showPeripherals = animKey > 0;

  return (
    <div className={`hi-wrap ${className || ''}`} style={style}>
      <style>{ILLUS_CSS}</style>

      {/* ══════════════════════════════════════════
          CENTRAL IMAGE — always visible, floats
          ══════════════════════════════════════════ */}
      <img
        src="/cloud_main.png"
        alt="Cloud Infrastructure Illustration"
        className="hi-center-img"
      />

      {/* ══════════════════════════════════════════
          PERIPHERAL ELEMENTS — keyed for remount
          4 elements: cloud, small cube, large server stack, small cube
          ══════════════════════════════════════════ */}
      {showPeripherals && (
        <React.Fragment key={animKey}>

          {/* ── TOP-RIGHT CLOUD ── */}
          <div className="hi-elem hi-entry-tr hi-d1" style={{ top: '2%', right: '2%' }}>
            <div className="hi-flt-c">
              <img
                src="/box3-removebg-preview.png"
                alt="Cloud"
                width="100"
                style={{ filter: 'drop-shadow(0 4px 12px rgba(255,255,255,0.25))' }}
              />
            </div>
          </div>

          {/* ── RIGHT SERVER CUBE (small) ── */}
          <div className="hi-elem hi-entry-right hi-d2" style={{ top: '42%', right: '-2%' }}>
            <div className="hi-flt-a">
              <img
                src="/server_cube.png"
                alt="Server"
                width="80"
                style={{ filter: 'drop-shadow(0 6px 16px rgba(37,99,235,0.55))' }}
              />
            </div>
          </div>

          {/* ── BOTTOM-LEFT SERVER STACK (large) ── */}
          <div className="hi-elem hi-entry-left hi-d3" style={{ bottom: '6%', left: '-6%' }}>
            <div className="hi-flt-d">
              <img
                src="/box1-removebg-preview.png"
                alt="Server Stack"
                width="110"
                style={{ filter: 'drop-shadow(0 8px 20px rgba(37,99,235,0.50))' }}
              />
            </div>
          </div>

          {/* ── BOTTOM-LEFT SERVER CUBE (small) ── */}
          <div className="hi-elem hi-entry-bl hi-d4" style={{ bottom: '8%', left: '12%' }}>
            <div className="hi-flt-b">
              <img
                src="/server_cube.png"
                alt="Server"
                width="70"
                style={{ filter: 'drop-shadow(0 6px 16px rgba(37,99,235,0.55))' }}
              />
            </div>
          </div>

        </React.Fragment>
      )}

      {/* Press-R hint */}
      <div className="hi-hint">
        Press <kbd>R</kbd> to replay
      </div>
    </div>
  );
}
