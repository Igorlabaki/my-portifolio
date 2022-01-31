import Layout from "../components/layout/layout";

export default function about() {
    return (
        <div className="flex flex-col h-screen bg-darkBlue p-10">
        <Layout>
          <div className="flex justify-start w-full">
            <div className="space-x-10">
              <h1 className="text-darkGray text-2xl font-bold">Education Background</h1>
              <div className="text-darkGray text-lg mt-10">
                <p>Analise e Desenvolvimento de Sistemas - Tecnologo</p>
                <p>Universisade Nove de Julho</p>
                <p>Sao Paulo - Brasil</p>
              </div>
              <div className="text-darkGray text-lg mt-10">
                <p>Code Devoloper</p>
                <p>Galileu - Porto / Portugal </p>
              </div>
              <div className="text-darkGray text-lg mt-10">
                <p>Ingles</p>
                <p>Kaplan International Language Center</p>
                <p>California - USA</p>
              </div>
              <div className="text-darkGray text-lg mt-10">
                <p>Direito</p>
                <p>Universidade Presbiteriana Mackenzie</p>
                <p>São Paulo - Brasil</p>
              </div>
            </div>
            <div className="ml-96 space-x-10">
              <h1 className="text-darkGray text-2xl font-bold">Work Experience</h1>
              <div className="text-darkGray text-lg mt-10">
                <p>Warehouse - Tesco Company</p>
                <p>Rugby - Reino Unido</p>
                <p>Janeiro 2019 - Julho 2019</p>
              </div>
              <div className="text-darkGray text-lg mt-10">
                <p>Gerente Administrativo - Bar e Lanchonete Cuca Grande</p>
                <p>São Paulo - Brasil</p>
                <p>Novembro-2017 - Setembro-2018</p>
              </div>
              <div className="text-darkGray text-lg mt-10">
                <p>Advogado Estagiário - Coimbra e Sant'anna</p>
                <p>São Paulo - Brasil</p>
                <p>Março-2014 - Fevereiro-2015</p>
              </div>
            </div>
            <div className="ml-40 space-x-10">
              <h1 className="text-darkGray text-2xl font-bold">Languages</h1>
              <div className="text-darkGray text-lg mt-10">
                <p>Inglês - Avancado</p>
                <p>Espanho - Basico</p>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    )
}
