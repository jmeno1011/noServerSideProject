import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, About, SignUp, SignIn } from "./components/sectionOne";
import { Main, Memo, Weather, Weather2 } from "./components/sectionTwo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/noServerSideProject/" element={<Home />} />
        <Route path="noServerSideProject/about" element={<About />} />
        <Route path="noServerSideProject/sign-up" element={<SignUp />} />
        <Route path="noServerSideProject/sign-in" element={<SignIn />} />
        <Route path="noServerSideProject/main/" element={<Main />}>
          <Route path="weather" element={<Weather />} />
          <Route path="weather2" element={<Weather2 />} />
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
