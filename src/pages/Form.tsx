import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";

const BG = "#0d2818";
const NEON = "#00ff88";
const TEXT = "#ffffff";
const TEXT_MUTED = "rgba(255,255,255,0.55)";
const BORDER = "rgba(255,255,255,0.10)";

const Logo = () => (
  <div className="flex items-center gap-2">
    <img src={logoIcon} alt="Green Lab" className="h-[26px] w-[26px] object-contain" />
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

type Choice = { value: string };

const CHOICES_R1: Choice[] = [
  { value: "Implantodontia" },
  { value: "Ortodontia" },
  { value: "Odontologia Geral" },
  { value: "Outro" },
];
const CHOICES_R2: Choice[] = [
  { value: "Menos de 5" },
  { value: "Entre 5 e 15" },
  { value: "Mais de 15" },
  { value: "Não sei ao certo" },
];
const CHOICES_R3: Choice[] = [
  { value: "Agenda com buracos" },
  { value: "Leads que não aparecem" },
  { value: "Secretária não converte" },
  { value: "Dependo só de indicação" },
];
const CHOICES_R4: Choice[] = [
  { value: "Nunca investi" },
  { value: "Já investi e não tive resultado" },
  { value: "Invisto atualmente mas quero melhorar" },
  { value: "Estou começando agora" },
];

const PROGRESS = [0, 16, 33, 50, 66, 83, 100];

const maskPhone = (v: string) => {
  const digits = v.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : "";
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

const fadeUp = "animate-[fadeUp_0.4s_ease_both]";

const ErrorMsg = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2 pt-1" style={{ color: "#ff6b6b", fontSize: 12 }}>
    <span
      className="flex h-4 w-4 items-center justify-center rounded-full"
      style={{ background: "#ff6b6b", color: BG, fontWeight: 700, fontSize: 11 }}
    >
      !
    </span>
    {text}
  </div>
);

const ChoiceList = ({
  choices,
  value,
  onChange,
  error,
}: {
  choices: Choice[];
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) => (
  <div className="flex flex-col gap-3">
    {choices.map((c) => {
      const selected = value === c.value;
      return (
        <button
          key={c.value}
          type="button"
          onClick={() => onChange(c.value)}
          className="flex items-center gap-3 px-4 py-4 text-left transition-colors"
          style={{
            borderRadius: 10,
            border: `1px solid ${selected ? NEON : BORDER}`,
            background: selected ? "rgba(0,255,136,0.10)" : "rgba(255,255,255,0.05)",
            color: TEXT,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            fontSize: 15,
          }}
        >
          <span
            className="flex h-[18px] w-[18px] items-center justify-center rounded-full"
            style={{
              border: `1.5px solid ${selected ? NEON : "rgba(255,255,255,0.35)"}`,
            }}
          >
            {selected && (
              <span className="h-[9px] w-[9px] rounded-full" style={{ background: NEON }} />
            )}
          </span>
          {c.value}
        </button>
      );
    })}
    {error && <ErrorMsg text={error} />}
  </div>
);

const PrimaryBtn = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className="mt-2 w-full px-6 py-4 transition-opacity hover:opacity-90"
    style={{
      background: NEON,
      color: "#06190e",
      borderRadius: 10,
      fontFamily: "'Syne', sans-serif",
      fontWeight: 700,
      fontSize: 15,
      letterSpacing: "0.02em",
    }}
  >
    {children}
  </button>
);

const StepLabel = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      color: NEON,
      fontFamily: "'Inter', sans-serif",
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: "0.18em",
    }}
  >
    {children}
  </div>
);

const Title = ({ children }: { children: React.ReactNode }) => (
  <h1
    style={{
      fontFamily: "'Syne', sans-serif",
      fontWeight: 700,
      fontSize: 30,
      lineHeight: 1.15,
      color: TEXT,
    }}
  >
    {children}
  </h1>
);

const Subtitle = ({ children }: { children: React.ReactNode }) => (
  <p
    style={{
      fontFamily: "'Inter', sans-serif",
      fontSize: 15,
      lineHeight: 1.55,
      color: TEXT_MUTED,
    }}
  >
    {children}
  </p>
);

const FloatingField = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
  error?: string;
}) => (
  <div className="flex flex-col gap-2">
    <label
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 12,
        color: "rgba(255,255,255,0.65)",
        letterSpacing: "0.04em",
      }}
    >
      {label}
    </label>
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3 outline-none"
      style={{
        background: "rgba(255,255,255,0.05)",
        border: `1px solid ${error ? "#ff6b6b" : BORDER}`,
        borderRadius: 10,
        color: TEXT,
        fontFamily: "'Inter', sans-serif",
        fontSize: 15,
      }}
    />
    {error && <ErrorMsg text={error} />}
  </div>
);

const Form = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [r1, setR1] = useState("");
  const [r2, setR2] = useState("");
  const [r3, setR3] = useState("");
  const [r4, setR4] = useState("");
  const [nome, setNome] = useState("");
  const [wpp, setWpp] = useState("");
  const [clinica, setClinica] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const progress = PROGRESS[step];

  const next = () => setStep((s) => s + 1);
  const back = () => {
    setErrors({});
    setStep((s) => Math.max(0, s - 1));
  };

  const validateAndNext = (field: string, value: string) => {
    if (!value) {
      setErrors({ [field]: "Selecione uma opção para continuar." });
      return;
    }
    setErrors({});
    next();
  };

  const submit = () => {
    const e: Record<string, string> = {};
    if (!nome.trim()) e.nome = "Informe seu nome.";
    if (wpp.replace(/\D/g, "").length < 10) e.wpp = "WhatsApp inválido.";
    if (!clinica.trim()) e.clinica = "Informe o nome da clínica.";
    setErrors(e);
    if (Object.keys(e).length) return;

    localStorage.setItem("gl_nome", nome);
    localStorage.setItem("gl_wpp", wpp);
    localStorage.setItem("gl_clinica", clinica);
    localStorage.setItem("gl_r1", r1);
    localStorage.setItem("gl_r2", r2);
    localStorage.setItem("gl_r3", r3);
    localStorage.setItem("gl_r4", r4);

    navigate("/obrigado");
  };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "rgba(255,255,255,0.08)",
          zIndex: 50,
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: NEON,
            transition: "width 0.6s cubic-bezier(0.4,0,0.2,1)",
          }}
        />
      </div>

      <div className="mx-auto flex max-w-xl flex-col px-5 pb-16 pt-8 sm:pt-12">
        <Logo />

        <div className="mt-14 sm:mt-20" key={step}>
          {step > 0 && (
            <button
              type="button"
              onClick={back}
              className={`mb-6 inline-flex items-center gap-2 transition-opacity hover:opacity-80 ${fadeUp}`}
              style={{
                color: TEXT_MUTED,
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                background: "transparent",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Voltar
            </button>
          )}
          {step === 0 && (
            <div className={`flex flex-col gap-5 ${fadeUp}`}>
              <div
                className="inline-flex w-fit items-center gap-2 px-3 py-1.5"
                style={{
                  border: `1px solid rgba(0,255,136,0.25)`,
                  borderRadius: 999,
                  background: "rgba(0,255,136,0.06)",
                  color: NEON,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12,
                }}
              >
                <span className="h-2 w-2 animate-pulse rounded-full" style={{ background: NEON }} />
                Consultoria gratuita disponível
              </div>
              <Title>Olá, Doutor(a)! 👋</Title>
              <Subtitle>
                Antes de falar com nosso time, preciso entender melhor o seu momento. São só 4 perguntas rápidas.
              </Subtitle>
              <PrimaryBtn onClick={next}>Vamos lá →</PrimaryBtn>
            </div>
          )}

          {step === 1 && (
            <div className={`flex flex-col gap-5 ${fadeUp}`}>
              <StepLabel>PERGUNTA 1 DE 4</StepLabel>
              <Title>Qual é a sua especialidade principal?</Title>
              <ChoiceList choices={CHOICES_R1} value={r1} onChange={setR1} error={errors.r1} />
              <PrimaryBtn onClick={() => validateAndNext("r1", r1)}>Continuar →</PrimaryBtn>
            </div>
          )}

          {step === 2 && (
            <div className={`flex flex-col gap-5 ${fadeUp}`}>
              <StepLabel>PERGUNTA 2 DE 4</StepLabel>
              <Title>Quantos procedimentos de alto ticket você realiza por mês?</Title>
              <ChoiceList choices={CHOICES_R2} value={r2} onChange={setR2} error={errors.r2} />
              <PrimaryBtn onClick={() => validateAndNext("r2", r2)}>Continuar →</PrimaryBtn>
            </div>
          )}

          {step === 3 && (
            <div className={`flex flex-col gap-5 ${fadeUp}`}>
              <StepLabel>PERGUNTA 3 DE 4</StepLabel>
              <Title>Qual é o seu maior desafio hoje?</Title>
              <ChoiceList choices={CHOICES_R3} value={r3} onChange={setR3} error={errors.r3} />
              <PrimaryBtn onClick={() => validateAndNext("r3", r3)}>Continuar →</PrimaryBtn>
            </div>
          )}

          {step === 4 && (
            <div className={`flex flex-col gap-5 ${fadeUp}`}>
              <StepLabel>PERGUNTA 4 DE 4</StepLabel>
              <Title>Você já investiu em marketing digital antes?</Title>
              <ChoiceList choices={CHOICES_R4} value={r4} onChange={setR4} error={errors.r4} />
              <PrimaryBtn onClick={() => validateAndNext("r4", r4)}>Continuar →</PrimaryBtn>
            </div>
          )}

          {step === 5 && (
            <div className={`flex flex-col gap-5 ${fadeUp}`}>
              <StepLabel>QUASE LÁ!</StepLabel>
              <Title>Agora me fala onde te encontro:</Title>
              <Subtitle>Preencha para garantir sua vaga na consultoria gratuita.</Subtitle>
              <div className="mt-2 flex flex-col gap-4">
                <FloatingField label="Nome completo" placeholder="Dr. João Silva" value={nome} onChange={setNome} error={errors.nome} />
                <FloatingField label="WhatsApp" placeholder="(11) 99999-9999" value={wpp} onChange={(v) => setWpp(maskPhone(v))} error={errors.wpp} />
                <FloatingField label="Nome da clínica" placeholder="Clínica Odonto Silva" value={clinica} onChange={setClinica} error={errors.clinica} />
              </div>
              <PrimaryBtn onClick={submit}>Quero minha consultoria gratuita →</PrimaryBtn>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
