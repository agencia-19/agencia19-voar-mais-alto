import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      title: "SaaS",
      description: "Toda a inovação que você precisa, a apenas uma assinatura de distância.",
      color: "from-primary/20 to-primary/5",
      borderColor: "border-primary/30",
      iconBg: "bg-primary",
      details: "Oferecemos soluções SaaS modernas que aproximam você do seu público e fortalecem os valores da sua marca, com praticidade e escalabilidade.",
    },
    {
      title: "Inteligência Artificial",
      description: "Automatize processos e conquiste resultados até enquanto dorme.",
      color: "from-accent-blue/20 to-accent-blue/5",
      borderColor: "border-accent-blue/30",
      iconBg: "bg-accent-blue",
      details: "Implementamos agentes inteligentes que otimizam o atendimento e garantem agilidade. Porque cada cliente bem atendido é uma oportunidade transformada em resultado.",
    },
    {
      title: "Fábrica de Software",
      description: "Do zero ao extraordinário: criamos soluções sob medida para o seu negócio.",
      color: "from-accent-green/20 to-accent-green/5",
      borderColor: "border-accent-green/30",
      iconBg: "bg-accent-green",
      details: "Desenvolvemos sistemas personalizados que refletem a identidade da sua empresa e atendem exatamente às suas necessidades.",
    },
    {
      title: "Consultoria Estratégica",
      description: "Clareza e estratégia para levar sua empresa além.",
      color: "from-accent-purple/20 to-accent-purple/5",
      borderColor: "border-accent-purple/30",
      iconBg: "bg-accent-purple",
      details: "Guiamos o seu negócio com análises profundas e estratégias exclusivas, para transformar objetivos em conquistas reais.",
    },

  ];

  return (
    <section id="services" className="py-20 bg-support-light/50">
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
        <div className="px-4 flex justify-center">
          <Button
            variant="cta"
            size="xl"
            onClick={() =>
              window.open(
                "https://crm.agencia19.org/forms/quote/86f1725978bbd37a1227a2a347d18f45?styled=1&with_logo=1",
                "_blank"
              )
            }
            className="w-full sm:w-auto"
          >
            Vamos conversar sobre seu projeto
          </Button>
        </div>


      </div>
    </section>
  );
};

export default ServicesSection;