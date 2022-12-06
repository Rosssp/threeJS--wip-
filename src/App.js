import "./App.css";
import FloorBlock from "./block/Floor/FloorBlock";

import Main from "./components/main/Main";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";

function App() {
    return (
        <div className="App">
            <Header />
            {/* <Main /> */}
            <FloorBlock />
            <Footer />
        </div>
    );
}

export default App;
