import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, About, SignUp, SignIn } from "./components/sectionOne";
import { Main, Memo, Weather } from "./components/sectionTwo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="main/" element={<Main />}>
          <Route path="weather" element={<Weather />} />
          <Route path="memo" element={<Memo />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
