import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const postData = await prisma.post.findMany();

  console.log(postData);
}
main()
  .then(() => {
    console.log("Sucessfully fetched post");
    prisma.$disconnect();
  })
  .catch((err) => {
    console.log(err);
    prisma.$disconnect();
  });
