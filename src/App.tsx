import GlobalStyle from "./globalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <h1> A template for fresh React Typescript projects including:</h1>

      <ul>
        <li>An E2E test suite with Cypress.</li>
        <li>An integration/unit test suite with Jest.</li>
        <li>
          Plop for generating components, utils, and hooks.
          <ul>
            <li>
              Components are generated with an index file from which they are exported, a types file, a Cypress testing
              file, an optional styled component file
            </li>
            <li>
              Utils are generated with an index file from which they are exported, a types file, and a Jest testing
              file.
            </li>
            <li>Hooks are generated with an index file from which they are exported and a Jest testing file.</li>
          </ul>
        </li>
        <li> Husky pre-push check to ensure all tests pass before pushing.</li>
        <li>Styles normalized with normalize.css.</li>
      </ul>
    </div>
  );
}

export default App;
