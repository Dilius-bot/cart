import './app.scss';
import products from '../../data';

function App() {
    return (
        <div className="container">
            <div className="cart">
                <h1 className="cart__title">React Shopping-cart</h1>
                <div className="cart__box">
                    <div className="cart__left-wrapper wrapper">
                        <ul className="cart__list list-box">
                            <li className="list-box__items">
                                <img
                                    src={products[0].image}
                                    alt={products[0].title}
                                />
                                <div className="list-box__text">
                                    <h3>{products[0].title}</h3>
                                    <p>{products[0].description}</p>
                                </div>
                                <div className="list-box__quantity">
                                    <p>Количество:</p>
                                    <span>{products[0].quantity}</span>
                                </div>
                                <span>{products[0].price}₽</span>
                                <div className="list-box__increase">
                                    <button className="list-box__btn-increase">
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        min="1"
                                        max="100"
                                        value="1"
                                    />
                                    <button className="list-box__btn-increase">
                                        +
                                    </button>
                                </div>
                                <button className="btn">Добавить</button>
                            </li>
                            <li className="list-box__items">
                                <img
                                    src={products[0].image}
                                    alt={products[0].title}
                                />
                                <div className="list-box__text">
                                    <h3>{products[0].title}</h3>
                                    <p>{products[0].description}</p>
                                </div>
                                <div className="list-box__quantity">
                                    <p>Количество:</p>
                                    <span>{products[0].quantity}</span>
                                </div>
                                <span>{products[0].price}₽</span>
                                <div className="list-box__increase">
                                    <button className="list-box__btn-increase">
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        min="1"
                                        max="100"
                                        value="1"
                                    />
                                    <button className="list-box__btn-increase">
                                        +
                                    </button>
                                </div>
                                <button className="btn">Добавить</button>
                            </li>
                            <li className="list-box__items">
                                <img
                                    src={products[0].image}
                                    alt={products[0].title}
                                />
                                <div className="list-box__text">
                                    <h3>{products[0].title}</h3>
                                    <p>{products[0].description}</p>
                                </div>
                                <div className="list-box__quantity">
                                    <p>Количество:</p>
                                    <span>{products[0].quantity}</span>
                                </div>
                                <span>{products[0].price}₽</span>
                                <div className="list-box__increase">
                                    <button className="list-box__btn-increase">
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        min="1"
                                        max="100"
                                        value="1"
                                    />
                                    <button className="list-box__btn-increase">
                                        +
                                    </button>
                                </div>
                                <button className="btn">Добавить</button>
                            </li>
                        </ul>
                    </div>
                    <div className="cart__right-wrapper wrapper">
                        <ul className="cart__list list-box">
                            <li className="list-box__items">
                                <img
                                    src={products[0].image}
                                    alt={products[0].title}
                                />
                                <div className="list-box__text">
                                    <h3>{products[0].title}</h3>
                                    <p>{products[0].description}</p>
                                </div>
                                <div className="list-box__quantity">
                                    <p>Количество:</p>
                                    <span>{products[0].quantity}</span>
                                </div>
                                <span>{products[0].price}₽</span>
                                <div className="list-box__increase">
                                    <button className="list-box__btn-increase">
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        min="1"
                                        max="100"
                                        value="1"
                                    />
                                    <button className="list-box__btn-increase">
                                        +
                                    </button>
                                </div>
                                <button className="btn">Добавить</button>
                            </li>
                            <li className="list-box__items">
                                <img
                                    src={products[0].image}
                                    alt={products[0].title}
                                />
                                <div className="list-box__text">
                                    <h3>{products[0].title}</h3>
                                    <p>{products[0].description}</p>
                                </div>
                                <div className="list-box__quantity">
                                    <p>Количество:</p>
                                    <span>{products[0].quantity}</span>
                                </div>
                                <span>{products[0].price}₽</span>
                                <div className="list-box__increase">
                                    <button className="list-box__btn-increase">
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        min="1"
                                        max="100"
                                        value="1"
                                    />
                                    <button className="list-box__btn-increase">
                                        +
                                    </button>
                                </div>
                                <button className="btn">Добавить</button>
                            </li>
                            <li className="list-box__items">
                                <img
                                    src={products[0].image}
                                    alt={products[0].title}
                                />
                                <div className="list-box__text">
                                    <h3>{products[0].title}</h3>
                                    <p>{products[0].description}</p>
                                </div>
                                <div className="list-box__quantity">
                                    <p>Количество:</p>
                                    <span>{products[0].quantity}</span>
                                </div>
                                <span>{products[0].price}₽</span>
                                <div className="list-box__increase">
                                    <button className="list-box__btn-increase">
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        min="1"
                                        max="100"
                                        value="1"
                                    />
                                    <button className="list-box__btn-increase">
                                        +
                                    </button>
                                </div>
                                <button className="btn">Добавить</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="total">
                    <h3>Итого:</h3>
                    <p>Количество:</p>
                    <p>Общая сумма</p>
                </div>
            </div>
        </div>
    );
}

export default App;
