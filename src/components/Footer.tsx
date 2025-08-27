import LogoComponent from "@/components/LogoComponent";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-support-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <LogoComponent variant="negative" size="lg" />
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              Unimos criatividade, inovação e propósito para transformar marcas em experiências memoráveis.
            </p>
            <div className="flex space-x-4">
              {[
                { name: "Instagram", icon: Instagram, link: "https://instagram.com/@_agencia.19" },
                { name: "LinkedIn", icon: Linkedin, link: "https://www.linkedin.com/company/agencia19" },
                { name: "YouTube", icon: Youtube, link: "https://www.youtube.com/@Ag%C3%AAncia19" },
              ].map((social, index) => (
                <button
                  key={index}
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  onClick={() => window.open(social.link, "_blank")}
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6 text-white" />
                </button>
              ))}
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#services" className="hover:text-primary transition-colors">Saas</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Inteligência Artificial</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Fábrica de Software</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Consultoria</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-white/70">
              <li>contato@agencia19.org</li>
              <li>87 0 8125-2870</li>
              <li>Belo Jardim, PE</li>
            </ul>
          </div>
        </div>

        {/* Separador e copyright */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2025 Agência 19. Todos os direitos reservados. CNPJ: 62.144.025/0001-16
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 text-sm hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-white/60 text-sm hover:text-primary transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;