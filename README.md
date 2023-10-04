# Description
This repository includes the coding challenge for Patchwork. Check out the [Project Description](./ProblemDescription.MD) for details on the requirements.

# How to run

Run the following commands from the root folder
```
npm run install
```

```
npm run build && npm run start
```

Using nodemon (dev mode)
```
npm run dev
```

Apply Prisma migrations
```
npx prisma migrate deploy
```

Insert seed data
```
npm run seed
```

# How to test
```
npm run test
```