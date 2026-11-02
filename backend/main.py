# pyright: reportMissingImports=false
# pyright: reportMissingModuleSource=false

from pathlib import Path

from fastapi import FastAPI
import pandas as pd  # type: ignore


from sklearn.model_selection import train_test_split  # type: ignore
from sklearn.linear_model import LinearRegression  # type: ignore


app=FastAPI()


df = pd.read_csv(Path(__file__).with_name("Movie.csv"))

X = df[["movie_id","fight_scenes","car_chases"]]
y = df["jokes_count"]


X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2)


model = LinearRegression()
model.fit(X_train, y_train)

pre=model.predict(X_test)

@app.get("/")
def display():
    return{
        "message": "running",
        "ajay": pre.tolist()
    }


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="127.0.0.1", port=8000)