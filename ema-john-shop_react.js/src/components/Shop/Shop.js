import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart();

    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [page, size])

    useEffect(() => {
        fetch('http://localhost:5000/product-count')
            .then(res => res.json())
            .then(data => {
                const count = data.productCount;
                const pages = Math.ceil(count / 10);
                setPageCount(pages);
            })
    }, [])


    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct._id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedProduct._id);
    }

    return (
        <div className='shop-container'>
            <div >
                <div className="products-container">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className='page-button'>
                    {
                        [...Array(pageCount).keys()].map(num => <button
                            onClick={() => setPage(num)}
                            className={page === num ? 'selected-button' : ''}
                            key={num}
                        >{num + 1}
                        </button>)
                    }
                    {/* page size  */}
                    {/* {size} */}
                    {
                        <select onChange={event => setSize(event.target.value)}>
                            <option value={5}>5</option>
                            <option value={10} defaultValue>10</option>
                            <option value={15}>15</option>
                            <option value={20}>20</option>
                        </select>
                    }
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to={'/orders'}><button className='review-order-button'>Review orders</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;