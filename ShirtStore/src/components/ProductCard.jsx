import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";


function ProductCard ({product}){
    const dispatch = useDispatch();

    const handleAddToCart =() => {
        dispatch(addToCart(product));
    };

    return (
        <div>
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                <img src={product.thumbnail} alt={product.title} className="h-full w-full object-cover"/>

            </div>

            <h3 className="mt-4 font-bold">
                {product.title}
            </h3>

            <h3 className="mt-2 font-bold">
                #{product.price}
            </h3>

             <button
                onClick={handleAddToCart}
                className="mt-4 w-full rounded-full bg-black px-5 py-3 text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-md active:scale-95">
                Add to Cart
            </button>
        </div>
    );
}

export default ProductCard;