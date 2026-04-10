import teamImg from "@/assets/team.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-green-dark">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-glow">
            <img src={teamImg} alt="Equipe Green Lab" className="w-full h-auto object-cover" width={1280} height={720} loading="lazy" />
          </div>
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-neon">Quem Somos</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-green-light">
              A maior assessoria especializada no nicho odontológico do país.
            </h2>
            <p className="text-green-light/70 leading-relaxed">
              A Green é hoje a maior assessoria especializada no nicho odontológico do país. Com mais de 3 anos de experiência prática e um método validado em mais de 100 consultórios de todos os portes, nossa missão é clara: tirar o dentista do operacional das vendas e entregar uma estrutura comercial de alta performance.
            </p>
            <p className="text-green-light/70 leading-relaxed">
              Não somos apenas uma agência de marketing; somos o braço direito de crescimento de clínicas que buscam previsibilidade, lucro e domínio total de mercado.
            </p>
            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-3xl font-extrabold text-gradient">100+</p>
                <p className="text-sm text-green-light/50">Consultórios atendidos</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-gradient">3+</p>
                <p className="text-sm text-green-light/50">Anos de experiência</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
