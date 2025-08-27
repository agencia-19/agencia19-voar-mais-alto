import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <FaWhatsapp size={24} className="text-green-500" color="white" />,
      title: "WhatsApp",
      description: "Resposta rápida para suas dúvidas",
      action: "Chamar no WhatsApp",
      link: "https://wa.me/558781252870",
      color: "hover:bg-accent-green/10 hover:border-accent-green/30",
    },
    {
      icon: <FaEnvelope size={24} className="text-blue-500" color="white" />,
      title: "E-mail",
      description: "contato@agencia19.org",
      action: "Enviar e-mail",
      link: "mailto:contato@agencia19.org",
      color: "hover:bg-accent-blue/10 hover:border-accent-blue/30",
    },
    {
      icon: <FaMapMarkerAlt size={24} className="text-purple-500" color="white" />,
      title: "Localização",
      description: "Belo Jardim, PE",
      action: "Ver localização",
      link: "https://maps.app.goo.gl/N927Hu1QPNpxGEA87",
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
          <Button
            asChild
            variant="hero"
            size="xl"
            className="bg-white text-primary hover:bg-white/90 hover:scale-110 mb-12"
          >
            <a
              href="https://crm.agencia19.org/forms/quote/86f1725978bbd37a1227a2a347d18f45?styled=1&with_logo=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar Orçamento Gratuito
            </a>
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
        <div className="flex justify-center space-x-6">
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
    </section>
  );
};

export default ContactSection;