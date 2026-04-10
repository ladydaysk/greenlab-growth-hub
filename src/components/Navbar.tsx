import logoIcon from "@/assets/logo-icon.png";
import logoText from "@/assets/logo-text.png";

const WA_LINK = "https://wa.me/5561990443888?text=Quero%20alavancar%20os%20resultados%20da%20minha%20clinica%20com%20a%20Green%2C%20como%20funciona%20o%20metodo%20de%20voces%3F";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-green-dark/80 backdrop-blur-lg border-b border-green-neon/10">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <img src={logoIcon} alt="Green Lab" className="w-8 h-8" />
          <img src={logoText} alt="Green Lab" className="h-6" />
        </div>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-primary text-primary-foreground text-sm font-bold px-5 py-2 rounded-lg hover:scale-105 transition-transform"
        >
          Fale Conosco
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
