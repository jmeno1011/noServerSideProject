import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home, About, SignUp, SignIn } from "./components/section1";
import { Memo, Weather, Layout } from "./components/section2";
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
import Test from "./components/section2/Test";
import Chapter3 from "./components/chapter3/Chapter3";
import Chapter4 from "./components/chapter4/Chapter4";
import Chapter5 from "./components/chapter5/Chapter5";

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
        <Route path="noServerSideProject/main/" element={<Layout />}>
          <Route path="weather" element={<Weather />} />
          <Route index element={<Memo />} />
          <Route path="memo" element={<Memo />} />
          <Route path="test" element={<Test />} />
          <Route path="chapter3" element={<Chapter3 />} />
          <Route path="chapter4" element={<Chapter4 />} />
          <Route path="chapter5" element={<Chapter5 />} />
        </Route>
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
            <main style={{ padding: "1rem", color: "white" }}>
              <p>There's nothing here!</p>
              <img
                className="img-404"
                src={imgUrl}
                onClick={() => {
                  navigate("/noServerSideProject");
                }}
                alt="404 not found"
              />
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default App;
