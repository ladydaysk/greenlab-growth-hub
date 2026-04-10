import { useState } from "react";
import heroImg from "@/assets/hero-clinic.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const WA_LINK = "https://wa.me/5561990443888?text=Quero%20alavancar%20os%20resultados%20da%20minha%20clinica%20com%20a%20Green%2C%20como%20funciona%20o%20metodo%20de%20voces%3F";

const HeroSection = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("https://api.sheetmonkey.io/form/4TQDdNMfYV37EixNJUKJoW", {
        method: "POST",
        body: formData,
      });
      form.reset();
      setShowSuccess(true);
    } catch {
      // still show success since SheetMonkey may redirect
      form.reset();
      setShowSuccess(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Clínica odontológica moderna" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-green-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-br from-green-dark via-green-dark/95 to-green-dark/80" />
      </div>

      <div className="container relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Copy */}
          <div className="space-y-6 text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-neon/30 px-4 py-1.5 text-sm text-green-neon">
              <span className="h-2 w-2 rounded-full bg-green-neon animate-pulse" />
              Especialistas em clínicas odontológicas
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-green-light">
              Aumente o faturamento da sua clínica{" "}
              <span className="text-gradient">odontológica.</span>
            </h1>
            <p className="text-lg text-green-light/70 max-w-lg leading-relaxed">
              Implementamos uma estrutura completa de escala que une anúncios de alta performance ao treinamento comercial da sua equipe para garantir contratos assinados.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gradient-primary text-primary-foreground font-bold px-8 py-4 rounded-lg text-lg shadow-glow hover:scale-105 transition-transform animate-pulse-glow"
            >
              QUERO UMA CONSULTORIA ESTRATÉGICA
            </a>
          </div>

          {/* Right - Form */}
          <div className="bg-green-light rounded-2xl p-6 lg:p-8 shadow-card">
            <h3 className="text-xl font-bold text-foreground mb-6">Solicite sua consultoria gratuita</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" name="Nome" placeholder="Seu nome" required className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                <input type="tel" name="Telefone" placeholder="Telefone" required className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <input type="email" name="Email" placeholder="E-mail" required className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="text" name="Clinica" placeholder="Nome da clínica / Instagram" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              <select name="Cargo" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="">Qual o seu cargo?</option>
                <option>Dono</option>
                <option>Sócio</option>
                <option>Gerente</option>
                <option>Secretária</option>
              </select>
              <select name="Faturamento" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="">Qual seu faturamento médio atual?</option>
                <option>Até R$ 50.000,00</option>
                <option>De R$ 50.000,00 a R$ 150.000,00</option>
                <option>De R$ 150.000,00 a R$ 350.000,00</option>
                <option>De R$ 350.000,00 a R$ 800.000,00</option>
                <option>Mais de R$ 800.000,00</option>
              </select>
              <textarea name="Desafios" placeholder="Conte sobre sua clínica e seus principais desafios..." rows={3} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
              <input type="hidden" name="Created" value="x-sheetmonkey-current-date-time" />
              <button
                type="submit"
                disabled={submitting}
                className="w-full gradient-primary text-primary-foreground font-bold py-4 rounded-lg text-base hover:scale-[1.02] transition-transform shadow-glow disabled:opacity-60 disabled:hover:scale-100"
              >
                {submitting ? "ENVIANDO..." : "QUERO UMA CONSULTORIA ESTRATÉGICA"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="bg-green-dark border-green-neon/30 text-green-light max-w-md">
          <DialogHeader className="space-y-4 text-center sm:text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full gradient-primary shadow-glow">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <DialogTitle className="text-2xl font-extrabold text-green-light">
              Obrigado pelo seu <span className="text-gradient">interesse!</span>
            </DialogTitle>
            <DialogDescription className="text-green-light/70 text-base leading-relaxed">
              Recebemos suas informações com sucesso. Em breve, um especialista da <span className="font-bold text-green-neon">Green</span> entrará em contato para agendar sua consultoria estratégica.
            </DialogDescription>
          </DialogHeader>
          <button
            onClick={() => setShowSuccess(false)}
            className="w-full gradient-primary text-primary-foreground font-bold py-3 rounded-lg text-base hover:scale-[1.02] transition-transform shadow-glow mt-2"
          >
            ENTENDI
          </button>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
