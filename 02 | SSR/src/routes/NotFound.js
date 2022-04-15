const path = '/404';
const action = () => NotFound();

export const NotFound = () => `
  <main>
    <h1>Page Not Found</h1>
    <p>Sorry, but the page you were trying to view does not exist.</p>
  </main>
`

export default { path, action };
