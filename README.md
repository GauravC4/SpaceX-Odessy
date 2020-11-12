# ***SpaceX-Odyssey***
Consumes SpaceX data public ![api](https://api.spacexdata.com/v3/launches) to show mission details filtered by year, launch and land success.

https://space-x-odessy.vercel.app/

## Running locally in development mode

To get started, just clone the repository and run `npm install && npm test && npm run dev`:

    git clone https://github.com/GauravC4/SpaceX-Odessy.git
    npm install
    npm test
    npm run dev
    
## Building and deploying in production

If you wanted to run this site in production, you should install modules, run tests with `npm test`, then build the site with `npm run build` and run it with `npm start`:

    npm install
    npm test
    npm run build
    npm start
    
In both cases the app should be up and running at http://localhost:3000

## Demo
![SpaceX Odyssey Demo](./github_assets/demo.gif)

## Technology used
 - [X] It uses ![Next.js](https://nextjs.org/) which is a React Server Side Rendering framework.
First page is rendered on server which provides better SEO support and performace, subsequent requests are taken care of with ajax and json response from server so page refresh is not required to update data.

 - [X] For styling global and component level css is used. Media queries are used for responsive design with mobile first approach. Layout uses a combination of flex box and css grid.

 - [X] ![NProgress](https://ricostacruz.com/nprogress/) library is used for the loading animation.

 - [X] ![Jest](https://jestjs.io/) for unit testing the js functions and ![React testing library](https://testing-library.com/docs/react-testing-library/intro/) for testing react components.

 - [X] Deployment is done on ![Vercel](https://vercel.com/). It hooks on to the main branch in git and whenever there's a commit, automated test cases are run and build the deployed.

## Google Lighthouse Score
![Lighthouse score](./github_assets/light_house.JPG)

## Responsiveness
### Mobile
![Mobile](./github_assets/mobile.png)

### Tablet
![Tablet](./github_assets/tablet.png)

### Desktop
![Desktop](./github_assets/desktop.png)

## Attribution
Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
