import React, { useState } from 'react';
import "../App.css";
import { useNavigate } from 'react-router-dom';

const AddProductForm = ({ onAddProduct }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [countInStock, setcountInStock] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !description || !price || countInStock || !imageUrl) return;

        const newProduct = {
            id: Date.now(), 
            name,
            description,
            price: parseFloat(price),
            countInStock,
            imageUrl
        };

        const existingProducts = JSON.parse(localStorage.getItem('products')) || [];
        const updatedProducts = [...existingProducts, newProduct];
        localStorage.setItem('products', JSON.stringify(updatedProducts));

        // Pass the new product object to parent component (optional)
        if (onAddProduct) {
            onAddProduct(newProduct);
        }

        // Clear form fields after submission
        setName('');
        setPrice('');
        setcountInStock('');
        setDescription('');
        setImageUrl('');

        navigate('/');
        window.alert('Product added successfully!');
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="form-container">
                <h2>Add Product</h2>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input"
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="form-input"
                />
                <input
                    type="text"
                    placeholder="countInStock"
                    value={countInStock}
                    onChange={(e) => setcountInStock(e.target.value)}
                    className="form-input"
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-textarea"
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="form-input"
                />
                <button type="submit" className="form-button">Add Product</button>
            </form>
        </>
    );
};

export default AddProductForm;
