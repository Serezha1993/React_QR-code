import {useState} from 'react'
import { QRCodeSVG } from "qrcode.react";
import s from'./qrCodeGenerator.module.css';

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
        <div className={s.container}>
            <input 
              type="text"
              value={value} 
              placeholder='Введите текст...'
              onChange={OnChangeHandler}
              className={s.input}
              />
            <button type="button" className={s.button} onClick={onClickHandler}>
                Сгенерировать QR
            </button>

            {result !== '' && (
                <div className={s.qrWrapper}>
                  <QRCodeSVG value={result} size={200}/>
                </div>
                )}
        </div>
    );
};