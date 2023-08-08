"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Background from "@/components/background/background";
import useSWR from "swr";
import Image from "next/image";

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
    } catch (err) {
      console.log(err);
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
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router?.push("/dashboard/login");
    }
  }, [session.status]);

  if (session.status === "authenticated") {
    return (
      <div className={styles.dashboard}>
        <Background header="Dashboard" />
        <div className={styles.scheduled}>
          <h2>Scheduled Orders</h2>
          {data?.map((order) => {
            if (order.status === "scheduled") {
              return (
                <div key={order._id}>
                  <p>{order.carName}</p>
                  <button onClick={() => completedStatus(order._id)}>
                    Complete
                  </button>
                  <button onClick={() => cancelledStatus(order._id)}>
                    cancel
                  </button>
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
                <div key={order._id}>
                  <p>{order.carName}</p>
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
                <div key={order._id}>
                  <p>{order.carName}</p>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
};

export default Dashboard;
