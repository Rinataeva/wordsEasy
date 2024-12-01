import "./App.css";
import "./List/List.css";
import Header from "../components/Header.jsx";
import { List } from "./List/List.jsx";
import { Form } from "./Form/Form.jsx";
import { ToLearnListContext } from "../applicattion/context/ToLearnListContext.jsx";
import { useToLearnList } from "../applicattion/hooks/useToLearnList.jsx";

export default function App() {
  const tolearnContextValue = useToLearnList(); // получаем контекст из хука (когда меняем контекст, происходит перерендер всего приложения) из формы мы поменяли общий state, так как форма обновляется, меняется все
  return (
    <div className="App">
      <Header />
      <main className="main">
        <section className="main-section">
          <h2>Learn words easily</h2>
          <h3>Only 1 min per day</h3>
          <div className="main-section__content">
            <ToLearnListContext.Provider value={tolearnContextValue}>
              <List />
              <Form />
            </ToLearnListContext.Provider>
          </div>
        </section>
      </main>
    </div>
  );
}
