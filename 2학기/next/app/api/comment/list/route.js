// /api/comment/list.js
import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

export async function GET(request) {
  try {
    // Get postId from query parameters
    const { searchParams } = new URL(request.url);
    const postId = searchParams.get('id');
    
    if (!postId) {
      return NextResponse.json(
        { error: 'Post ID is required' }, 
        { status: 400 }
      );
    }

    const client = await connectDB;
    const db = client.db("board");
    
    // Find comments for the specific post, sorted by creation date (newest first)
    const comments = await db.collection("comment")
      .find({ parent: new ObjectId(postId) })
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch comments', details: error.message }, 
      { status: 500 }
    );
  }
}