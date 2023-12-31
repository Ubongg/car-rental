"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Background from "@/components/background/background";
import useSWR from "swr";
import { BiUserCircle } from "react-icons/bi";
import { FaSignOutAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import AutoLogout from "@/components/AutoLogout/AutoLogout";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  // fetch data
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/orders?username=${session?.data?.user.name}`,
    fetcher
  );

  // change status to 'completed' and update in db
  const completedStatus = async (id) => {
    try {
      await fetch(`/api/orders/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          ...data,
          status: "completed",
        }),
      });
      mutate();
      toast.success("Order Completed");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  // change status to 'cancelled' and update in db
  const cancelledStatus = async (id) => {
    try {
      await fetch(`/api/orders/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          ...data,
          status: "cancelled",
        }),
      });
      mutate();
      toast.success("Order Cancelled");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router?.push("/dashboard/login");
    }
  }, [session.status, router]);

  if (session.status === "authenticated") {
    return (
      <div className={styles.dashboard}>
        <AutoLogout />
        <Background header="Dashboard" />
        <div className={styles.dashboardWrap}>
          <div className={styles.profile}>
            <div className={styles.imgBx}>
              <BiUserCircle />
            </div>
            <div className={styles.textBx}>
              <h5>{session?.data?.user.name}</h5>
              <p>{session?.data?.user.email}</p>
            </div>
            <button className={styles.signOut} onClick={signOut}>
              <span className={styles.icon}>
                <FaSignOutAlt />
              </span>
              <span className={styles.text}>Sign Out</span>
            </button>
          </div>

          <div className={styles.orders}>
            <div className={styles.scheduled}>
              <h2>Scheduled Orders</h2>
              {data?.map((order) => {
                if (order.status === "scheduled") {
                  return (
                    <div key={order._id} className={styles.order}>
                      <div className={styles.orderInfos}>
                        <div className={styles.orderInfo}>
                          <p>
                            <span>Order ID:</span> {order._id.slice(0, 15)}
                          </p>
                          <p>
                            <span>Car:</span> {order.carName}
                          </p>
                          <p>
                            <span>Pick Up Location:</span>{" "}
                            {order.pickUpLocation}
                          </p>
                        </div>
                        <div className={styles.orderInfo}>
                          <p>
                            <span>Drop Off Location:</span>{" "}
                            {order.dropOffLocation}
                          </p>
                          <p>
                            <span>Pick Up Date:</span> {order.pickUpDate}
                          </p>
                          <p>
                            <span>Return Date:</span> {order.returnDate}
                          </p>
                          <div className={styles.statusButtons}>
                            <button
                              onClick={() => completedStatus(order._id)}
                              className={styles.complete}
                            >
                              Complete
                            </button>
                            <button
                              onClick={() => cancelledStatus(order._id)}
                              className={styles.cancel}
                            >
                              cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>

            <div className={styles.completed}>
              <h2>Completed Orders</h2>
              {data?.map((order) => {
                if (order.status === "completed") {
                  return (
                    <div key={order._id} className={styles.order}>
                      <div className={styles.orderInfos}>
                        <div className={styles.orderInfo}>
                          <p>
                            <span>Order ID:</span> {order._id.slice(0, 15)}
                          </p>
                          <p>
                            <span>Car:</span> {order.carName}
                          </p>
                          <p>
                            <span>Pick Up Location:</span>{" "}
                            {order.pickUpLocation}
                          </p>
                        </div>
                        <div className={styles.orderInfo}>
                          <p>
                            <span>Drop Off Location:</span>{" "}
                            {order.dropOffLocation}
                          </p>
                          <p>
                            <span>Pick Up Date:</span> {order.pickUpDate}
                          </p>
                          <p>
                            <span>Return Date:</span> {order.returnDate}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>

            <div className={styles.cancelled}>
              <h2>Cancelled Orders</h2>
              {data?.map((order) => {
                if (order.status === "cancelled") {
                  return (
                    <div key={order._id} className={styles.order}>
                      <div className={styles.orderInfos}>
                        <div className={styles.orderInfo}>
                          <p>
                            <span>Order ID:</span> {order._id.slice(0, 15)}
                          </p>
                          <p>
                            <span>Car:</span> {order.carName}
                          </p>
                          <p>
                            <span>Pick Up Location:</span>{" "}
                            {order.pickUpLocation}
                          </p>
                        </div>
                        <div className={styles.orderInfo}>
                          <p>
                            <span>Drop Off Location:</span>{" "}
                            {order.dropOffLocation}
                          </p>
                          <p>
                            <span>Pick Up Date:</span> {order.pickUpDate}
                          </p>
                          <p>
                            <span>Return Date:</span> {order.returnDate}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
