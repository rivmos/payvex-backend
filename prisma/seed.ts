import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const seedRoles = async () => {
  const defaultRoles: string[] = ["admin", "manager"];

  const rolePromises = defaultRoles.map((role: string) =>
    prisma.defaultRoles.upsert({
      where: { name: role },
      update: {},
      create: { name: role },
    }),
  );

  const createdRoles = await Promise.all(rolePromises);
  console.log({ createdRoles });
};

const main = async () => {
  await seedRoles();
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
