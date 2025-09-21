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
    <div className="bg-gray-100">
  

      <div className="bg-[#F4F4F4]">
        <div className="mx-auto max-w-3xl px-3 py-5 text-center md:py-10">
          <h1 className="text-3xl font-semibold leading-tight text-[#1E1E1E] md:text-[40px]">
            All-in-One E-commerce App
          </h1>
          <h2 className="mt-5 text-lg font-medium text-[#1E1E1E]">
            Discover premium products and enjoy shopping with us. Risk Free
            Shopping!
          </h2>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl p-6">
        <div className="flex flex-col overflow-hidden rounded-lg border border-green-200 bg-white lg:flex-row">
          <div className="lg:w-1/2">
            <img
              className="h-96 w-full object-cover"
              src={product.thumbnail}
              alt={product.title}
            />
          </div>

          <div className="p-6 lg:w-1/2">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              {product.title}
            </h2>
            <p className="mb-2 text-sm text-gray-500">
              Category: {product.category}
            </p>

            <p className="mb-6 text-gray-700">{product.description}</p>

            <p className="mb-6 text-2xl font-semibold text-gray-800">
              ${product.price}
            </p>

            <button className="w-full rounded bg-yellow-500 px-4 py-2 text-white hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>


    </div>
  );
};

export default ProductDetails;
