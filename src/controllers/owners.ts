import { promptAction, displayBorrowedBooks } from "../interactive/owners"
import { getAllBorrowedBooks } from "../services/library"

export enum OWNER_ACTIONS {
  DISPLAY_BORROWED_BOOKS = 'displayBorrowedBooks',
}

export const handleWorkflow = async () => {
  const action = await promptAction()

  switch (action) {
    case OWNER_ACTIONS.DISPLAY_BORROWED_BOOKS:
      displayBorrowedBooks(await getAllBorrowedBooks())
      break
  }  
}