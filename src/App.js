import logo from './logo.svg';
import './App.css';
import SheeshHero from "./components/SheeshHero";
import LinksSection from "./components/LinksSection";
import MemeLibrary from "./components/MemeLibrary";
import ScrollingImages from "./components/ScrollingImages";
import SheeshInfo from "./components/SheeshInfo";
import Footer from "./components/Footer";
function App() {
  return (
    <div
      className="min-h-screen bg-gradient-to-r from-black via-gray-800 to-black"
    >
      <div className="container mx-auto px-4">
        <ScrollingImages />
        <SheeshHero />
        <LinksSection />
        <ScrollingImages />
        <SheeshInfo />
        <MemeLibrary />
        <Footer />
      </div>
    </div>
  );
}

export default App;
