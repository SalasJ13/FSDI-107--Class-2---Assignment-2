import QuantityPicker from './quantityPicker';
import "./product.css"


const Product = () => {

    return(

        <div className="product">
            <img className='img-container' src="https://picsum.photos/200/300" alt="Product"/>
            <div className="info-container">
                <h3>Product</h3>
                <label>$1.00</label>
                <label>$20.00</label>
            </div>
            <div className="contador">
                <QuantityPicker/>
            </div>
                
                <a className="add-cart">Add to Cart</a> 
        </div>


        

    );  
};

export default Product;