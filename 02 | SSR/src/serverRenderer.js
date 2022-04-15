export const serverRenderer = (RootComponent, state) => `
  <!doctype html>
  <html lang="ko">
    <head>
      <meta charset="UTF-8">
      <title>Server Side Rendering</title>
      <script>
        window.$state = ${JSON.stringify(state)}
      </script>
    </head>
    <body>
      <main id="app">${RootComponent}</main>
      <script src="./src/main.js" type="module"></script>
    </body>
  </html>
`;
