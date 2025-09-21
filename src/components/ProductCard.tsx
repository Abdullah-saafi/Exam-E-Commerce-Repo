import { Link } from "react-router-dom";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const ProductCard = ({ id, title, price, thumbnail }: ProductProps) => {
  return (
    <div className="border overflow-hidden rounded-lg bg-white shadow">
      <Link to={`/product/${id}`}>
        <img src={thumbnail} alt={title} className="h-48 w-full object-cover" />
        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold text-gray-800">{title}</h3>
          <p className="mb-4 text-gray-600">${price}</p>
          <button className="w-full rounded bg-yellow-500 px-4 py-2 text-white hover:bg-blue-600">
            Buy Now
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
