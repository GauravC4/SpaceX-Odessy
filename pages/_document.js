import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta
              name="description"
              content="SpaceX mission details filtered by year, launch and land success."
            />
            <meta name="robots" content="index,follow" />
            <link rel="icon" href="./static/shuttle.svg" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,800;1,400&display=swap" rel="stylesheet" /> 
            <title>SpaceX Odyssey</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument