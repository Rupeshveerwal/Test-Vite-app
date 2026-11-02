# Factorial.py
from fastapi import FastAPI
app = FastAPI()
def factorial(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial(n-1)


@app.get("/factorial")
def input(n: int):
    return {"result": factorial(n)}
