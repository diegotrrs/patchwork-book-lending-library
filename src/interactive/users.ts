import select from '@inquirer/select'
import input from '@inquirer/input'
import chalk from 'chalk'
import { Book, User } from '@prisma/client'
import { USER_ACTIONS } from '../controllers/users'

export const promptWhichBookToBorrow = async (books: Book[]) => {  
  const bookIdSelected = await select({
    message: 'Which book do you want to borrow?',
    choices: books.map(book => ({
      name: `${ book.id}. ${ book.title } by ${ book.author }`,
      value: book.id,
    })),
  })

  return bookIdSelected
}

export const displayBookSuccesfullyBorrowedMessage = () => {
  console.log(chalk.green(`Book successfully borrowed.`))
}


export const displayBooks = (books: Book[]) => {
  if (books.length > 0){
    console.log(chalk.green(`Books found:`))
    books.forEach(book => {
      console.log(chalk.yellow(`${ book.id}. ${ book.title } by ${ book.author }`))
    })
  } else {
    console.log(chalk.red(`Books not found:`))
  }
}

export const promptAuthorName = async () => await input({ message: `Enter the author's name` })

export const promptISBN = async () => await input({ message: `Enter the book's ISBN` })

export const promptBookTitle = async () => await input({ message: `Enter the book's title` })

export const promptWhichUserAreYou = async (users: User[]) => await select({
  message: 'Which user are you?',
  choices: users.map(user => ({
    name: user.username,
    value: user.id,
  })),
})

export const promptAction = async () => {
  const action = await select({
    message: 'What do you want to do?',
    choices: [      
      {
        name: 'Find available books by author',
        value: USER_ACTIONS.FIND_AVAILABLE_BOOKS_BY_AUTHOR,
      },
      {
        name: 'Find available books by title',
        value: USER_ACTIONS.FIND_AVAILABLE_BOOKS_BY_TITLE,
      },
      {
        name: 'Find available books by ISBN',
        value: USER_ACTIONS.FIND_AVAILABLE_BOOKS_BY_ISBN,
      },
      {
        name: 'Borrow a book',
        value: USER_ACTIONS.BORROW_A_BOOK,
      },
    ],
  })
  return action
}

