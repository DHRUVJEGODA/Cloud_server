import React, { useEffect, useState } from 'react';

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

  /* ── Entry transition base ── */
  .hi-reveal {
    transition:
      opacity  0.60s cubic-bezier(0.4,0,0.2,1),
      transform 0.60s cubic-bezier(0.4,0,0.2,1);
  }

  /* Hidden/start states */
  .hi-from-top    { opacity:0; transform:translateY(-55px); }
  .hi-from-right  { opacity:0; transform:translateX(60px);  }
  .hi-from-left   { opacity:0; transform:translateX(-60px); }
  .hi-from-bottom { opacity:0; transform:translateY(55px);  }
  .hi-from-scale  { opacity:0; transform:scale(0.5);        }
  .hi-from-tr     { opacity:0; transform:translate(40px,-40px); }
  .hi-from-bl     { opacity:0; transform:translate(-40px,40px); }
  .hi-from-br     { opacity:0; transform:translate(40px,40px);  }

  /* Revealed states */
  .hi-revealed.hi-from-top    { opacity:1; transform:translateY(0); }
  .hi-revealed.hi-from-right  { opacity:1; transform:translateX(0); }
  .hi-revealed.hi-from-left   { opacity:1; transform:translateX(0); }
  .hi-revealed.hi-from-bottom { opacity:1; transform:translateY(0); }
  .hi-revealed.hi-from-scale  { opacity:1; transform:scale(1);      }
  .hi-revealed.hi-from-tr     { opacity:1; transform:translate(0,0); }
  .hi-revealed.hi-from-bl     { opacity:1; transform:translate(0,0); }
  .hi-revealed.hi-from-br     { opacity:1; transform:translate(0,0); }

  /* Stagger delays */
  .hi-d1 { transition-delay:0.05s; }
  .hi-d2 { transition-delay:0.15s; }
  .hi-d3 { transition-delay:0.25s; }
  .hi-d4 { transition-delay:0.35s; }
  .hi-d5 { transition-delay:0.48s; }
  .hi-d6 { transition-delay:0.60s; }

  /* ── Float keyframes ── */
  @keyframes hiFltLaptop { from{transform:translateY(0)}    to{transform:translateY(-20px)} }
  @keyframes hiFltA      { from{transform:translateY(0)}    to{transform:translateY(-14px)} }
  @keyframes hiFltB      { from{transform:translateY(0)}    to{transform:translateY(-9px)  translateX(5px)} }
  @keyframes hiFltC      { from{transform:translateY(0)}    to{transform:translateY(-12px) translateX(-4px)} }
  @keyframes hiFltD      { from{transform:translateY(0)}    to{transform:translateY(-7px)} }
  @keyframes hiFltE      { from{transform:translateY(0)}    to{transform:translateY(-10px) translateX(3px)} }
  @keyframes hiFltF      { from{transform:rotate(0deg)}     to{transform:rotate(12deg) translateY(-5px)} }

  /* Float classes — applied to INNER wrapper so they don't conflict with reveal transitions */
  .hi-flt-laptop { animation: hiFltLaptop 4.0s ease-in-out infinite alternate; }
  .hi-flt-a      { animation: hiFltA      3.8s ease-in-out infinite alternate; animation-delay:0.4s;  }
  .hi-flt-b      { animation: hiFltB      5.2s ease-in-out infinite alternate; animation-delay:1.1s;  }
  .hi-flt-c      { animation: hiFltC      4.6s ease-in-out infinite alternate; animation-delay:0.8s;  }
  .hi-flt-d      { animation: hiFltD      4.0s ease-in-out infinite alternate; animation-delay:1.5s;  }
  .hi-flt-e      { animation: hiFltE      5.5s ease-in-out infinite alternate; animation-delay:1.9s;  }
  .hi-flt-f      { animation: hiFltF      6.0s ease-in-out infinite alternate; animation-delay:0.6s;  }
  .hi-flt-g      { animation: hiFltC      4.8s ease-in-out infinite alternate; animation-delay:0.3s;  }

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
  const [revealed, setRevealed] = useState(false);

  // ── Auto-animate on mount (every page refresh) ──
  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 350);
    return () => clearTimeout(t);
  }, []);

  // ── Re-animate on R key press ──
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'r' || e.key === 'R') {
        setRevealed(false);
        setTimeout(() => setRevealed(true), 100);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  /**
   * Outer wrapper: handles slide-in reveal (opacity + directional transform)
   * Inner wrapper: handles continuous float animation (separate transform, no conflict)
   */
  const rc = (dir, delay) =>
    `hi-elem hi-reveal hi-from-${dir} hi-d${delay}${revealed ? ' hi-revealed' : ''}`;

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
          TOP-RIGHT CLOUD — fades in from top-right
          ══════════════════════════════════════════ */}
      <div className={rc('tr', 1)} style={{ top: '4%', right: '0%' }}>
        <div className="hi-flt-b">
          <svg width="100" height="54" viewBox="0 0 100 54" fill="none">
            <circle cx="26"  cy="32" r="22" fill="white" opacity="0.90"/>
            <circle cx="48"  cy="22" r="28" fill="white" opacity="0.90"/>
            <circle cx="72"  cy="28" r="21" fill="white" opacity="0.90"/>
            <rect   x="4"    y="31" width="88" height="22" fill="white" opacity="0.90"/>
          </svg>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          LEFT-CENTER CLOUD — fades in from left
          ══════════════════════════════════════════ */}
      <div className={rc('left', 2)} style={{ top: '46%', left: '-6%' }}>
        <div className="hi-flt-c">
          <svg width="82" height="44" viewBox="0 0 82 44" fill="none">
            <circle cx="22"  cy="27" r="17" fill="white" opacity="0.84"/>
            <circle cx="40"  cy="19" r="22" fill="white" opacity="0.84"/>
            <circle cx="60"  cy="24" r="16" fill="white" opacity="0.84"/>
            <rect   x="5"    y="26" width="71" height="18" fill="white" opacity="0.84"/>
          </svg>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          BOTTOM-CENTER CLOUD — fades in from bottom
          ══════════════════════════════════════════ */}
      <div className={rc('bottom', 4)} style={{ bottom: '2%', left: '36%' }}>
        <div className="hi-flt-d">
          <svg width="74" height="38" viewBox="0 0 74 38" fill="none">
            <circle cx="19"  cy="24" r="15" fill="white" opacity="0.80"/>
            <circle cx="35"  cy="16" r="19" fill="white" opacity="0.80"/>
            <circle cx="53"  cy="21" r="14" fill="white" opacity="0.80"/>
            <rect   x="4"    y="23" width="64" height="15" fill="white" opacity="0.80"/>
          </svg>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          RIGHT SERVER CUBE — fades in from right
          ══════════════════════════════════════════ */}
      <div className={rc('right', 2)} style={{ top: '36%', right: '-4%' }}>
        <div className="hi-flt-e">
          <img
            src="/server_cube.png"
            alt="Server"
            width="96"
            style={{ filter: 'drop-shadow(0 6px 16px rgba(37,99,235,0.55))' }}
          />
        </div>
      </div>

      {/* ══════════════════════════════════════════
          LEFT-BOTTOM SERVER CUBE — fades in from left
          ══════════════════════════════════════════ */}
      <div className={rc('bl', 3)} style={{ bottom: '10%', left: '-5%' }}>
        <div className="hi-flt-g">
          <img
            src="/server_cube.png"
            alt="Server"
            width="82"
            style={{ filter: 'drop-shadow(0 6px 16px rgba(37,99,235,0.55))' }}
          />
        </div>
      </div>

      {/* ══════════════════════════════════════════
          OVAL RINGS — bottom-right, fades from bottom-right
          ══════════════════════════════════════════ */}
      <div className={rc('br', 5)} style={{ bottom: '8%', right: '12%' }}>
        <div className="hi-flt-f">
          <img
            src="/oval_rings.png"
            alt=""
            width="58"
            style={{ filter: 'brightness(1.4) drop-shadow(0 2px 8px rgba(255,255,255,0.3))' }}
          />
        </div>
      </div>

      {/* ══════════════════════════════════════════
          DECORATIONS — scale fade-in last
          ══════════════════════════════════════════ */}
      <div className={rc('scale', 6)} style={{ top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        <svg width="100%" height="100%" viewBox="0 0 560 460" fill="none" style={{ position: 'absolute', inset: 0 }}>

          {/* 2×2 dot grid — bottom-left */}
          <circle cx="110" cy="415" r="4" fill="white" opacity="0.40"/>
          <circle cx="124" cy="415" r="4" fill="white" opacity="0.40"/>
          <circle cx="110" cy="429" r="4" fill="white" opacity="0.40"/>
          <circle cx="124" cy="429" r="4" fill="white" opacity="0.40"/>

          {/* 3-dot row — bottom-right */}
          <circle cx="336" cy="435" r="3.5" fill="white" opacity="0.34"/>
          <circle cx="350" cy="435" r="3.5" fill="white" opacity="0.34"/>
          <circle cx="364" cy="435" r="3.5" fill="white" opacity="0.34"/>

          {/* 2×2 dots — top-right corner */}
          <circle cx="492" cy="155" r="3" fill="white" opacity="0.32"/>
          <circle cx="504" cy="155" r="3" fill="white" opacity="0.32"/>
          <circle cx="492" cy="167" r="3" fill="white" opacity="0.32"/>
          <circle cx="504" cy="167" r="3" fill="white" opacity="0.32"/>

          {/* Wave dash — right side */}
          <path d="M 448 295 Q 458 283 468 295 Q 478 307 488 295"
            stroke="white" strokeWidth="2.8" fill="none" opacity="0.44" strokeLinecap="round"/>

          {/* Wave dash — bottom-left */}
          <path d="M 118 450 Q 128 438 138 450 Q 148 462 158 450"
            stroke="white" strokeWidth="2.8" fill="none" opacity="0.38" strokeLinecap="round"/>

          {/* 2×2 small square grid — far bottom-left */}
          <rect x="62" y="432" width="8" height="8" rx="1.5" fill="white" opacity="0.24"/>
          <rect x="74" y="432" width="8" height="8" rx="1.5" fill="white" opacity="0.24"/>
          <rect x="62" y="444" width="8" height="8" rx="1.5" fill="white" opacity="0.24"/>
          <rect x="74" y="444" width="8" height="8" rx="1.5" fill="white" opacity="0.24"/>

          {/* Single dots — scattered */}
          <circle cx="58"  cy="310" r="3" fill="white" opacity="0.28"/>
          <circle cx="500" cy="380" r="3" fill="white" opacity="0.26"/>
        </svg>
      </div>

      {/* Press-R hint */}
      <div className="hi-hint">
        Press <kbd>R</kbd> to replay
      </div>
    </div>
  );
}
