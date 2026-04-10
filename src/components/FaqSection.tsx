import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Como funciona o treinamento comercial para a minha secretária?",
    a: "Nosso treinamento é prático e focado em resultados. Fornecemos scripts validados, técnicas de abordagem via WhatsApp e acompanhamento contínuo para garantir que sua equipe converta mais leads em consultas agendadas e contratos assinados.",
  },
  {
    q: "A Green atende clínicas em qualquer lugar do país?",
    a: "Sim! Atendemos clínicas de todo o Brasil. Nossa operação é 100% digital, com reuniões online, dashboards em tempo real e suporte dedicado, independentemente da sua localização.",
  },
  {
    q: "Em quanto tempo começo a ver os resultados da fase de colheita?",
    a: "Os primeiros resultados geralmente aparecem entre 30 a 60 dias, dependendo da maturidade digital da sua clínica. A fase de colheita com escala previsível se consolida a partir do terceiro mês de operação.",
  },
];

const FaqSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container max-w-3xl">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-neon mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Dúvidas Frequentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-xl border border-border bg-card px-6 data-[state=open]:border-green-neon/30 data-[state=open]:shadow-glow transition-all"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
