import React from "react";

function Analytics({data}) {
    return(
        <div>
            <h1 className="text-3xl font-bold mb-6">Analytics</h1>

            <p className="text-gray-600">
                Detailed insights about restaurant performance.
            </p>

            <div className="bg-white p-6 rounded-2xl shadow">
                <p>📈 Average Order Value: ₹{Math.round(data.totalRevenue / data.totalOrders)}</p>
                <p>🔥 Most Popular Dish: {data.topDish}</p>
                <p>📦 Total Orders: {data.totalOrders}</p>
            </div>
        </div>
    )
}

export default Analytics