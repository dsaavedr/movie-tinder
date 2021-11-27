import { Outlet } from "react-router";
import Header from "./components/Header";

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
