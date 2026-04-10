import { PenTool, Palette, Video, Megaphone, BarChart3, Handshake } from "lucide-react";

const services = [
  { icon: PenTool, title: "Copy Estratégica", desc: "Textos persuasivos desenhados para tocar na dor do paciente e gerar desejo imediato." },
  { icon: Palette, title: "Designers que Vendem", desc: "Identidade visual de alto padrão para transmitir a autoridade e o luxo da sua clínica." },
  { icon: Video, title: "Vídeos de Alta Performance", desc: "Roteirização e edição de vídeos focados em conversão para anúncios e redes sociais." },
  { icon: Megaphone, title: "Mídia Paga", desc: "Gestão profissional de anúncios no Meta e Google para atrair apenas pacientes qualificados." },
  { icon: BarChart3, title: "Dashboards", desc: "Relatórios em tempo real para acompanhar cada centavo investido e o retorno gerado." },
  { icon: Handshake, title: "Consultoria Comercial", desc: "Orientação estratégica especializada para aprimorar o seu processo de vendas e o fechamento na recepção." },
];

const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-neon mb-3">Soluções</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Tudo que você precisa para escalar o seu consultório
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="group rounded-2xl border border-border bg-card p-6 lg:p-8 hover:border-green-neon/40 hover:shadow-glow transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
