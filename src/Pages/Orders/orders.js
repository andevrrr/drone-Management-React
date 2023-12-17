import Order from "../../Components/Drone/drone";
import { useState, useEffect } from "react";
import "./orders.css";

function OrderPage() {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/orders");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setOrders(jsonData);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <>
      <div>
        <h3 style={{ paddingLeft: "5vw" }}>Orders</h3>
        <div>
          {orders &&
            orders.map((order, i) => (
              <Order
                key={i}
                customerName={order.customerName}
                pizzaType={order.pizzaType}
                orderTime={order.orderTime}
                status={order.status}
                street={order.destination.street}
                city={order.destination.city}
                state={order.destination.state}
                zip={order.destination.zip}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default OrderPage;
