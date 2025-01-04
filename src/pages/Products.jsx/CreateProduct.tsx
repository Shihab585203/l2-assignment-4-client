import toast from "react-hot-toast";
import { useCreateProductMutation } from "../../redux/api/baseApi";
import { FormEvent } from "react";

const CreateProduct = () => {
  const [createProduct] = useCreateProductMutation();

  const handleCreateProduct = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const productData = {
      title: formData.get("title") as string,
      category: formData.get("category") as string,
      stockQuantity: Number(formData.get("stockQuantity")),
      brand: formData.get("brand" as string),
      rating: Number(formData.get("rating")),
      description: formData.get("description") as string,
      price: Number(formData.get("price")),
      image: formData.get("image") as string,
      createdAt: new Date(),
    };

    try {
      await createProduct(productData).unwrap();
      form.reset();
      toast.success("Product Created Successfully!");
    } catch (err) {
      toast.error("Product Creation Failed!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center mt-20">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Create a Product
        </h2>
        <form id="productForm" onSubmit={handleCreateProduct}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label" htmlFor="title">
                <span className="label-text">Product Title</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
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
              Create Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
