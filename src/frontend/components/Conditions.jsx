function ConditionsEditor({ conditions, setConditions }) {
    function addCondition() {
        setConditions([
            ...conditions,
            {
                expression: "",
                location: ""
            }
        ]);
    }

    function updateCondition(index, field, value) {
        const updated = [...conditions];
        updated[index][field] = value;
        setConditions(updated);
    }

    function removeCondition(index) {
        setConditions(
            conditions.filter((_, i) => i !== index)
        );
    }

    return (
        <section>
            <h2>Conditions</h2>

            {conditions.map((condition, index) => (
                <div className="condition-row" key={index}>
                    <input
                        type="text"
                        placeholder="Condition..."
                        value={condition.expression}
                        onChange={(event) =>
                            updateCondition(
                                index,
                                "expression",
                                event.target.value
                            )
                        }
                    />

                    <span>@</span>

                    <input
                        type="text"
                        placeholder="Location..."
                        value={condition.location}
                        onChange={(event) =>
                            updateCondition(
                                index,
                                "location",
                                event.target.value
                            )
                        }
                    />

                    <button
                        type="button"
                        onClick={() => removeCondition(index)}
                    >
                        −
                    </button>
                </div>
            ))}

            <button type="button" onClick={addCondition}>
                + Add condition
            </button>
        </section>
    );
}

export default ConditionsEditor;