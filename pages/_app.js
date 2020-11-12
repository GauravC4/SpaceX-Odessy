import '../styles.css';
import Router from "next/router";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
    return (
    <div id="app">
        <header>SpaceX Launch Programs</header>
        <Component {...pageProps} />
        <footer>Developed By : Gaurav Chemburkar</footer>
    </div>
    );
  }
    
  export default MyApp