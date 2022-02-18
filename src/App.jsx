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
import MyComponent8 from "./components/section5/MyComponent8";
import Counter from "./components/section5/Counter1";
import Counter2 from "./components/section5/Counter2";
import Counter3 from "./components/section5/Counter3";
import Counter4 from "./components/section5/Counter4";
import Say1 from "./components/section5/Say1";
import Say2 from "./components/section5/Say2";
import EventPractice1 from "./components/section6/EventPractice1";
import EventPractice2 from "./components/section6/EventPractice2";
import EventPractice3 from "./components/section6/EventPractice3";
import EventPractice4 from "./components/section6/EventPractice4";
import EventPractice5 from "./components/section6/EventPractice5";
import EventPractice6 from "./components/section6/EventPractice6";
import EventPractice7 from "./components/section6/EventPractice7";
import EventPractice8 from "./components/section6/EventPractice8";
import CompoRender from "./components/section7/CompoRender";
import RefPractice from "./components/section7/RefPractice";
import Chapter5 from "./components/section7/Chapter5";
import { IterationSample1 } from "./components/section8/IterationSample1";
import { IterationSample2 } from "./components/section8/IterationSample2";

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
          path="noServerSideProject/section5/"
          element={<MyComponent1 name="React" />}
        />
        <Route
          path="noServerSideProject/section5-1/"
          element={<MyComponent2 />}
        />
        <Route
          path="noServerSideProject/section5-2/"
          element={<MyComponent3>리액트</MyComponent3>}
        />
        <Route
          path="noServerSideProject/section5-3/"
          element={<MyComponent4>리액트</MyComponent4>}
        />
        <Route
          path="noServerSideProject/section5-4/"
          element={<MyComponent5>리액트</MyComponent5>}
        />
        <Route
          path="noServerSideProject/section5-5/"
          element={<MyComponent6 name={"3"}>리액트</MyComponent6>}
        />
        <Route
          path="noServerSideProject/section5-6/"
          element={<MyComponent7 favoriteNumber={3}>리액트</MyComponent7>}
        />
        <Route
          path="noServerSideProject/section5-7/"
          element={<MyComponent8 favoriteNumber={3}>리액트</MyComponent8>}
        />
        <Route path="noServerSideProject/section6-1/" element={<Counter />} />
        <Route path="noServerSideProject/section6-2/" element={<Counter2 />} />
        <Route path="noServerSideProject/section6-3/" element={<Counter3 />} />
        <Route path="noServerSideProject/section6-4/" element={<Counter4 />} />
        <Route path="noServerSideProject/section6-5/" element={<Say1 />} />
        <Route path="noServerSideProject/section6-6/" element={<Say2 />} />
        <Route
          path="noServerSideProject/chapter4-1/"
          element={<EventPractice1 />}
        />
        <Route
          path="noServerSideProject/chapter4-2/"
          element={<EventPractice2 />}
        />
        <Route
          path="noServerSideProject/chapter4-3/"
          element={<EventPractice3 />}
        />
        <Route
          path="noServerSideProject/chapter4-4/"
          element={<EventPractice4 />}
        />
        <Route
          path="noServerSideProject/chapter4-5/"
          element={<EventPractice5 />}
        />
        <Route
          path="noServerSideProject/chapter4-6/"
          element={<EventPractice6 />}
        />
        <Route
          path="noServerSideProject/chapter4-7/"
          element={<EventPractice7 />}
        />
        <Route
          path="noServerSideProject/chapter4-8/"
          element={<EventPractice8 />}
        />
        <Route
          path="noServerSideProject/chapter5-1/"
          element={<CompoRender />}
        />
        <Route
          path="noServerSideProject/chapter5-2/"
          element={<RefPractice />}
        />
        <Route path="noServerSideProject/chapter5-3/" element={<Chapter5 />} />
        <Route path="noServerSideProject/chapter6-1/" element={<IterationSample1 />} />
        <Route path="noServerSideProject/chapter6-2/" element={<IterationSample2 />} />
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
