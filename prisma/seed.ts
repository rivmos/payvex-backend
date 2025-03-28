import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const defaultRoles = ["admin", "manager"];

async function main() {
  const rolePromises = defaultRoles.map((role) =>
    prisma.defaultRoles.upsert({
      where: { name: role },
      update: {},
      create: { name: role },
    }),
  );

  const createdRoles = await Promise.all(rolePromises);
  console.log({ createdRoles });
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
