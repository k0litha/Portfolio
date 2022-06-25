import '../styles/globals.css'
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
function MyApp({ Component, pageProps }) {

  return (
    <>
      <Navbar />
      
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
