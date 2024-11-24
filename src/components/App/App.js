import './app.scss';
import Tittle from '../Title/Title';
import CartBox from '../CartBox/CartBox';
import Total from '../Total/Total';
import products from './../../data';
import Wrapper from '../Wrapper/Wrapper';
import ListBox from '../ListBox/ListBox';
import Product from '../Product/Product';
import { useState } from 'react';

function App() {
    const [items, setItems] = useState(products);
    const [cart, setCart] = useState([]);
    const [num, setNum] = useState(1);

    function handleAddNum(id) {
        setItems((items) => {
            return items.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        num: item.num + 1,
                        quantity: item.quantity - 1,
                    };
                }
                return item;
            });
        });
    }

    return (
        <div className="container">
            <div className="cart">
                <Tittle />
                <CartBox>
                    <Wrapper className={'cart__left-wrapper'}>
                        <ListBox>
                            {items.map((item) => (
                                <Product
                                    btnText={'Добавить'}
                                    item={item}
                                    key={item.id}
                                    num={num}
                                    onAddNum={handleAddNum}
                                />
                            ))}
                        </ListBox>
                    </Wrapper>
                    <Wrapper className={'cart__right-wrapper'}>
                        <ListBox>
                            {cart.map((item) => (
                                <Product
                                    btnText={'Убрать'}
                                    item={item}
                                    key={item.id}
                                />
                            ))}
                        </ListBox>
                    </Wrapper>
                </CartBox>
                <Total />
            </div>
        </div>
    );
}

export default App;
