import select from '@inquirer/select'
import { OWNER_ACTIONS } from '../controllers/owners'
import { Book } from '@prisma/client'
import chalk from 'chalk'

export const promptAction = async () => {
  const action = await select({
    message: 'What do you want to do?',
    choices: [
      {
        name: 'Display the books that are borrowed',
        value: OWNER_ACTIONS.DISPLAY_BORROWED_BOOKS,
        description: 'Display the books that are borrowed',
      },      
    ],
  })
  return action
}

export const displayBorrowedBooks = (books: Book[]) => {
  if (books.length > 0){
    console.log(chalk.green(`Books borrowed:`))
    console.log(chalk.white(books.map(b => `${b.title}\n`)))
  } else {
    console.log(chalk.green(`No books borrowed found.`))
  }
}