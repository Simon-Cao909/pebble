import "./App.css";
import { useState } from "react";
import solve from "./components/Solver";


function EquationEditor({equation, setEquation}) {
    return (
        <section>
            <h2>Equation</h2>

            <textarea
                placeholder="Enter your PDE..."
                value={equation}
                onChange={(event) => setEquation(event.target.value)}
            />
        </section>
    );
}

function ConditionsEditor({bounds, setBounds}) {
    return (
        <section>
            <h2>Conditions</h2>

            <textarea
                placeholder="Enter boundary or initial conditions..."
                value={bounds}
                onChange={(event) => setBounds(event.target.value)}
            />
        </section>
    );
}

function App() {
    const [equation, setEquation] = useState("");
    const [bounds, setBounds] = useState("");

    return (
        <main>
            <header>
                <h1>PEBBLE</h1>
                <p>PDE Solver & Visualization</p>
            </header>

            <EquationEditor 
              equation={equation}
              setEquation={setEquation}  
            />

            <ConditionsEditor
              bounds={bounds}
              setBounds={setBounds}
            />

            <button onClick={() => solve(equation,bounds)}>
                Solve
            </button>
        </main>
    );
}

export default App;