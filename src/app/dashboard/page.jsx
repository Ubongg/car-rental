"use client";

import React, { useEffect } from "react";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Background from "@/components/background/background";
import useSWR from "swr";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router?.push("/dashboard/login");
    }
  }, [session.status]);

  return (
    <div className={styles.dashboard}>
      <Background header="Dashboard" />
    </div>
  );
};

export default Dashboard;
