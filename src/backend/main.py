from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from pinn import get_pinn
from parser import parse_conditions, parse_constants, parse_variables

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Variable(BaseModel):
    name: str
    lower: float
    upper: float


class Constant(BaseModel):
    name: str
    value: str


class Condition(BaseModel):
    expression: str
    location: str


class PDEProblem(BaseModel):
    variables: list[Variable]
    functions: list[str]
    constants: list[Constant]
    equations: list[str]
    conditions: list[Condition]


@app.get("/")
def root():
    return {
        "status": "PEBIL backend is alive 🪨"
    }


@app.post("/solve")
def solve(problem: PDEProblem):
    variables, bounds, los, his = parse_variables(problem.variables)
    functions = problem.functions
    constants = parse_constants(problem.constants)
    equations = problem.equations
    conditions = parse_conditions(problem.conditions)

    print("Problem: ", problem.model_dump())
    print("Variables: ", variables)
    print("Conditions: ", conditions)
    
    pinn = get_pinn(
        variables=variables,
        functions=functions,
        equations=equations,
        conditions=conditions,
        bounds=bounds,
        constants=constants,
        mins=los,
        maxs=his,
        outputs=tuple([1]*len(functions))
    )

    pinn.fit()

    print("=================")
    print("Successfully fit!")
    print("Score: ", pinn.score())
    print("=================")

    return {
        "status": "received",
        "given problem": problem.model_dump(),
    }