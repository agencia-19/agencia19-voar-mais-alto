import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      title: "Branding & Design",
      description: "Identidade visual forte e marcante",
      color: "from-primary/20 to-primary/5",
      borderColor: "border-primary/30",
      iconBg: "bg-primary",
      details: "Criamos marcas que conectam emocionalmente com seu público e transmitem os valores do seu negócio.",
    },
    {
      title: "Marketing Digital",
      description: "Estratégias para expandir sua presença online",
      color: "from-accent-blue/20 to-accent-blue/5",
      borderColor: "border-accent-blue/30",
      iconBg: "bg-accent-blue",
      details: "Desenvolvemos estratégias digitais completas para aumentar sua visibilidade e engajamento.",
    },
    {
      title: "Web & Apps",
      description: "Tecnologia criativa a serviço do seu negócio",
      color: "from-accent-green/20 to-accent-green/5",
      borderColor: "border-accent-green/30",
      iconBg: "bg-accent-green",
      details: "Criamos experiências digitais únicas que convertem visitantes em clientes fiéis.",
    },
    {
      title: "Consultoria Estratégica",
      description: "Visão clara para impulsionar resultados",
      color: "from-accent-purple/20 to-accent-purple/5",
      borderColor: "border-accent-purple/30",
      iconBg: "bg-accent-purple",
      details: "Orientamos sua empresa com estratégias personalizadas para alcançar seus objetivos.",
    },
  ];

  return (
    <section className="py-20 bg-support-light/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-support-black mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas para impulsionar sua marca e negócio
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`hover-lift bg-gradient-to-br ${service.color} ${service.borderColor} h-full group`}
            >
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg ${service.iconBg} flex items-center justify-center`}>
                    <div className="w-6 h-6 bg-white rounded-sm"></div>
                  </div>
                  <div>
                    <CardTitle className="text-xl text-support-black group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-medium mb-4">
                  {service.description}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="cta" size="xl">
            Vamos conversar sobre seu projeto
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;