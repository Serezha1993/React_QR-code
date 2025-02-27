import {Routes, Route} from "react-router-dom";
import {Navigation} from './Components/Navigation/Navigation';
import {QrCodeGenerator} from './Components/Generate/QrCodeGenerator';
import { QrCodeScanner } from './Components/Scan/QrCodeScanner';

export const Layout = () => {
    return (
        <div>
            <Navigation/>

            <Routes>
                <Route path="generate" element={<QrCodeGenerator/>}/>
                <Route path="scan" element={<QrCodeScanner/>}/>
            </Routes>
        </div>
    );
};