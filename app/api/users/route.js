import { PrismaClient } from "@prisma/client";

import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

async function GET() {
  const users_from_db = await prisma.user.findMany();
  NextResponse.json(users_from_db)
}

async function POST(request) {
    const { name, email } = await request.json()
    try {
        await prisma.user.create({
          data: {
            name: name,
            email: email,
          },
        })
        return true
    } catch (e) {
        return false
    }
}

export { GET, POST }
