import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home, About, SignUp, SignIn } from "./components/section1";
import { Main, Memo, Weather } from "./components/section2";
import DomSelect from "./components/section3/DomSelect";
import MyComponent1 from "./components/section5/MyComponent1";
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
import LifeCycle from "./components/section9/LifeCycle";
import { Counters } from "./components/section10/Counters";
import { Info } from "./components/section10/Info";
import Counters2 from "./components/section10/Counters2";
import { Info2 } from "./components/section10/Info2";
import { Average } from "./components/section10/Average";
import { Info3 } from "./components/section10/Info3";
import { SassComponent } from "./components/section11/SassComponent";
import Immer from "./components/section12/Immer";
import Immer2 from "./components/section12/Immer2";
import Immer3 from "./components/section12/Immer3";

function App() {
  let navigate = useNavigate();
  const imgUrl =
    "https://meno-image-storage.s3.ap-northeast-2.amazonaws.com/noServerSideProject/404-error.svg";
  return (
    <>
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
        <Route
          path="noServerSideProject/chapter6-1/"
          element={<IterationSample1 />}
        />
        <Route
          path="noServerSideProject/chapter6-2/"
          element={<IterationSample2 />}
        />
        <Route path="noServerSideProject/chapter7-1/" element={<LifeCycle />} />
        <Route path="noServerSideProject/chapter8-1" element={<Counters />} />
        <Route path="noServerSideProject/chapter8-2" element={<Info />} />
        <Route path="noServerSideProject/chapter8-3" element={<Counters2 />} />
        <Route path="noServerSideProject/chapter8-4" element={<Info2 />} />
        <Route path="noServerSideProject/chapter8-5" element={<Average />} />
        <Route path="noServerSideProject/chapter8-6" element={<Info3 />} />
        <Route
          path="noServerSideProject/chapter9-1"
          element={<SassComponent />}
        />
        <Route path="noServerSideProject/chapter12-1" element={<Immer />} />
        <Route path="noServerSideProject/chapter12-2" element={<Immer2 />} />
        <Route path="noServerSideProject/chapter12-3" element={<Immer3 />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
              <img
                className="img-404"
                src={imgUrl}
                onClick={() => {
                  navigate("/noServerSideProject");
                }}
              />
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default App;
