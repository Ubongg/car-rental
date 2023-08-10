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

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    const order = await Order.findById(id);

    return new NextResponse(JSON.stringify(order), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
