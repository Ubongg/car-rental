"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Background from "@/components/background/background";
import useSWR from "swr";
import { BiUserCircle } from "react-icons/bi";
import { FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";

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
  }, [session.status, router]);

  if (session.status === "authenticated") {
    return (
      <div className={styles.dashboard}>
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
                      <p>{order.carName}</p>
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
                      <button className={styles.showDetails}>
                        <Link href={`/dashboard/${order._id}`}>Details</Link>
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
                    <div key={order._id} className={styles.order}>
                      <p>{order.carName}</p>
                      <button className={styles.showDetails}>
                        <Link href={`/dashboard/${order._id}`}>Details</Link>
                      </button>
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
                      <p>{order.carName}</p>
                      <button className={styles.showDetails}>
                        <Link href={`/dashboard/${order._id}`}>Details</Link>
                      </button>
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
