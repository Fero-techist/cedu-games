import React, { useState } from "react";
import Table from "../../components/table";
import CreateCoinPackage from "./create-coin";

export default function CoinManagement() {
  const [activeTab, setActiveTab] = useState("packages");
  const [showCreatePage, setShowCreatePage] = useState(false);

  const tabs = [
    { id: "packages", label: "Coin Packages" },
    { id: "transactions", label: "Coin Transactions" },
    { id: "rewards", label: "Coin Rewards" },
    { id: "deductions", label: "Coin Deductions" },
  ];

  const coinPackages = [
    {
      name: "Small Pack",
      coins: 500,
      price: 500,
      discount: "0%",
      status: "Active",
    },
    {
      name: "Medium Pack",
      coins: 1000,
      price: 1000,
      discount: "5%",
      status: "Active",
    },
    {
      name: "Large Pack",
      coins: 2000,
      price: 2000,
      discount: "10%",
      status: "Active",
    },
    {
      name: "Mega Pack",
      coins: 5000,
      price: 5000,
      discount: "15%",
      status: "Inactive",
    },
    {
      name: "Jumbo Pack",
      coins: 10000,
      price: 10000,
      discount: "20%",
      status: "Active",
    },
  ];

  const transactionData = [
    { user: "Sophia Clark", coins: 200, amount: 200, date: "2025-01-01" },
    { user: "Liam Walker", coins: 500, amount: 500, date: "2025-01-03" },
    { user: "Olivia Carter", coins: 1000, amount: 1000, date: "2025-01-05" },
  ];

  const columns = [
    { label: "Package Name", accessor: "name" },
    { label: "Coins", accessor: "coins" },
    {
      label: "Price",
      accessor: "price",
      render: (value) => `₦${value}`,
    },
    { label: "Discount", accessor: "discount" },
    {
      label: "Status",
      accessor: "status",
      render: (value) => (
        <span
          className={`px-8 py-2 rounded-xl text-xs font-medium ${
            value === "Active"
              ? "bg-green-200 text-green-700"
              : "bg-blue-200 text-blue-700"
          }`}
        >
          {value}
        </span>
      ),
    },
    {
      label: "Actions",
      accessor: "actions",
      render: (_, row) => (
        <button className="text-purple-600 text-sm font-medium hover:underline">
          Edit
        </button>
      ),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="font-bold text-2xl mb-4">Coin Management</h1>
      <div className="p-6 w-full lg:max-w-6xl mx-auto text-gray-900">
        <div className="flex space-x-6 border-b mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-2 text-sm font-bold transition-all ${
                {
                  true: "text-purple-600  border-b-2 border-purple-600",
                  false: "text-gray-500",
                }[activeTab === tab.id]
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* {activeTab === "packages" && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Coin Packages</h2>
              <Link to="/create-coin">
                <button className="bg-purple-600 text-white font-bold px-4 py-2 rounded-xl text-sm">
                  Create New Package
                </button>
              </Link>
            </div>

            <Table
              columns={columns}
              data={coinPackages}
            />
          </div>
        )} */}

        {activeTab === "packages" && (
          <div>
            {!showCreatePage ? (
              <>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Coin Packages</h2>

                  <button
                    onClick={() => setShowCreatePage(true)}
                    className="bg-purple-600 text-white font-bold px-4 py-2 rounded-xl text-sm"
                  >
                    Create New Package
                  </button>
                </div>

                <Table
                  columns={columns}
                  data={coinPackages}
                />
              </>
            ) : (
              <CreateCoinPackage onBack={() => setShowCreatePage(false)} />
            )}
          </div>
        )}

        {activeTab === "transactions" && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-1">Coin Transactions</h2>
            <p className="text-sm text-gray-500 mb-4">
              Manage and track all coin transactions within the app.
            </p>

            <div className=" mb-4">
              <input
                type="text"
                placeholder="Search by user"
                className="w-full bg-gray-100 px-4 py-4 rounded-xl text-sm outline-none"
              />
            </div>

            <div className="flex space-x-3 mb-4">
              <button className="px-4 py-2 bg-gray-100 text-[#9B5DE5] rounded-lg text-sm">
                Date Range ▼
              </button>
              <button className="px-4 py-2 bg-gray-100 text-[#9B5DE5] rounded-lg text-sm">
                Transaction Type ▼
              </button>
              <button className="px-4 py-2 bg-gray-100 text-[#9B5DE5] rounded-lg text-sm">
                User ▼
              </button>
            </div>

            {/* <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-purple-200">
              <table className="w-full text-sm">
                <thead className="bg-purple-50">
                  <tr>
                    <th className="p-4">User</th>
                    <th className="p-4">Transaction Type</th>
                    <th className="p-4">Amount</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-4 text-gray-900 font-medium">
                      Sophia Clark
                    </td>
                    <td className="p-4">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-xs">
                        Purchase
                      </span>
                    </td>
                    <td className="p-4 text-green-600">+500</td>
                    <td className="p-4 text-[#61708A]">2024-07-26</td>
                    <td className="p-4 text-[#61708A]">
                      In-app purchase of 500 coins
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 text-gray-900 font-medium">
                      Liam Walker
                    </td>
                    <td className="p-4">
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-lg text-xs">
                        Reward
                      </span>
                    </td>
                    <td className="p-4 text-green-600">+100</td>
                    <td className="p-4 text-[#61708A]">2024-07-25</td>
                    <td className="p-4 text-[#61708A]">Daily login reward</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 text-gray-900 font-medium">
                      Olivia Carter
                    </td>
                    <td className="p-4">
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-lg text-xs">
                        Deduction
                      </span>
                    </td>
                    <td className="p-4 text-red-600">-200</td>
                    <td className="p-4 text-[#61708A]">2024-07-24</td>
                    <td className="p-4 text-[#61708A]">Game play deduction</td>
                  </tr>
                </tbody>
              </table>
            </div> */}

            <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
              <span>Showing 1-8 of 72 transactions</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1 border rounded-lg">
                  Previous
                </button>
                <button className="px-3 py-1 bg-purple-600 text-white rounded-lg">
                  1
                </button>
                <button className="px-3 py-1 border rounded-lg">2</button>
                <button className="px-3 py-1 border rounded-lg">3</button>
                <button className="px-3 py-1 border rounded-lg">Next</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "rewards" && (
          <div className="text-gray-600 text-sm">Coin Rewards Section</div>
        )}

        {activeTab === "deductions" && (
          <div className="text-gray-600 text-sm">Coin Deductions Section</div>
        )}
      </div>
    </div>
  );
}
