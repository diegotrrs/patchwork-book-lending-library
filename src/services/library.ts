
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const getAllBooks = async () => await prisma.book.findMany()

export const getAllBorrowableBooks = () => prisma.book.findMany({
  where: {      
    isReference: false,
  },
})

export const getAllBorrowedBooks = () => prisma.book.findMany({
  where: {      
    isBorrowed: true,
  },
})

export const getAllUsers = () => prisma.user.findMany()

export const findAvailableBooksByAuthor = (author: string) => prisma.book.findMany({
  where: {
    author,
    isBorrowed: false,
  },
})

export const findAvailableBooksByTitle = (title: string) => prisma.book.findMany({
  where: {
    title: {
      contains: title,
    },
    isBorrowed: false,
  },
})

export const findAvailableBooksByISBN = (ISBN: string) => prisma.book.findMany({
    where: {
      ISBN: ISBN,
      isBorrowed: false,
    },
  })

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
