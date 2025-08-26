import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      company: "Café Aroma",
      content: "A Agência 19 transformou completamente nossa identidade visual. Agora nossa marca transmite exatamente os valores que queremos comunicar.",
      rating: 5,
    },
    {
      name: "João Santos",
      company: "TechStart",
      content: "Profissionais extremamente criativos e comprometidos. Nosso site aumentou 300% as conversões após o trabalho da equipe.",
      rating: 5,
    },
    {
      name: "Ana Costa",
      company: "Boutique Elegance",
      content: "A consultoria estratégica nos ajudou a reposicionar nossa marca no mercado. Resultados excepcionais em pouco tempo.",
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
          <p className="text-muted-foreground mb-8">Confiança de empresas de diversos segmentos</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Placeholder para logos de clientes */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-24 h-12 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Logo {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;