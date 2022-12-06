import "./App.css";
import Header from "./layout/header/Header";
import Main from "./components/main/Main";
import Footer from "./layout/footer/Footer";
import Block from "./block/block/Block";
import Scene from "./block/flag/Scene";

function App() {
    return (
        <div className="App">
            <Header />
            {/* <Block /> */}
            <div style={{ position: "relative", width: "100vw" }}>
                <div style={{ position: "absolute", width: "100vw" }}>
                    <Scene />
                </div>
                <Main />
            </div>
            <Footer />
        </div>
    );
}

export default App;
