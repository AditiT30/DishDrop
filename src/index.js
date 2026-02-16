import { createRoot } from 'react-dom/client';
import App  from './App.js';
import './index.css';
import {RouterProvider} from "react-router-dom";
import {appRouter} from "./App";
const root = createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
