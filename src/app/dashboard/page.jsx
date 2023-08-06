"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Background from "@/components/background/background";
import useSWR from "swr";
import Image from "next/image";

const Dashboard = () => {
  const [status, setStatus] = useState("scheduled");

  const session = useSession();
  const router = useRouter();

  // fetch data
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/orders?username=${session?.data?.user.name}`,
    fetcher
  );

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router?.push("/dashboard/login");
    }
  }, [session.status]);

  if (session.status === "authenticated") {
    return (
      <div className={styles.dashboard}>
        <Background header="Dashboard" />
        {data?.map((order) => {
          if (order.status === "scheduled") {
            return <p key={order._id}>{order.carName}</p>;
          }
        })}
      </div>
    );
  }
};

export default Dashboard;
