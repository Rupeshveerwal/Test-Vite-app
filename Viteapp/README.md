# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Salary prediction API

Install the Python dependencies from the project root:

```powershell
python -m pip install -r backend\requirements.txt
```

Start the API in one terminal:

```powershell
python -m uvicorn backend.main:app --reload --port 8000
```

Start the frontend in another terminal with `npm run dev`. Vite proxies `/api` requests to the backend.

- `GET /api/training-data` returns the records used to train the model.
- `POST /api/predict` accepts JSON such as `{"experience_years": 3}` and returns `predicted_salary`.

The backend currently uses clearly identified demo salary records. Replace them with representative real data before using predictions for decisions.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
