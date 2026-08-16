async function solve(equation, bounds) {

    const response = await fetch(
        "http://localhost:8000/solve",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                equation: equation
            })
        }
    );

    const result = await response.json();

    console.log(result);
}