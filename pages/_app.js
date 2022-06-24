import '../styles/globals.css'
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
