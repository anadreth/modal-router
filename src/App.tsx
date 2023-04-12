import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./components/Home";
import { Modal } from "./components/Modal";
import Modal1 from "./components/Modals/Modal1";
import Modal2 from "./components/Modals/Modal2";

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <div className="App">
      <Routes location={background || location}>
        <Route path="/" element={<Home />}>
          <Route
            path="modal1"
            element={<Modal header="Modal 1" body={<Modal1 />} />}
          />
          <Route
            path="modal2"
            element={<Modal header="Modal 2" body={<Modal2 />} />}
          />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route
            path="modal1"
            element={<Modal header="Modal 1" body={<Modal1 />} />}
          />
          <Route
            path="modal2"
            element={<Modal header="Modal 2" body={<Modal2 />} />}
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
