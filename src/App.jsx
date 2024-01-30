import Hero from "./components/Hero";
import Demo from "./components/Demo";

import "./App.css";

const App = () => {
    return (
        <>
            <main>
                <div className='main'>
                    <div className='gradient' />
                </div>
                <p>
                    Hi
                </p>

                <div className='app'>
                    <Hero />
                    <Demo />
                </div>
            </main>
        </>

    );
};

export default App;