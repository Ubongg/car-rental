import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Order from "@/models/Order";

export const PUT = async (request, { params }) => {
  const { id } = params;

  const { status } = await request.json();

  await connect();
  await Order.findByIdAndUpdate(id, { status });

  return NextResponse.json({ message: "Order updated" }, { status: 200 });
};
