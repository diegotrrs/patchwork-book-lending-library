import { handleWorkflow as handleOwnersWorkflow } from './controllers/owners'
import { handleWorkflow as handleUsersWorkflow } from './controllers/users'
import { ROLE_OPTIONS, promptRole } from './interactive'

const main = async () => {
  const role = await promptRole()
  switch (role){
    case ROLE_OPTIONS.OWNER:
      handleOwnersWorkflow()
      break
    case ROLE_OPTIONS.USER:
      handleUsersWorkflow()
      break
  } 
}

main()