import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto principal */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-support-black mb-6">
                Sobre Nós
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                A Agência 19 nasceu com o propósito de unir criatividade, inovação e propósito para transformar marcas em experiências memoráveis.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nosso símbolo — a asa — representa velocidade, proteção e inspiração divina, lembrando que cada projeto é guiado por valores sólidos e visão de futuro.
              </p>
            </div>
          </div>

          {/* Cards de inspiração */}
          <div className="space-y-6">
            <Card className="hover-lift bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-support-black mb-2">Velocidade</h3>
                    <p className="text-muted-foreground">
                      Agilidade na execução e entrega de resultados que impactam.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-support-black mb-2">Proteção</h3>
                    <p className="text-muted-foreground">
                      Cuidamos de cada detalhe do seu projeto com zelo e responsabilidade.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-gradient-to-br from-accent-green/5 to-accent-green/10 border-accent-green/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-accent-green rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-support-black mb-2">Inspiração Divina</h3>
                    <p className="text-muted-foreground">
                      Cada projeto é guiado por valores sólidos e propósito maior.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Versículos inspiradores */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
            <blockquote className="text-xl md:text-2xl font-medium text-support-black mb-4">
              "Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar."
            </blockquote>
            <cite className="text-muted-foreground font-medium">Josué 1:9</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;