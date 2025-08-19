// app/api/test/[id]/route.js
import { NextResponse } from 'next/server';

export async function GET(request,{params}) {
  console.log(params.id);
  const id = params.id;
  return NextResponse.json({ id });
}