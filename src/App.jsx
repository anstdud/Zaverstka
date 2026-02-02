import './App.css';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Services from './components/Services/Services.jsx';
import About from './components/AboutUs/About.jsx';
import Contacts from './components/Contacts/Contacts.jsx';
import Process from "./components/Process/Process.jsx";
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy.jsx';
import Footer from "./components/Footer/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <div className="App">
                        <Header />
                        <main>
                            <Hero />
                            <Services />
                            <Process />
                            <About />
                            <Contacts />
                        </main>
                        <Footer />
                    </div>
                } />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;