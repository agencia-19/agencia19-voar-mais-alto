import { Button } from "@/components/ui/button";
import heroImage from "@/assets/simbolo-A.png";
import LogoComponent from "@/components/LogoComponent";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Pattern de fundo */}
      <div className="absolute inset-0 wing-pattern opacity-20"></div>

      {/* Imagem de fundo */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60">
        <img
          src={heroImage}
          alt="Asas em voo representando velocidade e proteção"
          className="w-full h-full object-cover mix-blend-overlay opacity-30"
        />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Logo da Agência 19 */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center mb-6">
            <LogoComponent variant="negative" size="lg" />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
          Ouse tirar seu projeto do papel.
          <br />
          <span className="text-white/90">A Agência 19 voa com você.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Unimos criatividade, inovação e propósito para impulsionar marcas e negócios.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button variant="hero" size="xl" className="animate-float" onClick={() =>
            window.open(
              "https://crm.agencia19.org/forms/quote/86f1725978bbd37a1227a2a347d18f45?styled=1&with_logo=1",
              "_blank"
            )
          }>
            Vamos decolar juntos
          </Button>
          <Button variant="outline" size="xl" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm" onClick={() => window.location.href = "#services"}>
            Conheça nossos serviços
          </Button>
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;