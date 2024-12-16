import { PrismaClient } from "@prisma/client";
import { NextRequest,NextResponse } from "next/server";
import { Task } from "@/types/task";

const prisma = new PrismaClient();

export async function GET(request: Request) {
    const tasks = await prisma.task.findMany(); 
    return new Response(JSON.stringify(tasks), { status: 200 });
}
export async function POST(request: Request) {
    const body = await request.json();
    const newTask = {    
        ...body
    }
    const savedTask = await prisma.task.create({
        data: {
            ...body
        }
    });
    return new Response(JSON.stringify(savedTask), { status: 200 });
}