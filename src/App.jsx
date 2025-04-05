import { useState } from "react";
import "./App.css";
import Navbar from "./compoents/Navbar";
import Textform from "./compoents/Box";
import About from "./compoents/About";
import Alert from "./compoents/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#887ED6";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <Router>
      <Navbar title="Text_Utils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route
          path="/text_utlis/"
          element={
            <Textform
              heading="Enter the text below"
              mode={mode}
              alert={alert}
            />
          }
        />

        <Route path="/text_utlis/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
