import './App.css';

import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Education from './components/education/Education';
import Contact from './components/contact/Contact';
import useLocalStorage from 'use-local-storage'
import Certifications from './components/certificates/Certifications';
import Projects from './components/projects/Projects';


function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    return (
        <div className="app" data-theme={theme}>
            <Sidebar theme={theme} switchTheme={switchTheme} />
            <main className='main'>
                <Home />
                <About />
                <Projects />
                <Education />
                <Certifications />
                <Contact theme={theme} />
            </main>
        </div>
    );
}

export default App;
