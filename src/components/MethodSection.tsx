import { Sprout, Target, MessageSquare, TrendingUp, Trees } from "lucide-react";

const steps = [
  {
    icon: Sprout,
    title: "SEMENTE",
    subtitle: "Oferta Irresistível",
    desc: "Criamos uma oferta impossível de ser ignorada pelo seu mercado local.",
  },
  {
    icon: Target,
    title: "SOLO",
    subtitle: "Demanda Qualificada",
    desc: "Atraímos o público certo através de tráfego pago, criativos de elite e segmentação precisa.",
  },
  {
    icon: MessageSquare,
    title: "CULTIVO",
    subtitle: "Vendas & Treinamento Comercial",
    desc: "Treinamos a sua equipe com scripts validados para transformar mensagens no WhatsApp em consultas e contratos.",
  },
  {
    icon: TrendingUp,
    title: "COLHEITA",
    subtitle: "Escala Previsível",
    desc: "Otimizamos campanhas e aplicamos remarketing para escalar o fechamento de protocolos.",
  },
  {
    icon: Trees,
    title: "FLORESTA",
    subtitle: "Crescimento Contínuo",
    desc: "Focamos em retenção e LTV para garantir crescimento sustentável e clientes recorrentes.",
  },
];

const MethodSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-green-dark">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-neon mb-3">Nosso Método</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-light max-w-3xl mx-auto">
            Nossa execução com o método que muda o jogo do seu consultório
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px gradient-primary opacity-30 lg:-translate-x-px" />

          <div className="space-y-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;
              return (
                <div key={i} className={`relative flex items-start gap-6 lg:gap-0 ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  {/* Content */}
                  <div className={`flex-1 lg:w-1/2 ${isLeft ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                    <div className={`bg-green-dark/80 border border-green-neon/10 rounded-xl p-6 hover:border-green-neon/30 transition-colors ${isLeft ? "" : ""}`}>
                      <p className="text-xs font-bold uppercase tracking-widest text-green-neon mb-1">{step.title}</p>
                      <p className="font-bold text-green-light text-lg mb-2">{step.subtitle}</p>
                      <p className="text-sm text-green-light/60 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                  {/* Icon dot */}
                  <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 flex-shrink-0 w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-glow z-10">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  {/* Spacer for opposite side */}
                  <div className="hidden lg:block flex-1 lg:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
