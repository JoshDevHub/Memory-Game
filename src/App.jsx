import "./index.css";

import Header from "./components/Header";
import Game from "./components/Game";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-emerald-100">
      <Header />
      <Game />
      <Footer />
    </div>
  );
}

export default App;
