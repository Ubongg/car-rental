"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Background from "@/components/background/background";

const CarDetail = ({ params }) => {
  const [pickDate, setPickDate] = useState(new Date());
  const [dropDate, setDropDate] = useState(new Date());

  const falseDate = (date) => new Date() < date;

  useEffect(() => {
    const pickUpDate = pickDate.toLocaleString();
    const dropOffDate = dropDate.toLocaleString();
    console.log(pickUpDate);
    console.log(dropOffDate);
  }, [pickDate, dropDate]);

  return (
    <div>
      <Background header="Vehicle Fleet" />
      <DatePicker
        showTimeSelect
        filterDate={falseDate}
        minTime={new Date(0, 0, 0, 9, 0)}
        maxTime={new Date(0, 0, 0, 19, 0)}
        selected={pickDate}
        onChange={(pickDate) => setPickDate(pickDate)}
      />
      <DatePicker
        showTimeSelect
        filterDate={falseDate}
        minTime={new Date(0, 0, 0, 9, 0)}
        maxTime={new Date(0, 0, 0, 19, 0)}
        selected={dropDate}
        onChange={(dropDate) => setDropDate(dropDate)}
      />
    </div>
  );
};

export default CarDetail;
