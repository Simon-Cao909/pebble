function FunctionsEditor({ functions, setFunctions }) {
    function addFunction() {
        setFunctions([
            ...functions,
            ""
        ]);
    }

    function updateFunction(index, value) {
        const updated = [...functions];
        updated[index] = value;
        setFunctions(updated);
    }

    function removeFunction(index) {
        setFunctions(
            functions.filter((_, i) => i !== index)
        );
    }

    return (
        <section>
            <h2>Functions</h2>

            {functions.map((func, index) => (
                <div className="function-row" key={index}>
                    <input
                        type="text"
                        placeholder="Function..."
                        value={func}
                        onChange={(event) =>
                            updateFunction(
                                index,
                                event.target.value
                            )
                        }
                    />

                    <button
                        type="button"
                        onClick={() => removeFunction(index)}
                    >
                        −
                    </button>
                </div>
            ))}

            <button type="button" onClick={addFunction}>
                + Add function
            </button>
        </section>
    );
}

export default FunctionsEditor;