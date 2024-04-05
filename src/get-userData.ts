import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const data = await prisma.user.findMany();
  const countProfile = await prisma.user.count();
  console.log(data);
  console.log(countProfile);
}
main()
  .then(async () => {
    console.log("Sucessfully fetched");
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.log(err);
    await prisma.$disconnect();
  });
