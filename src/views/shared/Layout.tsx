import { html } from "hono/html";
type Props = {
  children: any;
  pageTitle: String;
};
export const Layout = ({ children, pageTitle }: Props) => html`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width,
initial-scale=1.0"
      />
      <title>
      ${pageTitle}
      </title>
      <link rel="stylesheet" href="../../../static/style.css" />
      <link rel="stylesheet" href="../../../static/normalisation.css" />
      <link rel="stylesheet" href="../../../static/Milligram.css" />
    </head>
    <body>
      ${children}
    </body>
  </html>`;
