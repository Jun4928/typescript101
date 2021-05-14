import 'reflect-metadata'
import { Service } from 'typedi'
import { DatabaseService, User } from './databaseService'

@Service()
export class UsersService {
  constructor(private readonly db: DatabaseService) {}

  getUsers(): User[] {
    return this.db.getUsers()
  }

  getUserById(id: number): User {
    return this.db.getUserById(id)
  }
}
