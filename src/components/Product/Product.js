import Btn from '../Btn/Btn';
import './product.scss';

export default function Product({ item, btnText, onAddNum }) {
    return (
        <li className="list-box__items">
            <img src={item.image} alt={item.title} />
            <div className="list-box__text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </div>
            <div className="list-box__quantity">
                <p>Количество:</p>
                <span>{item.quantity}</span>
            </div>
            <span>{item.price}₽</span>
            <div className="list-box__increase">
                <Btn className="list-box__btn-increase">-</Btn>
                <span>{item.num}</span>
                <Btn
                    onClick={() => onAddNum(item.id)}
                    className="list-box__btn-increase"
                >
                    +
                </Btn>
            </div>
            <Btn>{btnText}</Btn>
        </li>
    );
}
