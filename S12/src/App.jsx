import "./App.css";
import Header from "./components/header/Header.jsx";
import Banner from "./components/banner/Banner.jsx";
import Footer from "./components/footer/Footer.jsx";
import CardContainer from "./components/card-container/CardContainer.jsx";
import Title from "./components/state-concept/Title.jsx";
import Count from "./components/state-concept/Count.jsx";
function App() {
  return (
    <div>
      <Header />
      <Title />
      <hr />
      <Count />
    </div>
  );
}

export default App;
