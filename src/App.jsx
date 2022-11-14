import "./App.css";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Home, About, SignUp, SignIn } from "./components/section1";
import { Memo, Weather, Layout } from "./components/section2";
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
import Chapter6 from "./components/chapter6/Chapter6";
import Chapter7 from "./components/chapter7/Chapter7";
import Pockemon from "./components/resource/Pockemon";
import Calendar from "./components/calendar/Calendar";
import Hierarchies from "./components/componentPJ/Hierarchies";
import News from "./components/news/News";

function App() {
  let navigate = useNavigate();
  const imgUrl =
    "https://meno-image-storage.s3.ap-northeast-2.amazonaws.com/noServerSideProject/404-error.svg";
  return (
    <>
      <Routes>
        <Route path="/prac_etc/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="pokemon" element={<Pockemon />} />
          <Route path="main/" element={<RequirAuth Component={Layout} />}>
            <Route index element={<RequirAuth Component={Memo} />} />
            <Route path="weather" element={<Weather />} />
            <Route path="test" element={<RequirAuth Component={Test} />} />
            <Route path="news" element={<RequirAuth Component={News} />} />
            <Route path="news/:category" element={<RequirAuth Component={News} />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="hierachies" element={<Hierarchies />} />
            <Route path="chapter3" element={<RequirAuth Component={Chapter3} />} />
            <Route path="chapter4" element={<RequirAuth Component={Chapter4} />} />
            <Route path="chapter5" element={<RequirAuth Component={Chapter5} />} />
            <Route path="chapter6" element={<RequirAuth Component={Chapter6} />} />
            <Route path="chapter7" element={<RequirAuth Component={Chapter7} />} />
            <Route path="chapter8-1" element={<RequirAuth Component={Counters} />} />
            <Route path="chapter8-2" element={<RequirAuth Component={Info} />} />
            <Route path="chapter8-3" element={<RequirAuth Component={Counters2} />} />
            <Route path="chapter8-4" element={<RequirAuth Component={Info2} />} />
            <Route path="chapter8-5" element={<RequirAuth Component={Average} />} />
            <Route path="chapter8-6" element={<RequirAuth Component={Info3} />} />
            <Route path="chapter9-1" element={<RequirAuth Component={SassComponent} />} />
            <Route path="chapter12-1" element={<RequirAuth Component={Immer} />} />
            <Route path="chapter12-2" element={<RequirAuth Component={Immer2} />} />
            <Route path="chapter12-3" element={<RequirAuth Component={Immer3} />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem", color: "white" }}>
                <p>There's nothing here!</p>
                <img
                  className="img-404"
                  src={imgUrl}
                  onClick={() => {
                    navigate("/prac_etc");
                  }}
                  alt="404 not found"
                />
              </main>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

function RequirAuth({ Component }) {
  let auth = JSON.parse(window.localStorage.getItem("isLogin"));
  let location = useLocation();
  if (!auth) {
    return (
      <Navigate to="/prac_etc/sign-in" state={{ from: location }} replace />
    );
  }

  return <Component />;
}

export default App;
