async function solve(problem) {
    const response = await fetch(
        "http://localhost:8000/solve",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(problem)
        }
    );

    const result = await response.json();

    console.log("PEBBLE response:", result);
}

export default solve;