import { useParams } from "react-router-dom";
import {
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "../../redux/api/baseApi";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";

const UpdateProduct = () => {
  const { id } = useParams();

  const { data: product, isLoading } = useGetProductByIdQuery(id);
  const [updateProduct] = useUpdateProductMutation();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    stockQuantity: 0,
    brand: "",
    rating: 0,
    price: 0,
    description: "",
    image: "",
  });

  useEffect(() => {
    if (product) {
      setFormData({
        title: product?.data?.title || "",
        category: product?.data?.category || "",
        stockQuantity: product?.data?.stockQuantity || 0,
        brand: product?.data?.brand || "",
        rating: product?.data?.rating || 0,
        price: product?.data?.price || 0,
        description: product?.data?.description || "",
        image: product?.data?.image || "",
      });
    }
  }, [product]);

  const handleEventChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateProduct = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      const payload = {
        id,
        data: { ...formData },
      };

      await updateProduct(payload).unwrap();
      console.log("updated product", updateProduct);
      toast.success("Your Product Updated Successfully!");
    } catch (err) {
      toast.error("Failed to Update Product.");
    }
  };

  if(isLoading){
    <h2>Loading...</h2>
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center mt-20">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Create a Product
        </h2>
        <form id="productForm" onSubmit={handleUpdateProduct}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label" htmlFor="title">
                <span className="label-text">Product Title</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleEventChange}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="category">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleEventChange}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="stockQuantity">
                <span className="label-text">Stock Quantity</span>
              </label>
              <input
                type="number"
                id="stockQuantity"
                name="stockQuantity"
                value={formData.stockQuantity}
                onChange={handleEventChange}
                className="input input-bordered"
                min="0"
                required
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="brand">
                <span className="label-text">Brand</span>
              </label>
              <input
                type="text"
                id="brand"
                name="brand"
                value={formData.brand}
                onChange={handleEventChange}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="rating">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleEventChange}
                className="input input-bordered"
                step="0.1"
                min="0"
                max="5"
                required
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="price">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleEventChange}
                className="input input-bordered"
                step="0.01"
                min="0"
                required
              />
            </div>
            <div className="form-control md:col-span-2">
              <label className="label" htmlFor="description">
                <span className="label-text">Description</span>
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleEventChange}
                className="textarea textarea-bordered"
                rows={5}
                required
              ></textarea>
            </div>
            <div className="form-control md:col-span-2">
              <label className="label" htmlFor="image">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleEventChange}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="mt-6 text-center">
            <button
              className="btn bg-red-500 hover:bg-red-600 text-white w-full"
              type="submit"
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
