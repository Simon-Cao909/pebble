from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


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
        "status": "PEBBLE backend is alive 🪨"
    }


@app.post("/solve")
def solve(problem: PDEProblem):

    print("\nReceived PEBBLE problem:")
    print(problem.model_dump())

    return {
        "status": "received",
        "problem": problem.model_dump()
    }