//import next request and response
import { NextResponse } from 'next/server';

//import prisma client
import prisma from '../../../lib/db';

// function to create note
export async function POST(request) {
  //get request
  const { content } = await request.json();

  //create notes
  const note = await prisma.notes.create({
    data: {
      content,
    },
  });

  //return response JSON
  return NextResponse.json(
    {
      success: true,
      message: 'Note Created Successfully!',
      data: note,
    },
    { status: 201 }
  );
}

// function to get all notes
export async function GET() {
  //get all notes
  const notes = await prisma.notes.findMany();

  //return response JSON
  return NextResponse.json(
    {
      sucess: true,
      message: 'List Data Notes',
      data: notes,
    },
    {
      status: 200,
    }
  );
}
