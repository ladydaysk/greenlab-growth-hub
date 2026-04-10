const testimonials = [
  {
    name: "Dr. Lucas Mendes",
    clinic: "Clínica Sorriso Perfeito",
    text: "Em apenas 3 meses com a Green, triplicamos o número de consultas agendadas. O treinamento comercial fez toda a diferença na conversão.",
  },
  {
    name: "Dra. Camila Ferreira",
    clinic: "Odonto Prime",
    text: "Saímos de R$ 80 mil para R$ 250 mil de faturamento mensal. A estrutura que a Green implementou é simplesmente incrível.",
  },
  {
    name: "Dr. Rafael Costa",
    clinic: "Instituto Dental Premium",
    text: "A Green não é só marketing, é estratégia de verdade. Hoje temos previsibilidade e escala que nunca imaginamos ser possível.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-neon mb-3">Depoimentos</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Tome a mesma decisão que eles.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative rounded-2xl bg-green-dark p-6 lg:p-8 text-green-light shadow-card group hover:shadow-glow transition-shadow duration-300"
            >
              {/* Play button placeholder for video */}
              <div className="w-full aspect-video rounded-xl bg-green-dark/50 border border-green-neon/20 flex items-center justify-center mb-6 overflow-hidden">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <p className="text-green-light/80 text-sm leading-relaxed mb-4">"{t.text}"</p>
              <div>
                <p className="font-bold text-green-neon">{t.name}</p>
                <p className="text-xs text-green-light/50">{t.clinic}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
