import { PrismaClient } from "@prisma/client";
import { NextRequest,NextResponse } from "next/server";
import { Task } from "@/types/task";

const prisma = new PrismaClient();

export async function GET(request: Request, {params} : {params: {id: string}}) {
    const id = params.id;
    const task = await prisma.task.findUnique({
        where: {
            id: Number(id)
        }
    });
    return new Response(JSON.stringify(task), { status: 200 });
}
export async function PUT(request: Request, {params} : {params: {id: string}}) {
    const id = params.id;
    const body = await request.json();
    const task = await prisma.task.update({
        where: {
            id: Number(id)
        },
        data: {
            ...body
        }
    });
    return new Response(JSON.stringify(task), { status: 200 });
}
export async function DELETE(request: Request, {params} : {params: {id: string}}) {
    const id = params.id;
    const task = await prisma.task.delete({
        where: {
            id: Number(id)
        }
    });
    return new Response(JSON.stringify(task), { status: 200 });
}