# 🍽️ DineInsight – Restaurant Data Analytics Dashboard

## 🚀 Overview

DineInsight is a full-stack restaurant analytics dashboard that helps analyze sales data, identify trends, and visualize key business insights.

It allows users to upload restaurant data (CSV) and instantly view metrics like revenue, top dishes, and order distribution through interactive charts.

---

##  Features

### 📊 Dashboard

* Total Revenue 💰
* Total Orders 
* Top Selling Dish 
* Interactive Charts (Bar + Pie)

### 📈 Analytics Page

* Average Order Value
* Performance Insights
* Key Metrics Summary

### 📄 Reports Page

* Clean tabular report (office-style)
* Summary of business metrics

### 📂 CSV Upload (🔥 Real-world feature)

* Upload your own dataset
* Backend processes using pandas
* Dashboard updates dynamically

---

## 🧠 Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Recharts

### Backend

* Python (Flask)
* Pandas
* NumPy

---


## ▶️ How to Run Locally

### 🔹 Backend

```bash
cd backend
pip install flask pandas numpy flask-cors
python app.py
```

---

### 🔹 Frontend

```bash
cd dineinsight
npm install
npm run dev
```

---

## 📂 CSV Format

Upload CSV in this format:

```csv
item,price,quantity
Pizza,300,2
Burger,150,3
Pasta,250,1
```

---

## 📊 Sample Output

* Revenue calculation
* Top dish identification
* Visual charts for insights

---

## 💡 Future Improvements

* Date-based filtering 
* Category-wise analytics 
* Drag & drop file upload
* Deployment (Vercel + Render)
* Authentication system

---
