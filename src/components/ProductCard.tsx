import { Link } from "react-router-dom";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const ProductCard = ({ id, title, price, thumbnail }: ProductProps) => {
  return (
    <div className="border rounded-lg shadow p-4 bg-white">
      <Link to={`/product/${id}`}>
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-40 object-cover rounded"
        />
        <h2 className="mt-2 font-semibold">{title}</h2>
      </Link>
      <p className="text-gray-600">${price}</p>
      <button className="mt-2 bg-yellow-600 text-white px-4 py-1 rounded">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
