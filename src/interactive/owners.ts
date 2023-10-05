import select from '@inquirer/select'
import { OWNER_ACTIONS } from '../controllers/owners'
import { Book, User } from '@prisma/client'
import chalk from 'chalk'



export const promptAction = async () => {
  const action = await select({
    message: 'What do you want to do?',
    choices: [
      {
        name: 'Display the books that are borrowed',
        value: OWNER_ACTIONS.DISPLAY_BORROWED_BOOKS,
      },      
    ],
  })
  return action
}

export const displayBorrowedBooks = (books: Book[]) => {
  if (books.length > 0){
    console.log(chalk.green(`Books borrowed:`))
    books.forEach(book => {      
      console.log(chalk.yellow(`${ book.id}. ${ book.title } by ${ book.author }. Borrowed by user${book.userId}`))
    })
  } else {
    console.log(chalk.red(`No books borrowed found.`))
  }
}