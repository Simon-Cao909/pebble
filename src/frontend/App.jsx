import "./App.css";
import { useState } from "react";
import solve from "./components/Solver";

import ConditionsEditor from "./components/Conditions";
import ConstantsEditor from "./components/Constants";
import EquationEditor from "./components/Equations";
import FunctionsEditor from "./components/Functions";
import VariablesEditor from "./components/Variables";

function App() {
    
    const [variables, setVariables] = useState([
        {
            name: "x",
            lower: 0,
            upper: 1
        }
    ]);

    const [functions, setFunctions] = useState([]);

    const [constants, setConstants] = useState([]);

    const [equations, setEquations] = useState([""]);

    const [conditions, setConditions] = useState([]);

    const problem = {
        variables,
        functions,
        constants,
        equations,
        conditions
    };

    return (
        <main>
            <header>
                <h1>PEBIL</h1>
                <p>PDE Solver & Visualization</p>
            </header>

            <VariablesEditor
                variables={variables}
                setVariables={setVariables}
            />

            <FunctionsEditor
                functions={functions}
                setFunctions={setFunctions}
            />

            <ConstantsEditor
                constants={constants}
                setConstants={setConstants}
            />

            <EquationEditor 
              equations={equations}
              setEquations={setEquations}  
            />

            <ConditionsEditor
              conditions={conditions}
              setConditions={setConditions}
            />

            <button onClick={() => solve(problem)}>
                Solve
            </button>
        </main>
    );
}

export default App;