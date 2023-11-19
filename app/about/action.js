import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllUsers() {
  const users_from_db = await prisma.user.findMany();
  return users_from_db.map((user, index) => {
    return {
      id: user.id,
      no: index + 1,
      name: user.name,
      email: user.email,
    };
  });
}

export async function createNewUser(prevState, formData) {
  prisma.user.create({
    name: formData.get('name'),
    email: formData.get('email')
  })
}
