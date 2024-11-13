import {Hono} from "hono";
import {createFactory, Factory} from "hono/factory";
const factory = createFactory();

const HomeController = factory.createHandlers(async (c) => {
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width,initial-scale=1.0">
      <title>Parking</title>
      <link rel="stylesheet" href="../../static/style.css" />
      <link rel="stylesheet" href="../../static/normalisation.css" />
      <link rel="stylesheet" href="../../static/Milligram.css" />
    </head>
    <body>
    <h1>Welcome to Europark</h1>
    <img src="../../static/parking.png" alt="pas acces"/>
    <p>Save time and money with EuroPark! Enjoy a 100% contactless parking experience for a short or long duration in our car parks in Europe!</p>
    <ul>
        <li><a href="/cities">Our Cities</a></li>
        <li><a href="/parkings">Our Car Parks</a></li>
    </ul>
    </body>
    </html>
  `;
    return c.html(htmlContent);
});

export default HomeController;