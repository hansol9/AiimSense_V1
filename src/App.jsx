import Header from "./components/Header";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import WhyChoose from "./components/WhyChoose";
import Team from "./components/Team";
import Technology from "./components/Technology";
import Application from "./components/Application";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Mission />
        <WhyChoose />
        <Team />
        <Technology />
        <Application />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
