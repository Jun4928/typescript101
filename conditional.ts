type User = {
  id: string
  age: number
}

type UserWithName = {
  id: string
  age: number
  name: string
}

type MyConditionalUser<T> = T extends User ? User : never

type MyUser = MyConditionalUser<UserWithName>
