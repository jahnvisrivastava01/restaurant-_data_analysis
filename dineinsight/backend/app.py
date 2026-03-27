from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)


@app.route("/data", methods=["GET"])
def get_data():
    orders = [
        {"item": "Pizza", "price": 300, "quantity": 2},
        {"item": "Burger", "price": 150, "quantity": 3},
    ]

    return process_data(pd.DataFrame(orders))



@app.route("/upload", methods=["POST"])
def upload_file():
    file = request.files.get("file")

    if not file:
        return jsonify({"error": "No file uploaded"}), 400

    try:
        df = pd.read_csv(file)

        
        required_columns = {"item", "price", "quantity"}
        if not required_columns.issubset(df.columns):
            return jsonify({"error": "CSV must contain item, price, quantity"}), 400

        return process_data(df)

    except Exception as e:
        return jsonify({"error": str(e)}), 500



def process_data(df):
    df["total"] = df["price"] * df["quantity"]

    total_revenue = int(df["total"].sum())
    total_orders = int(len(df))

    item_counts = df.groupby("item")["quantity"].sum()

    top_dish = item_counts.idxmax()

    item_data = [
        {"name": item, "quantity": int(qty)}
        for item, qty in item_counts.items()
    ]

    return jsonify({
        "totalRevenue": total_revenue,
        "totalOrders": total_orders,
        "topDish": top_dish,
        "itemData": item_data
    })


if __name__ == "__main__":
    app.run(debug=True)