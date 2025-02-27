import {useState} from 'react'
import { Scanner } from "@yudiel/react-qr-scanner";
import s from './qrCodeScanner.module.css';

import {SCAN_DATA} from '../../constants';

export const QrCodeScanner = () => {
    const [scanned, setScanned] = useState(null);

    const scanHandler = (result) => {
        setScanned(result[0].rawValue);

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || []);
        console.log('svsv', prevData);
        localStorage.setItem('SCAN_DATA', JSON.stringify([result[0].rawValue]));
    };
    
    return (
        <div className={s.container}>
            <p>{scanned}</p>
            <Scanner 
            allowMultiple 
            onScan={scanHandler}
            components={{
                audio: false,
                finder: false,
            }}
            styles={{
                container:{width: 350}
            }}
            />
            <p className={s.result}>{scanned}</p>
        </div>
    )
};