import dotenv from 'dotenv';
import { faker } from "@faker-js/faker"
import { PrismaClient } from 'generated/prisma/client';
dotenv.config();

const prisma = new PrismaClient()

async function main() {
    for (let i = 0; i < 10; i++) {
        await prisma.conducted_lessons.create({
            data: {
                lesson_id: faker.number.int({
                    min: 1,
                    max: 10
                })
            }
        })
    }
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