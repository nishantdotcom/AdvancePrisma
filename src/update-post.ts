import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const update_data = await prisma.user.update({
    where: {
      id: 1,
    },
    data: {
      name: "nksingh",
    },
  });
  console.log(update_data);
}
main()
  .then(() => {
    console.log("Sucessfully update");
    prisma.$disconnect();
  })
  .catch((err) => {
    console.log(err);
    prisma.$disconnect();
  });
