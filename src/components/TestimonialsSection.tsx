import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Felipe Andrade",
      company: "LoggiX",
      content: "O ERP Sinamus, desenvolvido pela Agência 19, trouxe uma revolução para nossa gestão. Hoje temos total controle financeiro e operacional em tempo real, tudo de forma prática e intuitiva.",
      rating: 5,
    },
    {
      name: "Carolina Mendes",
      company: "Clínica Vida+",
      content: "Os agentes de Inteligência Artificial implementados revolucionaram nosso atendimento. Pacientes recebem respostas rápidas 24/7, e nossa satisfação do cliente disparou.",
      rating: 5,
    },
    {
      name: "Ricardo Oliveira",
      company: "Construtora Prime",
      content: "Precisávamos de um sistema sob medida e a Agência 19 entregou exatamente o que imaginávamos. A Fábrica de Software entendeu nossa identidade e criou uma solução completa.",
      rating: 5,
    },

  ];

  return (
    <section className="py-20 bg-support-light/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-support-black mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Depoimentos de quem confia no nosso trabalho
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift bg-white shadow-card h-full">
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">★</span>
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div>
                  <cite className="font-semibold text-support-black not-italic">
                    {testimonial.name}
                  </cite>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">
            Confiança de empresas de diversos segmentos
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-90">
            {[
              { name: "APeC IASD", logo: "https://apec.adventistas.org/wp-content/themes/pa-theme-sedes/assets/sedes/pt/apec.svg" },
              { name: "Podcast Beberibe1285", logo: "https://i1.sndcdn.com/avatars-mSGVm9QLGFnQykfU-gdkNRw-t240x240.jpg" },
              { name: "Prefeitura de Pesqueira", logo: "https://pesqueira.pe.gov.br/wp-content/uploads/2025/01/LOGO-SITE-PMP-01.jpg" },
            ].map((client, i) => (
              <div
                key={i}
                className="w-24 flex flex-col items-center text-center"
              >
                <div className="w-24 h-12 rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="mt-2 text-xs text-muted-foreground">{client.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;