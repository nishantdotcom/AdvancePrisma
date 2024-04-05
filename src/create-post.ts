import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.post.create({
    data: {
      title: "My first post",
      content: "my contenet",
      published: true,
      authorId: 1,
    },
  });
}

main()
  .then(() => {
    console.log("Sucessfully created post");
    prisma.$disconnect();
  })
  .catch((err) => {
    console.log(err);
    prisma.$disconnect();
  });
