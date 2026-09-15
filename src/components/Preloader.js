import React, { useEffect, useRef, useState } from 'react';

const BRAND_TEXT = 'NABAJYOTI';
const GLYPHS = '01$#@!*<>[]{}▲◊◈⬡/\\+=';

export default function Preloader({ onComplete }) {
  const canvasRef = useRef(null);
  const stageRef = useRef(null);
  const onCompleteRef = useRef(onComplete);
  useEffect(() => { onCompleteRef.current = onComplete; }, [onComplete]);
  const [phase, setPhase] = useState('init');
  const [counter, setCounter] = useState(0);
  const [chars, setChars] = useState(
    BRAND_TEXT.split('').map(c => ({ final: c, display: GLYPHS[Math.floor(Math.random() * GLYPHS.length)], locked: false, active: false }))
  );
  const [showSub, setShowSub] = useState(false);
  const [sheen, setSheen] = useState(false);
  const [exiting, setExiting] = useState(false);

  /* ── Canvas particle engine ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animRunning = true;
    let particles = [];
    const COUNT = 65;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor(init = false) {
        this.reset(init);
      }
      reset(init = false) {
        this.x = (Math.random() - 0.5) * canvas.width * 1.5 + canvas.width / 2;
        this.y = (Math.random() - 0.5) * canvas.height * 1.5 + canvas.height / 2;
        this.z = init ? Math.random() * 800 : 800;
        this.size = Math.random() * 1.8 + 0.6;
        this.color = Math.random() > 0.4 ? '#00f2fe' : '#ffffff';
        this.speed = Math.random() * 1.5 + 0.5;
      }
      update() {
        this.z -= this.speed * 2.2;
        if (this.z <= 1) this.reset();
      }
      draw() {
        const k = 300 / this.z;
        const px = (this.x - canvas.width / 2) * k + canvas.width / 2;
        const py = (this.y - canvas.height / 2) * k + canvas.height / 2;
        if (px < 0 || px > canvas.width || py < 0 || py > canvas.height) return;
        const alpha = Math.min(1, (800 - this.z) / 400);
        ctx.beginPath();
        ctx.arc(px, py, this.size * k * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = alpha;
        ctx.fill();
      }
    }

    for (let i = 0; i < COUNT; i++) particles.push(new Particle(true));

    function render() {
      if (!animRunning) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1;
      particles.forEach(p => { p.update(); p.draw(); });
      requestAnimationFrame(render);
    }
    render();

    return () => {
      animRunning = false;
      window.removeEventListener('resize', resize);
    };
  }, []);

  /* ── Mouse/gyro parallax ── */
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    let mx = 0, my = 0, cx = 0, cy = 0;
    let raf;

    const onMove = e => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2 * 16;
      my = -(e.clientY / window.innerHeight - 0.5) * 2 * 16;
    };
    const onGyro = e => {
      if (e.gamma != null) { mx = (e.gamma / 45) * 12; my = -(e.beta / 45) * 12; }
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('deviceorientation', onGyro);

    function loop() {
      cx += (mx - cx) * 0.08;
      cy += (my - cy) * 0.08;
      if (stage) stage.style.transform = `rotateY(${cx}deg) rotateX(${cy}deg)`;
      raf = requestAnimationFrame(loop);
    }
    loop();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('deviceorientation', onGyro);
    };
  }, []);

  /* ── Counter animation ── */
  function animCounter(from, to, duration, cb) {
    const start = performance.now();
    function step(now) {
      const p = Math.min((now - start) / duration, 1);
      setCounter(Math.floor(from + (to - from) * p));
      if (p < 1) requestAnimationFrame(step);
      else if (cb) cb();
    }
    requestAnimationFrame(step);
  }

  /* ── Decode sequence ── */
  function decodeSequence() {
    BRAND_TEXT.split('').forEach((finalChar, i) => {
      setTimeout(() => {
        setChars(prev => prev.map((c, idx) => idx === i ? { ...c, active: true } : c));
        let scrambles = 0;
        const iv = setInterval(() => {
          if (scrambles >= 7) {
            clearInterval(iv);
            setChars(prev => prev.map((c, idx) => idx === i ? { ...c, display: finalChar, locked: true } : c));
          } else {
            setChars(prev => prev.map((c, idx) => idx === i ? { ...c, display: GLYPHS[Math.floor(Math.random() * GLYPHS.length)] } : c));
            scrambles++;
          }
        }, 45);
      }, i * 85);
    });
  }

  /* ── Master timeline ── */
  useEffect(() => {
    document.body.classList.add('loading');
    animCounter(0, 45, 1200);

    const t1 = setTimeout(() => setPhase('converged'), 500);
    const t2 = setTimeout(() => {
      setPhase('shock');
      animCounter(45, 92, 500);
    }, 1700);
    const t3 = setTimeout(() => decodeSequence(), 1900);
    const t4 = setTimeout(() => {
      setShowSub(true);
      setSheen(true);
      animCounter(92, 100, 300);
    }, 3100);
    const t5 = setTimeout(() => {
      setExiting(true);
      document.body.classList.remove('loading');
      setTimeout(() => {
        document.body.classList.add('loaded');
        onCompleteRef.current();
      }, 1200);
    }, 4200);

    return () => [t1, t2, t3, t4, t5].forEach(clearTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const converged = phase === 'converged' || phase === 'shock';

  return (
    <aside
      id="preloader"
      className={`preloader${exiting ? ' preloader-exit' : ''}`}
      role="progressbar"
      aria-label="Loading"
    >
      <canvas ref={canvasRef} className="space-canvas" />
      <div className="grid-floor" />
      <div className="vignette" />
      {phase === 'shock' && <div className="anamorphic-streak fire-streak" />}
      <div className={`shockwave${phase === 'shock' ? ' fire-shockwave' : ''}`} />

      <div className="hud-element hud-tl">
        SYS // ARCHITECTURE CORE v4.8<br />
        <span style={{ color: 'var(--cyan)' }}>ONLINE &amp; SECURED</span>
      </div>
      <div className="hud-element hud-tr">
        LAT 28.6139° N / LON 77.2090° E<br />STREAM // DUAL FREQUENCY
      </div>
      <div className="hud-element hud-bl">
        <span className="counter-val">{String(counter).padStart(3, '0')}</span>%
        <span style={{ opacity: 0.4, marginLeft: 8 }}>{'// SYNCING ASSETS'}</span>
      </div>
      <div className="hud-element hud-br">
        <div className="eq-bar" /><div className="eq-bar" /><div className="eq-bar" /><div className="eq-bar" />
        <span style={{ marginLeft: 8, opacity: 0.6 }}>48.1 kHz</span>
      </div>

      <div className={`hologram-stage${converged ? ' state-converged' : ''}`} ref={stageRef}>
        <div className={`orbital-ring orbital-ring-1${converged ? ' ring-visible' : ''}`} />
        <div className={`orbital-ring orbital-ring-2${converged ? ' ring-visible' : ''}`} />

        <div className="monogram-box">
          <svg className="monogram-svg" viewBox="0 0 120 120">
            <path className={`monogram-shard shard-top${converged ? ' shard-in' : ''}`} d="M 25,45 L 60,15 L 95,45" />
            <path className={`monogram-shard shard-right${converged ? ' shard-in' : ''}`} d="M 95,45 L 95,85 L 60,105" />
            <path className={`monogram-shard shard-bottom${converged ? ' shard-in' : ''}`} d="M 95,85 L 60,105 L 25,85" />
            <path className={`monogram-shard shard-left${converged ? ' shard-in' : ''}`} d="M 25,85 L 25,45 L 60,15" />
            <polygon className={`monogram-shard shard-core${converged ? ' shard-in' : ''}`} points="60,35 78,60 60,85 42,60" />
          </svg>
        </div>

        <div className="brand-title-wrap">
          <h1 className="brand-name" aria-label="NABAJYOTI">
            {chars.map((c, i) => (
              <span key={i} className={`decode-char${c.active ? ' active' : ''}${c.locked ? ' lock' : ''}`}>
                {c.display}
              </span>
            ))}
          </h1>
          <div className={`laser-sheen${sheen ? ' sheen-run' : ''}`} />
        </div>

        <div className={`brand-sub${showSub ? ' sub-visible' : ''}`}>
          NEW LIGHT • CREATIVE ARCHITECTURE
        </div>
      </div>
    </aside>
  );
}
