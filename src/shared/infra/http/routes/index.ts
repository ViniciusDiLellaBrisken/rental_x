import { Router } from 'express'
import { carsRoutes } from './cars/cars.routes'
import { categoriesRoutes } from './cars/categories.routes'
import { specificationsRoutes } from './cars/specifications.routes'
import { loginRoutes } from './users/login.routes'
import { registerUserRoutes } from './users/register.routes'

const router = Router()

router.use('/categories', categoriesRoutes)
router.use('/specifications', specificationsRoutes)
router.use('/register', registerUserRoutes)
router.use('/login', loginRoutes)
router.use('/cars', carsRoutes)

export { router }
