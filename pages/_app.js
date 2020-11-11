import '../styles.css';

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