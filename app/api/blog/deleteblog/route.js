import { connect } from "@/dbConfig/dbConfig";
import Blog from "@/modals/Blog";
import { NextRequest,NextResponse } from "next/server";

connect();

export async function DELETE(request) {
    const body=await request.json();
    const { id} = body;
    try {
        await Blog.findByIdAndDelete(id);
        return NextResponse.json({ msg: "deleted succesfully" },{status:200});
    } catch (error) {
        console.log(error)
        NextResponse.json({msg:'Updation Error'})
    }
}