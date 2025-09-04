import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { AddIcon, DeleteIcon, EditIcon, SearchIcon } from "../../../icon/icon";
import Table from "../../../components/ui/Table";
import { TableRowActions } from "../../../components/ui/TableAction";
import Pagination from "../../../components/ui/Pagination";
import { getPrivateData, postPrivateData, patchPrivateData, deletePrivateData } from "../../../api/apiPrivate";
import toast from "react-hot-toast";

const UserManagement = () => {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editUser, setEditUser] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const openModal = (user: any = null) => {
    setEditUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditUser(null);
    setIsModalOpen(false);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["users", currentPage, searchTerm, pageSize],
    queryFn: () =>
      getPrivateData(
        `/user/?page=${currentPage}&page_size=${pageSize}&search=${searchTerm}`
      ),
  });

  const users = data?.data || [];
  const paginationData = data?.pagination || {};

const saveUserMutation = useMutation({
  mutationFn: async (payload: { id?: number; password: string; fullName: string; email: string; role: string }) => {
    if (payload.id) return patchPrivateData(`/user/${payload.id}/`, payload);
    return postPrivateData("/user/create/", payload);
  },
  onMutate: (payload) => {
    toast.loading(`${payload.id ? "Updating" : "Creating"} user...`, { id: "save-user-toast" });
  },
  onSuccess: (_, payload) => {
    toast.success(`User ${payload.id ? "updated" : "created"} successfully!`, { id: "save-user-toast" });
    queryClient.invalidateQueries({ queryKey: ["users"] });
    closeModal();
  },
  onError: (err: any) => {
    toast.error(err?.message || "Failed to save user", { id: "save-user-toast" });
  },
});

const deleteUserMutation = useMutation({
  mutationFn: (id: number) => deletePrivateData(`/user/${id}/delete/`),
  onMutate: (id) => {
    toast.loading("Deleting user...", { id: `delete-user-${id}` });
  },
  onSuccess: (_, id) => {
    toast.success("User deleted successfully!", { id: `delete-user-${id}` });
    queryClient.invalidateQueries({ queryKey: ["users"] });
  },
  onError: (err: any, id) => {
    toast.error(err?.message || "Failed to delete user", { id: `delete-user-${id}` });
  },
});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;
    const fullName = (form.elements.namedItem("fullName") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const role = (form.elements.namedItem("role") as HTMLSelectElement).value;

    if (password && fullName && email && role) {
      saveUserMutation.mutate({ id: editUser?.id, password, fullName, email, role });
    }
  };

  const columns = [
    { key: "fullName", title: "Full Name" },
    { key: "email", title: "Email" },
    { key: "role", title: "Role" },
  ];

  return (
    <div className="min-h-screen font-sans antialiased">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl p-6 lg:p-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 lg:mb-10">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
            User Management
          </h1>
          <button
            onClick={() => openModal()}
            className="flex items-center bg-blue-800 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-200 shadow-md"
          >
            <AddIcon /> Add User
          </button>
        </div>

        <div className="flex flex-wrap gap-4 mb-6">
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search users..."
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
            data={users}
            actions={(row: any) => (
              <TableRowActions
                actions={[
                  { label: "Edit", onClick: () => openModal(row) },
                  { label: "Delete", onClick: () => deleteUserMutation.mutate(row.id) },
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

        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">
                {editUser ? "Edit User" : "Add User"}
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                    password
                  </label>
                  <input
                    type="text"
                    id="password"
                    name="password"
                    defaultValue={editUser?.password || ""}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter password"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    defaultValue={editUser?.fullName || ""}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter full name"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    defaultValue={editUser?.email || ""}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter email"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2">
                    Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    defaultValue={editUser?.role || "user"}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
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
                    {editUser ? "Update" : "Add"}
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

export default UserManagement;
