function ConstantsEditor({ constants, setConstants }) {
    function addConstant() {
        setConstants([
            ...constants,
            {
                name: "",
                value: ""
            }
        ]);
    }

    function updateConstant(index, field, value) {
        const updated = [...constants];
        updated[index][field] = value;
        setConstants(updated);
    }

    function removeConstant(index) {
        setConstants(
            constants.filter((_, i) => i !== index)
        );
    }

    return (
        <section>
            <h2>Constants</h2>

            {constants.map((constant, index) => (
                <div className="constant-row" key={index}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={constant.name}
                        onChange={(event) =>
                            updateConstant(
                                index,
                                "name",
                                event.target.value
                            )
                        }
                    />

                    <input
                        type="number"
                        placeholder="Value"
                        value={constant.value}
                        onChange={(event) =>
                            updateConstant(
                                index,
                                "value",
                                event.target.value
                            )
                        }
                    />

                    <button
                        type="button"
                        onClick={() => removeConstant(index)}
                    >
                        −
                    </button>
                </div>
            ))}

            <button type="button" onClick={addConstant}>
                + Add constant
            </button>
        </section>
    );
}

export default ConstantsEditor;