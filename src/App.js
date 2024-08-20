import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./assets/utils/context-utils";
import NotFoundPage from "./assets/pages/NotFoundPage/NotFoundPage"


function App() {
  return (
    <BrowserRouter>
        <Store>
            <Routes>
                <Route
                    path="/"
                    element={<>Hello</>}
                />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Store>
    </BrowserRouter>
  );
}

export default App;
