
import { borrowBook, findAvailableBooksByAuthor, findAvailableBooksByISBN, findAvailableBooksByTitle, getAllBooks, getAllBorrowableBooks, getAllUsers } from '../services/library'
import { promptAction, promptAuthorName, promptBookTitle, promptWhichUserAreYou, displayBookSuccesfullyBorrowedMessage, displayBooks, promptWhichBookToBorrow } from '../interactive/users'

export enum USER_ACTIONS {
  DISPLAY_ALL_BOOKS = 'displayAllBooks',
  FIND_BOOKS_BY_AUTHOR = 'findBooksByAuthor',
  FIND_BOOKS_BY_TITLE = 'findBooksByTitle',
  FIND_BOOKS_BY_ISBN = 'findBooksByIsbn',
  BORROW_A_BOOK = 'borrowABook',
}

async function handleFindBooksByAuthor() {
  const authorName = await promptAuthorName()
  const resultsByAuthor = await findAvailableBooksByAuthor(authorName)
  displayBooks(resultsByAuthor)
}

async function handleFindBooksByTitle() {
  const title = await promptBookTitle()
  const resultsByTitle = await findAvailableBooksByTitle(title)
  displayBooks(resultsByTitle)
}

async function handleBorrowABook(userId: number) {
  const books = await getAllBorrowableBooks()
  const bookId = await promptWhichBookToBorrow(books)
  await borrowBook(userId, bookId)
  displayBookSuccesfullyBorrowedMessage()
}

async function handleFindBooksByISBN() {
  const isbn = await promptBookTitle()
  const results = await findAvailableBooksByISBN(isbn)
  displayBooks(results)
}

async function handleDisplayAllBooks() {
  displayBooks(await getAllBooks())
}

export const handleWorkflow = async () => {
  const allUsers = await getAllUsers()
  const userId = await promptWhichUserAreYou(allUsers)
  const action = await promptAction()

  switch (action){
    case USER_ACTIONS.DISPLAY_ALL_BOOKS:
      await handleDisplayAllBooks()
      break
    case USER_ACTIONS.FIND_BOOKS_BY_AUTHOR:
      await handleFindBooksByAuthor()
      break
    case USER_ACTIONS.FIND_BOOKS_BY_TITLE:
      await handleFindBooksByTitle()
      break
    case USER_ACTIONS.FIND_BOOKS_BY_ISBN:
      await handleFindBooksByISBN()
      break
    case USER_ACTIONS.BORROW_A_BOOK:
      await handleBorrowABook(userId)
      break
  }  
}
