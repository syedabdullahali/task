import React, { useState, useRef } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

import { getPrivateData, postPrivateData } from "../../../api/apiPrivate";
import { getPublicData } from "../../../api/apiPublic";
import SearchableDropdown from "../../../components/ui/SearchableDropdown";
import SearchSelectDropdown from "../../../components/ui/SearchSelectDropdown";
import Spinner from "../../../components/ui/Spin";

const ProductManagementForm = () => {
  const queryClient = useQueryClient();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    title: "",
    discount: 0,
    description: "",
    price: 0,
    image: { url: "" }, 
    category: 0,
    type: "General",
    mtg: "",
    show_on_layout: true,
    related_products: [] as number[],
  });

  const [visibility, setVisibility] = useState(true);
  const [uploading, setUploading] = useState(false);

  const [search, setSearch] = useState("");
  const [searchListProduct, setSearchListProduct] = useState("");

  const { data: categoryData, isLoading: isCategoryLoading } = useQuery({
    queryKey: ["category_Search", search],
    queryFn: () =>
      getPrivateData(
        search.trim()
          ? `/category/?page=1&page_size=10&search=${search}`
          : `/category/?page=1&page_size=10`
      ),
  });

  const { data: relatedProductsData, isLoading: isProductLoading } = useQuery({
    queryKey: ["products_for_related", searchListProduct],
    queryFn: () =>
      getPublicData(
        `/products/product_list_with_category?categoryId=0&search=${searchListProduct}&page_limit=10&page=1`
      ),
  });

  const saveCategoryMutation = useMutation({
    mutationFn: async (payload: { id?: number }) =>
      postPrivateData("/products/management/", formData),
    onMutate: () => {
      toast.loading("Saving category...", { id: "category-toast" });
    },
    onSuccess: (_, variables) => {
      toast.success(
        `Category ${variables?.id ? "updated" : "created"} successfully!`,
        { id: "category-toast" }
      );
      queryClient.invalidateQueries({ queryKey: ["category"] });
    },
    onError: (err: any) => {
      toast.error(err?.message || "Something went wrong!", {
        id: "category-toast",
      });
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleVisibility = () => {
    setVisibility(!visibility);
    setFormData((prev) => ({ ...prev, show_on_layout: !prev.show_on_layout }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveCategoryMutation.mutate({});
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formDataCloud = new FormData();
    formDataCloud.append("file", file);
    formDataCloud.append("upload_preset", `${process.env.REACT_APP_UPLOAD_PRESET}`);

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
        formDataCloud
      );
      setFormData((prev) => ({ ...prev, image: { url: res.data.secure_url } }));
    } catch (err) {
      console.error("Cloudinary upload error:", err);
    }
    setUploading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-screen font-sans text-gray-800 max-w-7xl mx-auto space-y-6"
    >
      <div className="flex items-center justify-between pb-4 border-b border-gray-200">
        <h1 className="text-2xl font-semibold">Add New Product</h1>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-800 hover:bg-blue-700 rounded-lg font-medium"
        >
          Publish
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {formData.image.url && (
                <div className="col-span-1 aspect-square bg-gray-50 rounded-xl overflow-hidden">
                  <img
                    src={formData.image.url}
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileSelect}
              />

              {!formData.image.url && (
                <div
                  className="col-span-1 aspect-square rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 cursor-pointer hover:border-blue-500 transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  {uploading ? (
                    <>
                      <Spinner /> Uploading...
                    </>
                  ) : (
                    "Upload Image"
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
            <h2 className="text-xl font-semibold">Product Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SearchableDropdown
                search={search}
                setSearch={setSearch}
                label="Category"
                value={formData.category}
                onChange={(val) => setFormData({ ...formData, category: val })}
                options={categoryData?.data || []}
                placeholder="Select or search category"
                isLoading={isCategoryLoading}
              />

              <SearchSelectDropdown
                label="Related Products"
                value={formData.related_products}
                onChange={(vals) =>
                  setFormData({ ...formData, related_products: vals })
                }
                options={relatedProductsData?.data || []}
                search={searchListProduct}
                setSearch={setSearchListProduct}
                onAdd={(newProduct) => {
                  const tempId = Date.now();
                  relatedProductsData?.data.push({
                    id: tempId,
                    title: newProduct.title,
                  });
                  setFormData((prev) => ({
                    ...prev,
                    related_products: [...prev.related_products, tempId],
                  }));
                }}
                placeholder="Search or add related products"
                isLoading={isProductLoading}
              />

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Price</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Discount</label>
                <input
                  type="number"
                  name="discount"
                  value={formData.discount}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Type</label>
                <input
                  type="text"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">
                  MTG (Date-Time)
                </label>
                <input
                  type="datetime-local"
                  name="mtg"
                  value={formData.mtg}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col sm:col-span-2">
                <label className="text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
            <h2 className="text-xl font-semibold">Visibility</h2>
            <button
              type="button"
              onClick={toggleVisibility}
              className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${
                visibility ? "bg-blue-800" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block w-4 h-4 transform transition-transform rounded-full bg-white ${
                  visibility ? "translate-x-6" : "translate-x-1"
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProductManagementForm;
