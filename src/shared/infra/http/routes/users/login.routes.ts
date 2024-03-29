import { Router } from 'express'
import { LoginUserController } from '../../../../../modules/users/useCases/LoginUser/LoginUserController'

const loginRoutes = Router()
const loginUserController = new LoginUserController()

loginRoutes.post('/', loginUserController.handle)

export { loginRoutes }
