import { connect } from "@/dbConfig/dbConfig";
import Blog from "@/modals/Blog";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request) {
  try {
    const body = await request.json();
    const data = body;
    const result = await Blog.create(data);
    return NextResponse.json({ msg: "created succesfully" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { errorMessage: "Something Went Wrong", error: error },
      { status: 500 }
    );
  }
}
