import { useEffect, useState } from "react";

const BG = "#0d2818";
const NEON = "#00ff88";
const TEXT = "#ffffff";
const TEXT_MUTED = "rgba(255,255,255,0.55)";

const Logo = () => (
  <div className="flex items-center gap-2">
    <div
      className="flex h-[26px] w-[26px] items-center justify-center"
      style={{ background: NEON, borderRadius: 6 }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M4 12l5 5L20 6" stroke="#06190e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <span
      style={{
        fontFamily: "'Syne', sans-serif",
        fontWeight: 700,
        fontSize: 12,
        letterSpacing: "0.10em",
        color: "rgba(255,255,255,0.40)",
      }}
    >
      GREEN LAB
    </span>
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
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <style>{`
        @keyframes popIn {
          0% { transform: scale(0.4); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
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
      </div>
    </div>
  );
};

export default Obrigado;
