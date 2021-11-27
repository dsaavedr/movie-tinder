import { Outlet } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./styles/index.sass";

function App() {
    return (
        <div className='App'>
            <Header />
            {/* <Home /> */}
            <Outlet />
        </div>
    );
}

export default App;
