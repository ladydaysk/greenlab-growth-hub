import { useEffect, useState } from "react";
import logoIcon from "@/assets/green-lab-logo.png";

const BG = "#0d2818";
const NEON = "#00ff88";
const TEXT = "#ffffff";
const TEXT_MUTED = "rgba(255,255,255,0.55)";

const Logo = () => (
  <div className="flex items-center">
    <img src={logoIcon} alt="Green Lab" className="h-10 w-auto object-contain" />
  </div>
);

const pad = (n: number) => n.toString().padStart(2, "0");
const formatTime = (s: number) => {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return `${pad(h)}:${pad(m)}:${pad(sec)}`;
};

const SummaryCard = ({ label, value }: { label: string; value: string }) => (
  <div
    className="flex items-center justify-between gap-4 p-4"
    style={{
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.10)",
      borderRadius: 12,
    }}
  >
    <span
      style={{
        color: "rgba(255,255,255,0.40)",
        fontFamily: "'Inter', sans-serif",
        fontSize: 13,
      }}
    >
      {label}
    </span>
    <span
      className="px-3 py-1.5 text-right"
      style={{
        background: "rgba(0,255,136,0.10)",
        border: "1px solid rgba(0,255,136,0.20)",
        borderRadius: 999,
        color: NEON,
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500,
        fontSize: 12,
      }}
    >
      {value || "—"}
    </span>
  </div>
);

const TimelineItem = ({
  index,
  title,
  desc,
  done,
  last,
}: {
  index: number;
  title: string;
  desc: string;
  done?: boolean;
  last?: boolean;
}) => (
  <div className="flex flex-col">
    <div className="flex items-start gap-4 py-4">
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center"
        style={{
          borderRadius: 999,
          background: done ? "rgba(0,255,136,0.12)" : "rgba(255,255,255,0.06)",
          border: `1px solid ${done ? "rgba(0,255,136,0.30)" : "rgba(255,255,255,0.10)"}`,
          color: done ? NEON : "rgba(255,255,255,0.55)",
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700,
          fontSize: 13,
        }}
      >
        {done ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M4 12l5 5L20 6" stroke={NEON} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          index
        )}
      </div>
      <div className="flex flex-col gap-1">
        <span style={{ color: TEXT, fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 15 }}>
          {title}
        </span>
        <span style={{ color: TEXT_MUTED, fontFamily: "'Inter', sans-serif", fontSize: 13, lineHeight: 1.5 }}>
          {desc}
        </span>
      </div>
    </div>
    {!last && <div style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />}
  </div>
);

const Obrigado = () => {
  const [seconds, setSeconds] = useState(2 * 60 * 60);
  const [nome, setNome] = useState("");
  const [r1, setR1] = useState("");
  const [r2, setR2] = useState("");
  const [r3, setR3] = useState("");
  const [r4, setR4] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setNome((localStorage.getItem("gl_nome") || "").split(" ")[0] || "Doutor(a)");
    setR1(localStorage.getItem("gl_r1") || "");
    setR2(localStorage.getItem("gl_r2") || "");
    setR3(localStorage.getItem("gl_r3") || "");
    setR4(localStorage.getItem("gl_r4") || "");
    setMounted(true);

    const interval = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        background: `radial-gradient(circle at 15% -10%, rgba(0,255,136,0.20), transparent 55%), radial-gradient(circle at 85% 110%, rgba(0,255,136,0.16), transparent 50%), linear-gradient(160deg, #03110a 0%, #06190e 45%, #020a06 100%)`,
        minHeight: "100vh",
        color: TEXT,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-15%",
          left: "-10%",
          width: 520,
          height: 520,
          background: NEON,
          opacity: 0.18,
          filter: "blur(150px)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "-15%",
          width: 540,
          height: 540,
          background: NEON,
          opacity: 0.14,
          filter: "blur(170px)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <style>{`
        @keyframes popIn {
          0% { transform: scale(0.4); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes neonPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(0,255,136,0.35), 0 0 40px rgba(0,255,136,0.20), inset 0 0 20px rgba(0,255,136,0.15); }
          50% { box-shadow: 0 0 30px rgba(0,255,136,0.55), 0 0 60px rgba(0,255,136,0.30), inset 0 0 25px rgba(0,255,136,0.25); }
        }
        @keyframes scanLine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .neon-btn {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(0,255,136,0.95), rgba(0,200,110,0.95));
          color: #03110a;
          border: 1px solid rgba(0,255,136,0.6);
          border-radius: 12px;
          padding: 16px 24px;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 0.04em;
          cursor: pointer;
          transition: transform 0.2s ease;
          animation: neonPulse 2.4s ease-in-out infinite;
        }
        .neon-btn:hover { transform: translateY(-2px); }
        .neon-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent);
          transform: translateX(-100%);
          animation: scanLine 3s ease-in-out infinite;
          pointer-events: none;
        }
        .neon-btn-ghost {
          position: relative;
          background: rgba(0,255,136,0.06);
          color: #00ff88;
          border: 1px solid rgba(0,255,136,0.35);
          border-radius: 12px;
          padding: 16px 24px;
          font-family: 'Syne', sans-serif;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.04em;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 0 18px rgba(0,255,136,0.15), inset 0 0 12px rgba(0,255,136,0.08);
        }
        .neon-btn-ghost:hover {
          background: rgba(0,255,136,0.12);
          border-color: rgba(0,255,136,0.6);
          box-shadow: 0 0 24px rgba(0,255,136,0.30), inset 0 0 18px rgba(0,255,136,0.15);
        }
      `}</style>

      <div className="mx-auto flex max-w-xl flex-col gap-10 px-5 pb-20 pt-8 sm:pt-12">
        <Logo />

        {/* Hero */}
        <div className="flex flex-col items-start gap-5" style={{ animation: "fadeUp 0.5s ease both" }}>
          <div
            className="flex h-[72px] w-[72px] items-center justify-center"
            style={{
              background: "rgba(0,255,136,0.10)",
              border: "1px solid rgba(0,255,136,0.30)",
              borderRadius: 999,
              animation: "popIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both",
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M4 12l5 5L20 6" stroke={NEON} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 30,
              lineHeight: 1.15,
              color: TEXT,
            }}
          >
            Perfeito, {mounted ? nome : "Doutor(a)"}! 🎉
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.55, color: TEXT_MUTED }}>
            Recebemos tudo! Nosso especialista vai entrar em contato pelo WhatsApp dentro do prazo abaixo.
          </p>
        </div>

        {/* Countdown */}
        <div
          className="flex flex-col items-center gap-3 p-6 text-center"
          style={{
            background: "rgba(0,255,136,0.07)",
            border: "1px solid rgba(0,255,136,0.20)",
            borderRadius: 12,
          }}
        >
          <span
            style={{
              color: NEON,
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: "0.18em",
            }}
          >
            CONTATO EM ATÉ
          </span>
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 48,
              color: NEON,
              lineHeight: 1,
              letterSpacing: "0.02em",
            }}
          >
            {formatTime(seconds)}
          </span>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              color: "rgba(255,255,255,0.45)",
              letterSpacing: "0.08em",
            }}
          >
            horas · minutos · segundos
          </span>
        </div>

        {/* Resumo */}
        <div className="flex flex-col gap-4">
          <span
            style={{
              color: "rgba(255,255,255,0.40)",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: "0.18em",
            }}
          >
            RESUMO DAS SUAS RESPOSTAS
          </span>
          <div className="flex flex-col gap-3">
            <SummaryCard label="Especialidade" value={r1} />
            <SummaryCard label="Procedimentos / mês" value={r2} />
            <SummaryCard label="Maior desafio" value={r3} />
            <SummaryCard label="Marketing digital" value={r4} />
          </div>
        </div>

        {/* Próximos passos */}
        <div className="flex flex-col gap-2">
          <span
            style={{
              color: "rgba(255,255,255,0.40)",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: "0.18em",
            }}
          >
            O QUE ACONTECE AGORA
          </span>
          <div
            className="mt-2 flex flex-col px-4"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 12,
            }}
          >
            <TimelineItem index={1} done title="Formulário enviado" desc="Suas respostas chegaram com sucesso" />
            <TimelineItem index={2} title="Análise do seu perfil" desc="Nosso time analisa suas respostas antes de ligar" />
            <TimelineItem index={3} title="Contato pelo WhatsApp" desc="Um especialista entra em contato em até 2 horas" />
            <TimelineItem index={4} last title="Diagnóstico gratuito" desc="Vamos montar juntos a estratégia ideal para sua clínica" />
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-3" style={{ animation: "fadeUp 0.6s ease both" }}>
          <a
            href="https://wa.me/5561990443888?text=Acabei%20de%20preencher%20o%20formul%C3%A1rio%20da%20Green%20Lab"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-btn flex items-center justify-center gap-2"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Falar agora no WhatsApp
          </a>
          <button
            type="button"
            onClick={() => window.location.assign("/form")}
            className="neon-btn-ghost"
          >
            ← Voltar ao início
          </button>
        </div>
      </div>
    </div>
  );
};

export default Obrigado;
