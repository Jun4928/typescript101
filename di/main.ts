import 'reflect-metadata'
import { Container } from 'typedi'
import { UsersService } from './usersService'

const usersInstance = Container.get(UsersService)
const users = usersInstance.getUsers()
const foundUser = usersInstance.getUserById(2)

console.log(users)
console.log(foundUser)
