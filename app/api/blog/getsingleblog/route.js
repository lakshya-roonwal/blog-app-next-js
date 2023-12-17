import { connect } from "@/dbConfig/dbConfig";
import Blog from "@/modals/Blog";
import { NextRequest,NextResponse } from "next/server";

connect();

// Get single blog by ID
export async function POST(request) {
  const body = await request.json();
  const {id}=body;
  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" });
    } else {
      return NextResponse.json(blog);
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message },{status:500});
  }
}