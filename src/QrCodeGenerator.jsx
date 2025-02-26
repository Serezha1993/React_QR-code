import {useState} from 'react'
import { QRCodeSVG } from "qrcode.react";
import './qrCodeGenerator.css';

export const QrCodeGenerator = () => {
    const [value, setValue] = useState('Hello');
    const [result, setResult] = useState('');

    const onClickHandler = (event) => {
        setResult(value);
        setValue('');
       
    };

    const OnChangeHandler = (event) => {
        setValue(event.target.value)
        setResult('');
    };
    console.log('result', result);

    return (
        <div className='container'>
            <input 
              type="text"
              value={value} 
              placeholder='Введите текст...'
              onChange={OnChangeHandler}
              className="input"
              />
            <button type="button" className='button' onClick={onClickHandler}>
                Сгенерировать QR
            </button>

            {result !== '' && (
                  <QRCodeSVG value={result} size={200}/>
                )}
        </div>
    );
};