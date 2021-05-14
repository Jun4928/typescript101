import 'reflect-metadata'
import { Service } from 'typedi'

export interface User {
  id: number
  name: string
  age: number
}

@Service()
export class DatabaseService {
  users: User[]

  constructor() {
    this.users = [
      {
        id: 1,
        name: 'a',
        age: 20,
      },
      {
        id: 2,
        name: 'b',
        age: 25,
      },
    ]
  }

  getUsers(): User[] {
    return this.users
  }

  getUserById(userId: number): User {
    return this.users.find(({ id }) => id === userId)
  }
}
