Context: I have many books which I would like to share with my community. That sounds like a book-lending library. Please write some software to help me do that.

Instructions:

- Please create a GitHub repository containing code for a book lending library. Use the stories below for requirements.
- This is just be a text-based exercise - no GUI code is required.
- We also don’t expect a DB or persistence layer. Just prove it works by calling the relevant functions from other code.
- Please don’t spend any more than 2 to 3 hours on this. We don’t expect a complete solution, but something that we can use as the basis for a follow-on conversation.
- When you are ready, please send us a link to your repository.

Stories:
- As a library user, I would like to be able to find books by my favourite author, so that I know if they are available in the library.
- As a library user, I would like to be able to find books by title, so that I know if they are available in the library.
- As a library user, I would like to be able to find books by ISBN, so that I know if they are available in the library.
- As a library user, I would like to be able to borrow a book, so I can read it at home.
- As the library owner, I would like to know how many books are being borrowed, so I can see how many are outstanding.
- As a library user, I should be to prevented from borrowing reference books, so that they are always available.



Book
- author
- borrowed or not
- IsReference

As an user
- Find available books by author
- Find available books by title
- Find available books by ISBN
- Borrow

As a Library user
- Know how many books are borrowed.



TODO
- Think about how to make user and books not access functions that they shouldn't access.