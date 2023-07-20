import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Order from "@/models/Order";

export const GET = async (request) => {
  const url = new URL(request.url);

  const username = url.searchParams.get("username");

  try {
    await connect();

    const orders = await Order.find(username && { username });

    return new NextResponse(JSON.stringify(orders), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newOrder = new Order(body);

  try {
    await connect();

    await newOrder.save();

    return new NextResponse("Order has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
