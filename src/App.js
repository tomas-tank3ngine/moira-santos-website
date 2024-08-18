import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./assets/utils/context-utils";


function App() {
  return (
    <BrowserRouter>
        <Store>
            <Routes>
                <Route
                    path="/"
                    element={<></>}
                />
                {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
        </Store>
    </BrowserRouter>
  );
}

export default App;
