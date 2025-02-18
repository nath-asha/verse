import React, { useEffect, useState } from 'react';
import "../App.css"
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {

        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];

        if (storedProducts.length === 0) {
            setProducts([
                {
                        id: 1, 
                        name: "Black Casual Shoes(Women)",
                        description: "Comfortable and stylish black casual shoes for women.",
                        price: 29.99,
                        countInStock: 50,
                        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpotO9iwAzxwPRshrQrZYbYiBD3Et23V0eNhPDtzRhZZFu0wTR"
                },
                {
                    id: 2,
                    name: "White Casual Shoes",
                    description: "Versatile white casual shoes for everyday wear.",
                    price: 24.99,
                    countInStock: 60,
                    imageUrl: "https://via.placeholder.com/300x200/FFFFFF/000000?text=White+Casual+Shoes"
                }
            ]);
        } else {
            setProducts(storedProducts);
        }
    }, []);

    const addNewProduct = () => {
        navigate("/addProduct");
    }

    return (
        <div>
            <h2>Product List</h2>
            <button onClick={addNewProduct}>Add New Product</button>
            <div className="products-container">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.imageUrl} alt={product.name} className="product-image" />
                        <div className="product-details">
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-price">${product.price}</p>
                            <p className="product-category">Category: {product.category}</p>
                            <p className="product-description">{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
