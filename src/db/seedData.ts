import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const createRandomBooks = async () => {
  const books = [
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      ISBN: "1234567890A",
      isReference: false,
    },
    {
      title: "Moby-Dick",
      author: "Herman Melville",
      ISBN: "1234567890B",
      isReference: false,
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      ISBN: "1234567890C",
      isReference: false,
    },
    {
      title: "1984",
      author: "George Orwell",
      ISBN: "1234567890D",
      isReference: false,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      ISBN: "1234567890E",
      isReference: false,
    },
    {
      title: "One Hundred Years of Solitude",
      author: "Gabriel García Márquez",
      ISBN: "1234567890F",
      isReference: false,
    },
    {
      title: "The Odyssey",
      author: "Homer",
      ISBN: "1234567890G",
      isReference: false,
    },
    {
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      ISBN: "1234567890H",
      isReference: false,
    },
    {
      title: "Oxford English Dictionary",
      author: "Oxford University Press",
      ISBN: "9876543210A",
      isReference: true,
    },
    {
      title: "Merriam-Webster's Collegiate Dictionary",
      author: "Merriam-Webster",
      ISBN: "9876543210B",
      isReference: true,
    }
  ];
  
  for (const book of books) {
    await prisma.book.create({
      data: book,
    })
  }
}

const createUsers = async () => {
  const users = Array.from({ length: 3 }).map((_, i) => ({
    username: `user${i+1}`,
  }))

  for (const user of users) {
    await prisma.user.create({
      data: user,
    })
  }
}

const main = async () => {
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
