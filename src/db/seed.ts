import { PrismaClient } from '@prisma/client'
import { faker } from "@faker-js/faker"

const prisma = new PrismaClient()

async function createRandomBooks() {
  const randomBooks = Array.from({ length: 10 }).map(() => ({
    title: faker.commerce.productName(),
    author: faker.person.firstName() + " " + faker.person.lastName(),
    ISBN: faker.string.alpha(10),
    isReference: faker.datatype.boolean(),
  }))

  for (const book of randomBooks) {
    await prisma.book.create({
      data: book,
    })
  }
}

async function createUsers() {
  const users = Array.from({ length: 5 }).map((_, i) => ({
    username: `user${i}`,
  }))

  for (const user of users) {
    await prisma.user.create({
      data: user,
    })
  }
}

async function main() {    
  await createRandomBooks()
  await createUsers()
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
