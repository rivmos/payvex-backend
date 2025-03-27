import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const defaultRoles = ["admin", "manager"];

async function main() {
  defaultRoles.forEach(async (role) => {
    const createRole = await prisma.defaultRoles.create({
      data: {
        name: role,
      },
    });
    console.log({ createRole });
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
