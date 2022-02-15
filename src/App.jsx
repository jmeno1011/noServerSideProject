import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, About, SignUp, SignIn } from "./components/section1";
import { Main, Memo, Weather } from "./components/section2";
import DomSelect from "./components/section3/DomSelect";
import MyComponent1 from "./components/section5/MyComponent1";
import MyComponent2 from "./components/section5/MyComponent2";
import MyComponent3 from "./components/section5/MyComponent3";
import MyComponent4 from "./components/section5/MyComponent4";
import MyComponent5 from "./components/section5/MyComponent5";
import MyComponent6 from "./components/section5/MyComponent6";
import MyComponent7 from "./components/section5/MyComponent7";

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
        <Route path="noServerSideProject/section5/" element={<MyComponent1 name="React" />}/>
        <Route path="noServerSideProject/section5-1/" element={<MyComponent2  />}/>
        <Route path="noServerSideProject/section5-2/" element={<MyComponent3>리액트</MyComponent3>}/>
        <Route path="noServerSideProject/section5-3/" element={<MyComponent4>리액트</MyComponent4>}/>
        <Route path="noServerSideProject/section5-4/" element={<MyComponent5>리액트</MyComponent5>}/>
        <Route path="noServerSideProject/section5-5/" element={<MyComponent6 name={"3"}>리액트</MyComponent6>}/>
        <Route path="noServerSideProject/section5-6/" element={<MyComponent7 favoriteNumber={3} >리액트</MyComponent7>}/>
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
