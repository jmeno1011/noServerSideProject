import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, About, SignUp, SignIn } from "./components/section1";
import { Main, Memo, Weather } from "./components/section2";
import DomSelect from "./components/section3/DomSelect";

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
          <Route path="memo" element={<Memo />} />
          <Route path="dom-select" element={<DomSelect />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
              <img
                className="img-404"
                src={`https://meno-image-storage.s3.ap-northeast-2.amazonaws.com/noServerSideProject/404-error.svg`}
              />
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
