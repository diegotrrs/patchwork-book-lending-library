
import { borrowBook, findAvailableBooksByAuthor, findAvailableBooksByISBN, findAvailableBooksByTitle, getAllBooks, getAllBorrowableBooks, getAllUsers } from '../services/library'
import { promptAction, promptAuthorName, promptBookTitle, promptWhichUserAreYou, displayBookSuccesfullyBorrowedMessage, displayBooks, promptWhichBookToBorrow } from '../interactive/users'

export enum USER_ACTIONS {
  FIND_AVAILABLE_BOOKS_BY_AUTHOR = 'findBooksByAuthor',
  FIND_AVAILABLE_BOOKS_BY_TITLE = 'findBooksByTitle',
  FIND_AVAILABLE_BOOKS_BY_ISBN = 'findBooksByIsbn',
  BORROW_A_BOOK = 'borrowABook',
}

const handleFindAvailableBooksByAuthor = async () => {
  const authorName = await promptAuthorName()
  const resultsByAuthor = await findAvailableBooksByAuthor(authorName)
  displayBooks(resultsByAuthor)
}

const handleFindAvailableBooksByTitle = async () => {
  const title = await promptBookTitle()
  const resultsByTitle = await findAvailableBooksByTitle(title)
  displayBooks(resultsByTitle)
}

const handleBorrowABook = async (userId: number) => {
  const books = await getAllBorrowableBooks()
  const bookId = await promptWhichBookToBorrow(books)
  await borrowBook(userId, bookId)
  displayBookSuccesfullyBorrowedMessage()
}

const handleAvailableFindBooksByISBN = async () => {
  const isbn = await promptBookTitle()
  const results = await findAvailableBooksByISBN(isbn)
  displayBooks(results)
}

export const handleWorkflow = async () => {
  const allUsers = await getAllUsers()
  const userId = await promptWhichUserAreYou(allUsers)
  const action = await promptAction()

  switch (action){   
    case USER_ACTIONS.FIND_AVAILABLE_BOOKS_BY_AUTHOR:
      await handleFindAvailableBooksByAuthor()
      break
    case USER_ACTIONS.FIND_AVAILABLE_BOOKS_BY_TITLE:
      await handleFindAvailableBooksByTitle()
      break
    case USER_ACTIONS.FIND_AVAILABLE_BOOKS_BY_ISBN:
      await handleAvailableFindBooksByISBN()
      break
    case USER_ACTIONS.BORROW_A_BOOK:
      await handleBorrowABook(userId)
      break
  }  
}
