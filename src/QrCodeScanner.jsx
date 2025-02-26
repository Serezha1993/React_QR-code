import { Scanner } from "@yudiel/react-qr-scanner";

export const QrCodeScanner = () => {
    const scanHandler = (result) => {
        console.log(result);
    }

    const settings = {
        audio: false,
        finder: false,
    }

    return (
        <div>
            <Scanner 
            allowMultiple 
            onScan={scanHandler}
            components={settings}
            />
        </div>
    )
};