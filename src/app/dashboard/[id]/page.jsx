import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/orders/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const singleOrder = async ({ params }) => {
  const order = await getData(params.id);

  return (
    <div className={styles.details}>
      <div className={styles.detailsWrap}>
        <div className={styles.orderDetails}>
          <p>
            <span>Order ID:</span> {order._id}
          </p>
          <p>
            <span>Car:</span> {order.carName}
          </p>
          <p>
            <span>Pick Up Location:</span> {order.pickUpLocation}
          </p>
          <p>
            <span>Drop Off Location:</span> {order.dropOffLocation}
          </p>
          <p>
            <span>Pick Up Date:</span> {order.pickUpDate}
          </p>
          <p>
            <span>Return Date:</span> {order.returnDate}
          </p>
          <p>
            <span>Order Status:</span> {order.status}
          </p>
        </div>
        <button className={styles.hideDetails}>
          <Link href="/dashboard">Back to Dashboard</Link>
        </button>
      </div>
    </div>
  );
};

export default singleOrder;
