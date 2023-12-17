import { connect } from "@/dbConfig/dbConfig";
import Blog from "@/modals/Blog";
import { NextRequest,NextResponse } from "next/server";


connect();


// Get all blogs
export async function GET(request) {
  try {
    const blogs = await Blog.find();
    return NextResponse.json(blogs,{status:200});
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message },{status:500});
  }
}



// // Create blog (protected route)
// export async function createBlog(request,NextResponce) {
//   const { title, content, blogType, tag } = req.body;

//   // Implement authentication logic here to check for login

//   try {
//     const newBlog = new Blog({ title, content, blogType, tag });
//     await newBlog.save();
//     return NextResponse.status(201).json({ message: "Blog created successfully" });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.status(500).json({ error: error.message });
//   }
// }

// // Delete blog (protected route)
// export async function deleteBlog(request,NextResponce) {
//   const { id } = req.body;

//   // Implement authentication logic here to check for login

//   try {
//     await Blog.findByIdAndDelete(id);
//     return NextResponse.status(200).json({ message: "Blog deleted successfully" });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.status(500).json({ error: error.message });
//   }
// }

// // Update blog content (protected route)
// export async function updateBlogContent(request,NextResponce) {
//   const { id, content } = req.body;

//   // Implement authentication logic here to check for login

//   try {
//     await Blog.findByIdAndUpdate(id, { content });
//     return NextResponse.status(200).json({ message: "Blog content updated successfully" });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.status(500).json({ error: error.message });
//   }
// }

// // Update blog details (protected route)
// export async function updateBlogDetails(request,NextResponce) {
//   const { id, title, description, blogType, tag } = req.body;

//   // Implement authentication logic here to check for login

//   try {
//     await Blog.findByIdAndUpdate(id, { title, description, blogType, tag });
//     return NextResponse.status(200).json({ message: "Blog details updated successfully" });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.status(500).json({ error: error.message });
//   }
// }