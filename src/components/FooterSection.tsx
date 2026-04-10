import logoIcon from "@/assets/logo-icon.png";
import logoText from "@/assets/logo-text.png";

const WA_LINK = "https://wa.me/5561990443888?text=Quero%20alavancar%20os%20resultados%20da%20minha%20clinica%20com%20a%20Green%2C%20como%20funciona%20o%20metodo%20de%20voces%3F";

const FooterSection = () => {
  return (
    <footer className="bg-green-dark border-t border-green-neon/10">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logoIcon} alt="Green Lab" className="w-10 h-10" />
            <img src={logoText} alt="Green Lab" className="h-12" />
          </div>

          <div className="flex items-center gap-6">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-green-light/60 hover:text-green-neon transition-colors">
              Contato
            </a>
            <a href="#" className="text-sm text-green-light/60 hover:text-green-neon transition-colors">
              Políticas de Privacidade
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-green-neon/10 text-center">
          <p className="text-xs text-green-light/40">
            © {new Date().getFullYear()} Green Lab Assessoria. Todos os direitos reservados. | CNPJ: XX.XXX.XXX/0001-XX
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
