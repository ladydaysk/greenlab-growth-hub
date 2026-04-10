import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Lucas Mendes",
    clinic: "Clínica Sorriso Perfeito",
    text: "Em apenas 3 meses com a Green, triplicamos o número de consultas agendadas. O treinamento comercial fez toda a diferença na conversão.",
    rating: 5,
  },
  {
    name: "Dra. Camila Ferreira",
    clinic: "Odonto Prime",
    text: "Saímos de R$ 80 mil para R$ 250 mil de faturamento mensal. A estrutura que a Green implementou é simplesmente incrível.",
    rating: 5,
  },
  {
    name: "Dr. Rafael Costa",
    clinic: "Instituto Dental Premium",
    text: "A Green não é só marketing, é estratégia de verdade. Hoje temos previsibilidade e escala que nunca imaginamos ser possível.",
    rating: 5,
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
              className="relative rounded-2xl bg-green-dark p-6 lg:p-8 text-green-light shadow-card hover:shadow-glow transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-green-light/80 text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-neon/20 flex items-center justify-center text-green-neon font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-green-neon">{t.name}</p>
                  <p className="text-xs text-green-light/50">{t.clinic}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
