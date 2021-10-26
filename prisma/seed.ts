import Prisma from '@prisma/client';
const { PrismaClient } = Prisma;

const prisma = new PrismaClient()

async function main() {
  await prisma.fruit.create({
    data: {
      name: 'Banana',
      color: 'Yellow',
      price: 400
    }
  })
}
main()
