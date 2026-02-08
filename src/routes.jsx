import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Documentation from "./Pages/Documentation/Documentation";


export const routes = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/docs', element: <Documentation /> },
])