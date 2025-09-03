import React, { useState } from 'react';
import Table from '../../../components/ui/Table';
import { AddIcon, CalendarIcon, DeleteIcon, EditIcon, SearchIcon } from '../../../icon/icon';

const productsData = [
    {
        "username": "admin1@example.com",
        "password": "Admin@123",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-08-30T12:00:00Z",
        "id": "UHUHE28"
    },
    {
        "username": "admin2@example.com",
        "password": "Admin@234",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-08-30T12:05:00Z",
        "id": "UHU8E28"
    },
    {
        "username": "admin3@example.com",
        "password": "Admin@345",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-08-30T12:10:00Z",
        "id": "UH78E28"
    },
    {
        "username": "admin4@example.com",
        "password": "Admin@456",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-08-30T12:15:00Z",
        "id": "EH893Y3"
    },
    {
        "username": "admin5@example.com",
        "password": "Admin@567",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-08-30T12:20:00Z",
        "id": "EH893YNE8"
    }];

type Column<T> = {
    key: keyof T;
    title: string;
    render?: (row: T) => React.ReactNode;
    className?: string;
};

type User = {
    username: string;
    role: string;
    status: string;
    createdAt: string;
    password: string;
    id: string;
};

const columns: Column<User>[] = [
    { title: "Name", key: "username" },
    { title: "Role", key: "role" },
    { title: "Status", key: "status" },
    { title: "CreatedAt", key: "createdAt" },
    { title: "Password", key: "password" },

]

const UserManagement = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isActionId, setActionId] = useState("")

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handaleAction = (row: User) => {
        setActionId(prev => row.id === prev ? "" : row.id)
    }

    return (
        <div className=" min-h-screen font-sans antialiased">
            <div className="max-w-7xl mx-auto bg-white rounded-2xl  p-6 lg:p-10">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 lg:mb-10">
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-0">Admin Login List</h1>
                    <button onClick={openModal} className="flex items-center bg-blue-800 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 shadow-md">
                        <AddIcon />
                        Add Admin Login
                    </button>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                    <div className="relative w-full md:w-auto md:flex-1">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                        />
                        <SearchIcon />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:w-auto md:flex-none">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Enter product name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                            />
                        </div>
                        <div className="relative">
                            <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 appearance-none bg-white">
                                <option value="">Select category</option>
                                {['Device', 'Electronic', 'Cooking'].map((cat, i) => (
                                    <option key={i} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Select date"
                                className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                            />
                            <CalendarIcon />
                        </div>
                    </div>
                    <button className="hidden lg:block p-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition-colors duration-150 shadow-sm ml-auto">
                        Clear
                    </button>
                </div>


                <Table
                    data={productsData}
                    columns={columns}
                    actions={(row) => <button onClick={() => { handaleAction(row) }} className="relative text-gray-700 m-auto block">
                        •••
                        <div
                            className={`
    absolute right-0 top-full z-10
    w-56 rounded border bg-white shadow-lg
    transition-all duration-300 ease-in-out
    ${ row.id === isActionId ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none" }
  `}
                        >
                            <ul className="flex flex-col p-2 space-y-2">
                                <li >
                                    <button className="w-full text-left px-4 py-2.5 hover:bg-gray-100 rounded flex justify-between">
                                        Delete
                                        <DeleteIcon size='20' className='text-red-600' />
                                    </button>
                                </li>
                                <li>
                                    <button className="w-full text-left px-4 py-2.5 hover:bg-gray-100 rounded flex justify-between">
                                        Edit
                                        <EditIcon size='20' className='text-blue-800' />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </button>}

                />



                {isModalOpen && (
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
                            <h2 className="text-xl font-bold mb-4">Add Category</h2>
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="categoryName" className="block text-gray-700 text-sm font-bold mb-2">Category Name</label>
                                    <input
                                        type="text"
                                        id="categoryName"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter category name"
                                    />
                                </div>
                                <div className="flex justify-end gap-2">
                                    <button type="button" onClick={closeModal} className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-xl hover:bg-gray-300 transition-colors duration-200">
                                        Cancel
                                    </button>
                                    <button type="submit" className="px-4 py-2 bg-blue-800 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200">
                                        Add
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
