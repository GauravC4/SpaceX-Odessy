import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
    return (
    <div>
        <h1>WELCOME</h1>
        <Component {...pageProps} />
    </div>
    );
  }
  

  
  export default MyApp