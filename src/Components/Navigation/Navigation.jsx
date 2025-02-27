import {Link} from "react-router-dom";
import s from './Navigation.module.css';

export const Navigation = () => {
    return (
        <nav className={s.container}>
            <Link to="/generate">Генерировать Qr код</Link>
            <Link to="/scan">Сканировать Qr код</Link>
            <Link to="/">История Генерирования</Link>
            <Link to="/">Генерировать сканирования</Link>
        </nav>
    )
}