import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { toast } from "react-hot-toast";
import { AddIcon,  SearchIcon } from "../../../icon/icon";
import Table from "../../../components/ui/Table";
import { TableRowActions } from "../../../components/ui/TableAction";
import Pagination from "../../../components/ui/Pagination";
import { getPrivateData, postPrivateData, patchPrivateData, deletePrivateData } from "../../../api/apiPrivate";

const CategoryManagement = () => {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editCategory, setEditCategory] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const openModal = (category: any = null) => {
    setEditCategory(category);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setEditCategory(null);
    setIsModalOpen(false);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["category", currentPage, pageSize, searchTerm],
    queryFn: () =>
      getPrivateData(`/category/?page=${currentPage}&page_size=${pageSize}&search=${searchTerm}`),
  });

  const categories = data?.data ?? [];
  const paginationData = data?.pagination ?? {};

const saveCategoryMutation = useMutation({
  mutationFn: async (payload: { id?: number; title: string }) => {
    if (payload.id) return patchPrivateData(`/category/${payload.id}/`, { title: payload.title });
    return postPrivateData("/category/create/", { title: payload.title });
  },
  onMutate: (variables) => {
    toast.loading(`${variables.id ? "Updating" : "Creating"} category...`, { id: "category-toast" });
  },
  onSuccess: (_, variables) => {
    toast.success(`Category ${variables.id ? "updated" : "created"} successfully!`, { id: "category-toast" });
    queryClient.invalidateQueries({ queryKey: ["category"] });
    closeModal();
  },
  onError: (err: any) => {
    toast.error(err?.message || "Something went wrong!", { id: "category-toast" });
  },
});

const deleteCategoryMutation = useMutation({
  mutationFn: async (id: number) => deletePrivateData(`/category/${id}/delete/`),
  onMutate: (id) => {
    toast.loading("Deleting category...", { id: "delete-category-toast" });
  },
  onSuccess: (_, id) => {
    toast.success("Category deleted successfully!", { id: "delete-category-toast" });
    queryClient.invalidateQueries({ queryKey: ["category"] });
  },
  onError: (err: any) => {
    toast.error(err?.message || "Failed to delete category", { id: "delete-category-toast" });
  },
});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const title = (form.elements.namedItem("categoryName") as HTMLInputElement).value;
    if (title.trim()) saveCategoryMutation.mutate({ id: editCategory?.id, title });
  };

  const columns = [{ key: "title", title: "Category Name" }];

  return (
    <div className="min-h-screen font-sans antialiased">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl p-6 lg:p-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 lg:mb-10">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-0">Category List</h1>
          <button
            onClick={() => openModal()}
            className="flex items-center bg-blue-800 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-200 shadow-md"
          >
            <AddIcon /> Add category
          </button>
        </div>

        <div className="flex flex-wrap gap-4 mb-6">
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search category..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); 
              }}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
            <SearchIcon />
          </div>
        </div>

        {isLoading ? (
          <div className="overflow-x-auto rounded-xl">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {[...Array(2)].map((_, i) => (
                    <th key={i} className="px-6 py-3">
                      <Skeleton height={16} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[...Array(5)].map((_, i) => (
                  <tr key={i}>
                    {[...Array(2)].map((_, j) => (
                      <td key={j} className="px-6 py-4">
                        <Skeleton height={16} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <Table
            columns={columns}
            data={categories}
            actions={(row: any) => (
              <TableRowActions
                actions={[
                  { label: "Edit", onClick: () => openModal(row) },
                  { label: "Delete", onClick: () => deleteCategoryMutation.mutate(row.id) },
                ]}
              />
            )}
          />
        )}

        <div className="mt-4 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={paginationData.total_pages || 1}
            onPageChange={setCurrentPage}
            pageSize={pageSize}
            onPageSizeChange={(size) => {
              setPageSize(size);
              setCurrentPage(1);
            }}
          />
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">{editCategory ? "Edit Category" : "Add Category"}</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="categoryName" className="block text-gray-700 text-sm font-bold mb-2">
                    Category Name
                  </label>
                  <input
                    type="text"
                    id="categoryName"
                    name="categoryName"
                    defaultValue={editCategory?.title || ""}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter category name"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-xl hover:bg-gray-300 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-800 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200"
                  >
                    {editCategory ? "Update" : "Add"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryManagement;
