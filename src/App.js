import logo from "./logo.svg";
import "./App.css";
// import OrderPage from "./Pages/OrderPages";
import Sidebar from "./Layout/Sidebar";
import SidebarContent from "./Layout/Content";

function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <SidebarContent />
    </div>
  );
}

export default App;
