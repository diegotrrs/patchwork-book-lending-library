# Description
This repository includes the coding challenge for Patchwork. Check out the [Project Description](./ProblemDescription.MD) for details on the requirements.

# How to run

Run the following commands from the root folder

```
npm install

npm run setup-db

npm run build

npm run start
```

# Notes
## Implementation

The current implementation uses SQLite as the database for persistent storage and leverages Prisma as the ORM. I chose these technologies due to my familiarity with them, and they were straightforward to set up. One notable advantage of Prisma is its out-of-the-box strong typing. For user input, the app relies on the inquirer library.

> In a production environment, the database would likely be a more robust SQL system, such as PostgreSQL, and it would be hosted on a separate machine from the server.

## Folder structure
The chosen folder structure is as follows:

- Interactive: Responsible for receiving input from the user and displaying results back to them.
- Services: Interfaces with the persistence layer, which in this context is Prisma.
- Controllers: Manages the flow between the interactive components and the underlying logic.

## Seed data

The following books are inserted in the DB.
```typescript
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
```

In other hand, three users are inserted by default.

# Improvements
1. Unit tests should be included. 
Integrating Prisma with Jest's mocks, as detailed in [this](https://www.prisma.io/docs/guides/testing/unit-testing) guide, is straightforward.
2. User input validation.
3. Support uppercases in search mode.
4. Allowing users to go back to the previous option.

