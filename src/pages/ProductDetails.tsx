import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
}

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError("Failed to load product");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <p className="p-6">Loading...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;
  if (!product) return <p className="p-6">No product found</p>;

  return (
    <div className="p-6 flex flex-col justify-center content-center  w-200">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-64 h-64 object-cover rounded"
      />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-600">{product.category}</p>
      <p className="text-lg font-semibold mt-2">${product.price}</p>
      <p className="mt-2">{product.description}</p>
      <button className="mt-4 bg-yellow-600 text-white px-4 py-2 w-50 rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
