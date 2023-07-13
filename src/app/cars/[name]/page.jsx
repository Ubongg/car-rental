"use client";

import React, { useEffect } from "react";
import styles from "./page.module.css";

const CarDetail = ({ params }) => {
  useEffect(() => {
    console.log(params);
  }, []);
  return <div>CarDetail</div>;
};

export default CarDetail;
