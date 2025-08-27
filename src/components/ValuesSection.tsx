import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, ShieldCheck, Target } from "lucide-react";

const ValuesSection = () => {
  const values = [
    {
      title: "Criatividade",
      description: "para pensar além do óbvio.",
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      details: "Buscamos soluções inovadoras e originais que destacam sua marca no mercado.",
      gradient: "from-primary/20 to-primary/5",
      border: "border-primary/30",
    },
    {
      title: "Convicção",
      description: "para acreditar no propósito de cada projeto.",
      icon: <ShieldCheck className="w-6 h-6 text-secondary" />,
      details: "Trabalhamos com clareza e propósito, guiados por valores sólidos.",
      gradient: "from-secondary/20 to-secondary/5",
      border: "border-secondary/30",
    },
    {
      title: "Resultado",
      description: "para entregar impacto real aos nossos clientes.",
      icon: <Target className="w-6 h-6 text-accent-green" />,
      details: "Focamos em resultados mensuráveis que fazem a diferença no seu negócio.",
      gradient: "from-accent-green/20 to-accent-green/5",
      border: "border-accent-green/30",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-support-black mb-6">
            Nossos Valores
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Os pilares que guiam nosso trabalho e definem nossa essência
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className={`hover-lift bg-gradient-to-br ${value.gradient} ${value.border} text-center h-full group`}
            >
              <CardContent className="p-8">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-support-black mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-lg font-medium text-muted-foreground mb-4">
                  {value.description}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Inspirational quote section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-warm rounded-2xl p-8 md:p-12 text-white">
            <blockquote className="text-xl md:text-2xl font-medium mb-4">
              "Temos a força da criatividade e do propósito para transformar qualquer desafio em oportunidade."
            </blockquote>
            <cite className="text-white/80 font-medium">Filosofia Agência 19</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;