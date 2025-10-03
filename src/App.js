import { Header, Title, AboutMe, Projects, Footer } from "./components/index.js";

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", "flex-direction": "column", width: "100%" }}
    >
      <Header />
      <Title />
      <AboutMe />
      {/*<Projects />*/}
      <Footer />
    </div>
  );
}

export default App;
