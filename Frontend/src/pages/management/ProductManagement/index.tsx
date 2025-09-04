import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { AddIcon, SearchIcon } from "../../../icon/icon";
import Table from "../../../components/ui/Table";
import { TableRowActions } from "../../../components/ui/TableAction";
import Pagination from "../../../components/ui/Pagination";
import { getPrivateData, deletePrivateData } from "../../../api/apiPrivate";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ProductManagement = () => {
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const navigate = useNavigate()


  const { data, isLoading } = useQuery({
    queryKey: ["products", currentPage, searchTerm, pageSize],
    queryFn: () =>
      getPrivateData(
        `/products/management/?page=${currentPage}&page_size=${pageSize}&search=${searchTerm}`
      ),
  });

  const products = data?.data || [];
  const paginationData = data?.pagination || {};


const deleteProductMutation = useMutation({
  mutationFn: (id: number) => deletePrivateData(`/products/management/delete/${id}/`),
  onMutate: (id) => {
    toast.loading("Deleting product...", { id: `delete-product-${id}` });
  },
  onSuccess: (_, id) => {
    toast.success("Product deleted successfully!", { id: `delete-product-${id}` });
    queryClient.invalidateQueries({ queryKey: ["products"] });
  },
  onError: (err: any, id) => {
    toast.error(err?.message || "Failed to delete product", { id: `delete-product-${id}` });
  },
});

  const columns = [
    { key: "title", title: "Title"},
    { key: "image.url", title: "Image",render: (order: any) => (
        <img src={order.image.url} width={100}/>
      ),},
    { key: "price", title: "Price" },
    { key: "discount", title: "Discount" },
    { key: "type", title: "Type" },
    { key: "category", title: "Category",render: (order: any) => (
        <span>{order.category_info?.title}</span>
      ) },
    { key: "description", title: "Description",render: (order: any) => (
        <span className="text-sm">{order.description.slice(0,300)}...</span>
      ), },
  ];

  return (
    <div className="min-h-screen font-sans antialiased">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl p-6 lg:p-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 lg:mb-10">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
            Product Management
          </h1>
          <button

            onClick={() => navigate('/admin/product_management_form')}
            className="flex items-center bg-blue-800 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-200 shadow-md"
          >
            <AddIcon /> Add Product
          </button>
        </div>
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
                  {[...Array(columns.length)].map((_, i) => (
                    <th key={i} className="px-6 py-3">
                      <Skeleton height={16} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[...Array(pageSize)].map((_, i) => (
                  <tr key={i}>
                    {[...Array(columns.length)].map((_, j) => (
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
            data={products}
            actions={(row: any) => (
              <TableRowActions
                actions={[
                  { label: "Delete", onClick: () => deleteProductMutation.mutate(row.id) },
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
      </div>
    </div>
  );
};

export default ProductManagement;
