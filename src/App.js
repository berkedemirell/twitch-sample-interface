import "./App.css";
import { Navbar } from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Chatbar from "./components/Chatbar.jsx";
import Main from "./components/Main.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-body">
        <Sidebar />
        <Main/>
        <Chatbar />
      </div>
    </div>
  );
}

export default App;
