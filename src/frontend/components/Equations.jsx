function EquationEditor({ equations, setEquations }) {

    function addEquation() {
        setEquations([
            ...equations,
            ""
        ]);
    }

    function removeEquation(index) {
        setEquations([
            equations.filter((_,i) => i !== index)
        ]);
    }

    return (
        <section>
            <h2>Equations</h2>

            {equations.map((equation, index) => (
                <div className="equation-row" key={index}>
                    <input
                        value={equation}
                        placeholder="Enter equation..."
                        onChange={(event) => {
                            const updated = [...equations];

                            updated[index] =
                                event.target.value;

                            setEquations(updated);
                        }}
                    />

                    <button
                        type="button"
                        onClick={() => removeEquation(index)}
                    >
                        −
                    </button>

                </div>
            ))}

            <button onClick={addEquation}>
                + Add equation
            </button>


        </section>
    );
}

export default EquationEditor;