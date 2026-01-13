import './App.css';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Services from './components/Services/Services.jsx';
import About from './components/AboutUs/About.jsx';
import Contacts from './components/Contacts/Contacts.jsx';
import Process from "./components/Process/Process.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Hero />
                <Services />
                <Process />
                <About />
                <Contacts />
            </main>
            <Footer/>
        </div>
    );
}

export default App;