from fastapi import FastAPI
app = FastAPI()

@app.get("/fact")
def input(n:int):
    if n == 0 or n == 1:
        return {"result": 1}
    result = 1
    for i in range(2, n + 1):
        result *= i
    return {"result": result}