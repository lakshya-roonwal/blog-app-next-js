import { connect } from "@/dbConfig/dbConfig";
import Blog from "@/modals/Blog";
import { NextRequest,NextResponse } from "next/server";

connect();

export async function PUT(request) {
    const body=await request.json();
    const { id, title, description, blogType, tag } = body;
    try {
        await Blog.findByIdAndUpdate(id, { title, description, blogType, tag });
        return NextResponse.json({ msg: "updated succesfully"},{status:200});
    } catch (error) {
        console.log(error)
        NextResponse.json({msg:'Updation Error'})
    }
}