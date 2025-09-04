import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import { getPrivateData, patchPrivateData } from "../../../api/apiPrivate";
import Table from "../../../components/ui/Table";
import { TableRowActions } from "../../../components/ui/TableAction";
import Pagination from "../../../components/ui/Pagination";
import toast from "react-hot-toast";

const orderTabs = ["All", "Pending", "Shipped", "Completed", "Cancelled"];
const paymentTabs = ["All", "Paid", "Pending", "Failed"];

const OrderManagement = () => {
  const [activeOrderTab, setActiveOrderTab] = useState("All");
  const [activePaymentTab, setActivePaymentTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["orders", activeOrderTab, activePaymentTab, currentPage, pageSize],
    queryFn: () =>
      getPrivateData(
        `/order/management/list/?status=${activeOrderTab === "All" ? "" : activeOrderTab.toLowerCase()
        }&payment_status=${activePaymentTab === "All" ? "" : activePaymentTab.toLowerCase()
        }&page=${currentPage}&page_size=${pageSize}`
      ),
    refetchInterval: 180000,
  });

const updateOrderStatusMutation = useMutation({
  mutationFn: async ({ orderId, status }: { orderId: number; status: string }) => {
    const res = await patchPrivateData(`/order/management/${orderId}/update-status/?status=${status}`, {});
    return res;
  },
  onMutate: ({ orderId, status }) => {
    toast.loading(`Updating order #${orderId} to "${status}"...`, { id: `update-order-${orderId}` });
  },
  onSuccess: (_, variables) => {
    queryClient.invalidateQueries({
      queryKey: ["orders"],
      exact: false,
    });
    toast.success(`Order #${variables.orderId} updated successfully!`, { id: `update-order-${variables.orderId}` });
    console.log(`Order ${variables.orderId} updated successfully`);
  },
  onError: (err, variables) => {
    toast.error(err?.message || `Failed to update order #${variables.orderId}`, { id: `update-order-${variables.orderId}` });
    console.error("Failed to update order:", err);
  },
});

  const ordersData = data?.data ?? [];
  const counts = data?.stats ?? { total: 0 };
  const paginationData = data?.pagination ?? {};

  const orderColumns = [
    {
      key: "items",
      title: "Product",
      render: (order: any) => (
        <div>
          {order.items.map((item: any, idx: number) => (
            <div key={idx}>
              {item.product?.title} × {item.quantity} = ₹{item.price}
            </div>
          ))}
        </div>
      ),
    },
    { key: "user", title: "Customer", render: (order: any) => order.user.fullName },
    { key: "created_at", title: "Date", render: (order: any) => new Date(order.created_at).toDateString() },
    { key: "total_amount", title: "Total" },
    { key: "status", title: "Status" },
    { key: "stripe_payment_intent", title: "Payment", render: (order: any) => (order.stripe_payment_intent ? "Paid" : "Unpaid") },
  ];

  return (
    <div className="min-h-screen font-sans antialiased">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl p-6 lg:p-10">
        <div className="flex justify-between">
          <h1 className="text-2xl lg:text-3xl font-bold mb-6">Orders</h1>
          <span className="text-lg"> <b>Total Booking</b> {paginationData.total_items}</span>
        </div>

        {isLoading ? (
          <>
            <div className="flex flex-wrap gap-4 mb-6">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} height={80} className="flex-1 rounded-xl" />
              ))}
            </div>

            <div className="flex flex-wrap space-x-2 mb-6">
              {[...Array(orderTabs.length)].map((_, i) => (
                <Skeleton key={i} width={80} height={40} className="rounded" />
              ))}
            </div>
            <div className="flex flex-wrap space-x-2 mb-6">
              {[...Array(paymentTabs.length)].map((_, i) => (
                <Skeleton key={i} width={80} height={40} className="rounded" />
              ))}
            </div>

            {/* Table Skeleton */}
            <div className="overflow-x-auto rounded-xl">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {[...Array(6)].map((_, i) => (
                      <th key={i} className="px-6 py-3">
                        <Skeleton height={16} />
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[...Array(5)].map((_, i) => (
                    <tr key={i}>
                      {[...Array(6)].map((_, j) => (
                        <td key={j} className="px-6 py-4">
                          <Skeleton height={16} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-wrap bg-white rounded-2xl shadow-sm p-6 mb-6">
              <div className="flex-1 grid grid-cols-2 md:grid-cols-5 gap-4">
                {Object.entries(counts.order_status || {}).map(([key, value]) => (
                  <div key={key} className="p-4 bg-gray-50 rounded-xl text-center">
                    <div className="text-lg font-bold text-gray-900">{value as number}</div>
                    <div className="text-xs text-gray-500">{key}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap bg-white rounded-2xl shadow-sm p-6 mb-6">
              <div className="flex-1 grid grid-cols-2 md:grid-cols-5 gap-4">
                {Object.entries(counts.payment_status || {}).map(([key, value]) => (
                  <div key={key} className="p-4 bg-gray-50 rounded-xl text-center">
                    <div className="text-lg font-bold text-gray-900">{value as number}</div>
                    <div className="text-xs text-gray-500">{key}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap space-x-2 mb-6 border-b border-gray-200">
              {orderTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveOrderTab(tab);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-3 text-sm font-medium transition-colors duration-200 ${activeOrderTab === tab
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-500 hover:text-gray-900"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap space-x-2 mb-6 border-b border-gray-200">
              {paymentTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActivePaymentTab(tab);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-3 text-sm font-medium transition-colors duration-200 ${activePaymentTab === tab
                    ? "text-green-500 border-b-2 border-green-500"
                    : "text-gray-500 hover:text-gray-900"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="overflow-x-auto rounded-xl">
              <Table
                columns={orderColumns}
                data={ordersData}
                actions={(row) => (
                  <TableRowActions
                    actions={[
                      { label: "Pending", onClick: () => updateOrderStatusMutation.mutate({ orderId: row.id, status: "pending" }) },
                      { label: "Shipped", onClick: () => updateOrderStatusMutation.mutate({ orderId: row.id, status: "shipped" }) },
                      { label: "Completed", onClick: () => updateOrderStatusMutation.mutate({ orderId: row.id, status: "completed" }) },
                      { label: "Cancelled", onClick: () => updateOrderStatusMutation.mutate({ orderId: row.id, status: "cancelled" }) },
                    ]}
                  />
                )}
              />
            </div>
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
          </>
        )}
      </div>
    </div>
  );
};

export default OrderManagement;
