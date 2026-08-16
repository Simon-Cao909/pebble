function VariablesEditor({ variables, setVariables }) {
    function addVariable() {
        setVariables([
            ...variables,
            {
                name: "",
                lower: 0,
                upper: 1
            }
        ]);
    }

    function removeVariable(index) {
        setVariables(
            variables.filter((_, i) => i !== index)
        );
    }

    return (
        <section>
            <h2>Variables</h2>

            {variables.map((variable, index) => (
                <div className="variable-row" key={index}>

                    <input
                        value={variable.name}
                        placeholder="x"
                        onChange={(event) => {
                            const updated = [...variables];

                            updated[index].name =
                                event.target.value;

                            setVariables(updated);
                        }}
                    />

                    <input
                        type="number"
                        value={variable.lower}
                        onChange={(event) => {
                            const updated = [...variables];

                            updated[index].lower =
                                event.target.value;

                            setVariables(updated);
                        }}
                    />

                    <span>≤ {variable.name} ≤</span>

                    <input
                        type="number"
                        value={variable.upper}
                        onChange={(event) => {
                            const updated = [...variables];

                            updated[index].upper =
                                event.target.value;

                            setVariables(updated);
                        }}
                    />

                    <button
                        type="button"
                        onClick={() => removeVariable(index)}
                    >
                        −
                    </button>

                </div>
            ))}

            <button onClick={addVariable}>
                + Add variable
            </button>
        </section>
    );
}

export default VariablesEditor;