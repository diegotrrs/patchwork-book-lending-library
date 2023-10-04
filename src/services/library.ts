
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const getAllBooks = async () => await prisma.book.findMany()

export const getAllUsers = async () => await prisma.user.findMany()

export const findAvailableBooksByAuthor = async (author: string) => {
  return await prisma.book.findMany({
    where: {
      author: author,
      isBorrowed: false,
    },
  })
}

export const findAvailableBooksByTitle = async (title: string) => {
  return await prisma.book.findMany({
    where: {
      title: {
        contains: title,
      },
      isBorrowed: false,
    },
  })
}

export const findAvailableBooksByISBN = async (ISBN: string) => {
  return await prisma.book.findMany({
    where: {
      ISBN: ISBN,
      isBorrowed: false,
    },
  })
}

export const borrowBook = async (userId: number, bookId: number) => {
  // First, check if the book exists and is available
  const book = await prisma.book.findUnique({
    where: {
      id: bookId,
    },
  })

  if (!book) {
    throw new Error("Book not found.")
  }

  if (book.isBorrowed) {
    throw new Error("Book is already borrowed.")
  }

  if (book.isReference) {
    throw new Error("Reference books cannot be borrowed.")
  }

  // If all checks pass, allow the user to borrow the book
  return await prisma.book.update({
    where: {
      id: bookId,
    },
    data: {
      isBorrowed: true,
      userId: userId,
    },
  })
}
