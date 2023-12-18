import Order from "../../Components/Order/order";
import { useState, useEffect } from "react";
import "./orders.css";

function OrderPage() {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8081/orders");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setOrders(jsonData);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const handleStatusChange = async (orderId, newStatus) => {
    try {
        const response = await fetch(`http://localhost:8081/orders/${orderId}/status/${newStatus}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" }
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        fetchData(); // Refetch orders to update the UI
    } catch (error) {
        console.error("Error updating order:", error);
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
                id={order.id}
                customerName={order.customerName}
                pizzaType={order.pizzaType}
                orderTime={order.orderTime}
                status={order.status}
                street={order.destination.street}
                city={order.destination.city}
                state={order.destination.state}
                zip={order.destination.zip}
                onStatusChange={handleStatusChange}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default OrderPage;
