import React from 'react';
import '../ProductCard.css';

export default function ProductForm(props) {


    return (
        <div>
            <form>
                <label for="category" className="category">Choose a category:</label>
                    <select name="category" id="category" >
                        <option value="Beverages">Beverages</option>
                        <option value="Fruit">Fruit</option>
                        <option value="Meat and Seafood">Meat & Seafood</option>
                        <option value="Vegetables">Vegetables</option>
                        <option value="Condiments and Spices">Condiments & Spices</option>
                        <option value="Grains and Bread">Grains & Bread</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Sauces and Oils">Sauces & Oils</option>
                        <option value="Other">Other</option>
                    </select>
            </form>
        </div>
    )
}