import { useState, useEffect } from "react"
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from "recharts"
import Analytics from "./pages/Analytics"
import Reports from "./pages/Reports"

function App() {

  const [data, setData] = useState(null)
  const [activePage, setActivePage] = useState("dashboard")

  useEffect(() => {
    fetch("http://127.0.0.1:5000/data")
      .then(res => res.json())
      .then(result => setData(result))
      .catch(err => console.error(err))
  }, [])

  
  const handleFileUpload = (e) => {
    const file = e.target.files[0]

    const formData = new FormData()
    formData.append("file", file)

    fetch("http://127.0.0.1:5000/upload", {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(result => {
        setData(result)
      })
      .catch(err => console.error(err))
  }

  if (!data) {
    return <h1 className="text-center mt-10">Loading...</h1>
  }

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

  return (
    <div className="flex min-h-screen bg-gray-100">

      
      <div className="w-64 bg-white shadow-md p-6">
        <h2 className="text-xl font-bold mb-6">🍽️ DineInsight</h2>

        <ul className="space-y-4">

          <li
            onClick={() => setActivePage("dashboard")}
            className={`cursor-pointer p-2 rounded ${
              activePage === "dashboard"
                ? "bg-gray-200 font-semibold"
                : "text-gray-500"
            }`}
          >
            Dashboard
          </li>

          <li
            onClick={() => setActivePage("analytics")}
            className={`cursor-pointer p-2 rounded ${
              activePage === "analytics"
                ? "bg-gray-200 font-semibold"
                : "text-gray-500"
            }`}
          >
            Analytics
          </li>

          <li
            onClick={() => setActivePage("reports")}
            className={`cursor-pointer p-2 rounded ${
              activePage === "reports"
                ? "bg-gray-200 font-semibold"
                : "text-gray-500"
            }`}
          >
            Reports
          </li>

        </ul>
      </div>

     
      <div className="flex-1 p-6">

        
        {activePage === "dashboard" && (
          <>
            <h1 className="text-3xl font-bold mb-6">
              Dashboard Overview 📊
            </h1>

            
            <label className="inline-block mb-6">
  <input
    type="file"
    accept=".csv"
    onChange={handleFileUpload}
    className="hidden"
  />

  <span className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600 transition">
    Upload CSV 📂
  </span>
</label>

           
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

              <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <h2 className="text-gray-500">Total Revenue</h2>
                <p className="text-2xl font-bold">₹{data.totalRevenue}</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <h2 className="text-gray-500">Total Orders</h2>
                <p className="text-2xl font-bold">{data.totalOrders}</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <h2 className="text-gray-500">Top Dish</h2>
                <p className="text-2xl font-bold">{data.topDish} 🍕</p>
              </div>

            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Bar Chart */}
              <div className="bg-white p-6 rounded-2xl shadow">
                <h2 className="text-lg font-semibold mb-4">
                  Orders by Item
                </h2>

                <BarChart width={350} height={250} data={data.itemData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="quantity" />
                </BarChart>
              </div>

              {/* Pie Chart */}
              <div className="bg-white p-6 rounded-2xl shadow">
                <h2 className="text-lg font-semibold mb-4">
                  Item Distribution
                </h2>

                <PieChart width={350} height={250}>
                  <Pie
                    data={data.itemData}
                    dataKey="quantity"
                    nameKey="name"
                    outerRadius={80}
                    label
                  >
                    {data.itemData.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </div>

            </div>
          </>
        )}

        
        {activePage === "analytics" && <Analytics data={data} />}

       
        {activePage === "reports" && <Reports data={data} />}

      </div>

    </div>
  )
}

export default App