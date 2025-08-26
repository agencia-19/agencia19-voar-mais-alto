import LogoComponent from "@/components/LogoComponent";

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
                { icon: '📷', link: '#' },
                { icon: '💼', link: '#' },
                { icon: '📘', link: '#' },
                { icon: '📺', link: '#' },
              ].map((social, index) => (
                <button
                  key={index}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  onClick={() => window.open(social.link, '_blank')}
                >
                  <span>{social.icon}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-primary transition-colors">Branding & Design</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Marketing Digital</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Web & Apps</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Consultoria</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-white/70">
              <li>contato@agencia19.com.br</li>
              <li>(11) 99999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>

        {/* Separador e copyright */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 Agência 19. Todos os direitos reservados.
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