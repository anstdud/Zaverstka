import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Services from './components/Services/Services.jsx';
import About from './components/AboutUs/About.jsx';
import Contacts from './components/Contacts/Contacts.jsx';
import Process from "./components/Process/Process.jsx";
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy.jsx';
import Footer from "./components/Footer/Footer.jsx";
import NotFound from './components/NotFound/NotFound.jsx';
import FaviconManager from './components/FaviconManager/FaviconManager.jsx';
import FaviconForceUpdate from './components/FaviconForceUpdate/FaviconForceUpdate.jsx';
import { useFavicon } from './hooks/useFavicon';

function App() {
    useFavicon();
    return (
        <HelmetProvider>
            <FaviconManager />
            <FaviconForceUpdate />
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
        </HelmetProvider>
    );
}

export default App;