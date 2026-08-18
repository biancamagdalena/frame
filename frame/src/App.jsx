import Header from "./components/Header/Header"
const curso = "Desenvolvimento Web"
const tecnologia = "React"


function App() {

  return (
    <div>

      <Header />

      <main>
        <h2>Bem-vindo ao SobrouVendi {curso}</h2>

        <p>
          Meu primeiro projeto utilizando React. {tecnologia}
        </p>
      </main>

    </div>
  )
}

export default App

