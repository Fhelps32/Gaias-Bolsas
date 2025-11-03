import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Recycle, Brain, ShieldCheck } from "lucide-react";
import Button from "../components/ui/button";

const Index = () => {
  const collections = [
    {
      title: "Coleção Essenza",
      description: "",
      image: (
        <img
          src="/images/essenza.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      ),
    },
    {
      title: "Coleção Singular",
      description: "",
      image: (
        <img
          src="/images/singular.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      ),
    },
    {
      title: "Coleção TrendZ",
      description: "",
      image: (
        <img
          src="/images/trendz.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      ),
    },
    {
      title: "Personalizada",
      description: "",
      image: (
        <img
          src="/images/bolsa.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-emerald-50 text-emerald-900">
      <Header />

      <main className="flex-1">
        <Hero
          title="Gaia’s Bolsas"
          subtitle="Sustentabilidade que você carrega com você. Bolsas elegantes feitas de materiais reciclados."
          buttons={[
            { label: "Ver Produtos", href: "/produto" },
            { label: "Oficinas", href: "/oficinas", variant: "outline" },
          ]}
          bgClassName="bg-gradient-to-b from-emerald-200/30 via-emerald-100/20 to-white"
        />

        {/* Collections Section */}
        <section className="relative -mt-10 z-10">
          <div className="absolute inset-0 bg-linear-to-b from-white via-emerald-200 to-emerald-300"></div>

          <div className="relative w-[90%] mx-auto px-4 md:px-8 py-20 bg-white rounded-3xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.25)]">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-900">
                Nossas Coleções
              </h2>
              <p className="text-lg text-emerald-700 max-w-2xl mx-auto">
                Descubra nossas coleções de ecobags, feitas com amor e
                responsabilidade ambiental.
              </p>
            </div>

            {/* GRID no desktop / CARROSSEL no mobile */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {collections.map((collection) => (
                <ProductCard
                  key={collection.title}
                  title={collection.title}
                  description={collection.description}
                  image={collection.image}
                />
              ))}
            </div>

            {/* Carrossel Mobile */}
            <div className="md:hidden flex overflow-x-auto gap-4 snap-x snap-mandatory pb-4">
              {collections.map((collection) => (
                <div
                  key={collection.title}
                  className="snap-center shrink-0 w-[85%] bg-white rounded-2xl shadow-md border border-emerald-200 overflow-hidden flex flex-col items-center"
                >
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={collection.image.props.src}
                      alt={collection.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-emerald-900">
                      {collection.title}
                    </h3>
                    <p className="text-sm text-emerald-700 mt-1">
                      {collection.description ||
                        "Conheça os detalhes dessa coleção exclusiva."}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Indicador de rolagem */}
            <p className="md:hidden text-center text-emerald-600 mt-3 text-sm">
              ⇢ Arraste para o lado ⇠
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-emerald-300 ">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-900">
                Por que nos escolher?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border-2 border-emerald-400 hover:border-emerald-600 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-emerald-100 rounded-full w-fit">
                    <Recycle className="h-8 w-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-emerald-800">
                    Redução de resíduos
                  </CardTitle>
                  <CardContent className="pt-4 px-0">
                    <p className="text-sm text-emerald-700">
                      Nossas bolsas são feitas com borracha reciclada, ajudando
                      a reduzir a quantidade de resíduos que acabam em aterros
                      sanitários e oceanos.
                    </p>
                  </CardContent>
                </CardHeader>
              </Card>

              <Card className="border-2 border-emerald-400 hover:border-emerald-600 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-emerald-100 rounded-full w-fit">
                    <Brain className="h-8 w-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-emerald-800">
                    Conscientização
                  </CardTitle>
                  <CardContent className="pt-4 px-0">
                    <p className="text-sm text-emerald-700">
                      Ao escolher nossas bolsas, você apoia a conscientização
                      sobre a importância da reciclagem e do consumo
                      sustentável.
                    </p>
                  </CardContent>
                </CardHeader>
              </Card>

              <Card className="border-2 border-emerald-400 hover:border-emerald-600 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-emerald-100 rounded-full w-fit">
                    <ShieldCheck className="h-8 w-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-emerald-800">
                    Estilo e durabilidade
                  </CardTitle>
                  <CardContent className="pt-4 px-0">
                    <p className="text-sm text-emerald-700">
                      Nossas bolsas não são apenas ecológicas, mas também
                      estilosas e duráveis, perfeitas para o uso diário.
                    </p>
                  </CardContent>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Oficinas Section */}
        <section className="py-20 bg-white text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-6 text-emerald-900">
              Participe das Nossas Oficinas
            </h2>
            <p className="text-lg text-emerald-800 mb-8">
              Aprenda a transformar materiais reciclados em arte e moda! Nossas
              oficinas são uma oportunidade única de unir criatividade e
              sustentabilidade.
            </p>
            <Button
              asChild
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl"
            >
              <a href="/oficinas">Ver Oficinas</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
