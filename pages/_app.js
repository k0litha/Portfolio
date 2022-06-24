import '../styles/globals.css'
import Navbar from '../components/Navbar';
import Main from '../components/Main';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Main />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
