import "./App.css";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { CTA } from "../components/CTA/CTA.jsx";
import { List } from "./List/List.jsx";
import { Form } from "./Form/Form.jsx";
import { ToLearnListContext } from "../applicattion/context/ToLearnListContext.jsx";
import { useToLearnList } from "../applicattion/hooks/useToLearnList.jsx";
import { LoginPage } from "../components/LoginPage/LoginPage.jsx";

export default function App() {
  const tolearnContextValue = useToLearnList(); // получаем контекст из хука (когда меняем контекст, происходит перерендер всего приложения) из формы мы поменяли общий state, так как форма обновляется, меняется все
  let userLoggedIn = true;
  return (
    <div className="App">
      <Header />

      <main>
        <div className="main-section__cta">
          <CTA />
        </div>
        <div className="main-section__content">
          <ToLearnListContext.Provider value={tolearnContextValue}>
            <List /> {userLoggedIn ? <Form /> : <LoginPage />}
          </ToLearnListContext.Provider>
        </div>
      </main>
      <Footer />
    </div>
  );
}
