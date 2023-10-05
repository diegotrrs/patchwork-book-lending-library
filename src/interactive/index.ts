import select from '@inquirer/select'

export enum ROLE_OPTIONS {
  OWNER = 'owner',
  USER = 'user', 
}

export const promptRole = async () => await select({
  message: 'Who are you?',
  choices: [
    {
      name: 'A owner',
      value: ROLE_OPTIONS.OWNER,
    },
    {
      name: 'A user',
      value: ROLE_OPTIONS.USER,
    },
  ],
})