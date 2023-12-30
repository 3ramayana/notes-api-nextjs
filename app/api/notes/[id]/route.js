//import next request and response
import { NextResponse } from 'next/server';

//import prisma client
import prisma from '../../../../lib/db';

// function to get detail note
export async function GET(request, { params }) {
  //get params id
  const id = parseInt(params.id);

  //get detail notes
  const note = await prisma.notes.findUnique({
    where: {
      id,
    },
  });

  if (!note) {
    //return response JSON
    return NextResponse.json(
      {
        sucess: true,
        message: 'Detail Data Note Not Found!',
        data: null,
      },
      {
        status: 404,
      }
    );
  }

  //return response JSON
  return NextResponse.json(
    {
      sucess: true,
      message: 'Detail Data Note',
      data: note,
    },
    {
      status: 200,
    }
  );
}
// end function to get detail note

// function to update note
export async function PATCH(request, { params }) {
  //get params id
  const id = parseInt(params.id);

  //get request data
  const { content } = await request.json();

  //update data
  const note = await prisma.notes.update({
    where: {
      id,
    },
    data: {
      content,
      updateAt: new Date(),
    },
  });

  //return response JSON
  return NextResponse.json(
    {
      sucess: true,
      message: 'Data Note Updated!',
      data: note,
    },
    {
      status: 200,
    }
  );
}
// end function to update note

// function to delete note
export async function DELETE(request, { params }) {
  //get params id
  const id = parseInt(params.id);

  //delete data
  await prisma.notes.delete({
    where: {
      id,
    },
  });

  //return response JSON
  return NextResponse.json(
    {
      sucess: true,
      message: 'Data Note Deleted!',
    },
    {
      status: 200,
    }
  );
}
// end function to delete note
