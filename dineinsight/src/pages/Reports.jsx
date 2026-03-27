import React from "react";

function Reports({data}){
    return(
        <div>
            <h1 className="text-3xl font-bold mb-6">Reports</h1>

            <div className="bg-white p-6 rounded-2xl shadow">
                <h2 className="text-lg font-semibold mb-4">Monthly Summary</h2>

                <table className="w-full text-left border">
                    <thead>
                        <tr className="border-b bg-gray-100">
                            <th className="p-2">Metrics</th>
                            <th className="p-2">Value</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="border-b">
                            <td className="p-2">Total Orders</td>
                            <td className="p-2">{data.totalOrders}</td>
                        </tr>

                        <tr>
                            <td className="p-2">Top Dish</td>
                            <td className="p-2">{data.topDish}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Reports