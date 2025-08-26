import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: "📱",
      title: "WhatsApp",
      description: "Resposta rápida para suas dúvidas",
      action: "Chamar no WhatsApp",
      link: "https://wa.me/5511999999999",
      color: "hover:bg-accent-green/10 hover:border-accent-green/30",
    },
    {
      icon: "✉️", 
      title: "E-mail",
      description: "contato@agencia19.com.br",
      action: "Enviar e-mail",
      link: "mailto:contato@agencia19.com.br",
      color: "hover:bg-accent-blue/10 hover:border-accent-blue/30",
    },
    {
      icon: "📍",
      title: "Localização",
      description: "São Paulo, SP",
      action: "Ver localização",
      link: "#",
      color: "hover:bg-accent-purple/10 hover:border-accent-purple/30",
    },
  ];

  return (
    <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      {/* Pattern de fundo */}
      <div className="absolute inset-0 wing-pattern opacity-10"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vamos decolar juntos?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Fale agora com a Agência 19 e descubra como sua marca pode voar mais alto.
          </p>
          
          {/* Main CTA */}
          <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90 hover:scale-110 mb-12">
            Solicitar Orçamento Gratuito
          </Button>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((contact, index) => (
            <Card 
              key={index} 
              className={`bg-white/10 border-white/20 backdrop-blur-sm hover-lift transition-all duration-300 ${contact.color}`}
            >
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">{contact.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
                <p className="text-white/80 mb-6">{contact.description}</p>
                <Button 
                  variant="outline" 
                  className="bg-white/10 border-white/40 text-white hover:bg-white hover:text-primary"
                  onClick={() => window.open(contact.link, '_blank')}
                >
                  {contact.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Links */}
        <div className="text-center">
          <p className="text-white/80 mb-6">Siga-nos nas redes sociais</p>
          <div className="flex justify-center space-x-6">
            {[
              { name: 'Instagram', icon: '📷', link: '#' },
              { name: 'LinkedIn', icon: '💼', link: '#' },
              { name: 'Facebook', icon: '📘', link: '#' },
              { name: 'YouTube', icon: '📺', link: '#' },
            ].map((social, index) => (
              <button
                key={index}
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                onClick={() => window.open(social.link, '_blank')}
              >
                <span className="text-xl">{social.icon}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;