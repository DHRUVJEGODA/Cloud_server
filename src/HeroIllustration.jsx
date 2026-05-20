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
  @keyframes hiFromRight { from { opacity:0; transform:translateX(60px);  } to { opacity:1; transform:translateX(0);  } }
  @keyframes hiFromBL    { from { opacity:0; transform:translate(-45px,45px); } to { opacity:1; transform:translate(0,0); } }

  /* Entry animation classes */
  .hi-entry-right { animation: hiFromRight 0.65s cubic-bezier(0.34,1.2,0.64,1) both; }
  .hi-entry-bl    { animation: hiFromBL    0.65s cubic-bezier(0.34,1.2,0.64,1) both; }

  /* Stagger delays */
  .hi-d1 { animation-delay: 0.10s; }
  .hi-d2 { animation-delay: 0.28s; }

  /* ── Float keyframes ── */
  @keyframes hiFltLaptop { from{transform:translateY(0)}  to{transform:translateY(-20px)} }
  @keyframes hiFltA      { from{transform:translateY(0)}  to{transform:translateY(-10px) translateX(3px)} }
  @keyframes hiFltB      { from{transform:translateY(0)}  to{transform:translateY(-12px) translateX(-4px)} }

  /* Float classes */
  .hi-flt-a { animation: hiFltA 5.5s ease-in-out infinite alternate; animation-delay:0.4s; }
  .hi-flt-b { animation: hiFltB 4.6s ease-in-out infinite alternate; animation-delay:0.8s; }

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
          Only 2 elements: right cube + bottom-left cube
          ══════════════════════════════════════════ */}
      {showPeripherals && (
        <React.Fragment key={animKey}>

          {/* ── RIGHT SERVER CUBE ── */}
          <div className="hi-elem hi-entry-right hi-d1" style={{ top: '42%', right: '-2%' }}>
            <div className="hi-flt-a">
              <img
                src="/server_cube.png"
                alt="Server"
                width="80"
                style={{ filter: 'drop-shadow(0 6px 16px rgba(37,99,235,0.55))' }}
              />
            </div>
          </div>

          {/* ── BOTTOM-LEFT SERVER CUBE ── */}
          <div className="hi-elem hi-entry-bl hi-d2" style={{ bottom: '8%', left: '-4%' }}>
            <div className="hi-flt-b">
              <img
                src="/server_cube.png"
                alt="Server"
                width="90"
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
