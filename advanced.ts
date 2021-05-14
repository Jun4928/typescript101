type UserArgs = {
  first?: number
  select?: UserSelect
}

type UserSelect = {
  id?: boolean
  name?: boolean
  email?: boolean
}

type UserSelectTwo = {
  id?: boolean
  name?: boolean
  email: boolean
  age?: number
}

declare function findManyUser<T extends UserArgs>(args: UserArgs): any

findManyUser({ first: 3 })

type Picked = Pick<UserSelect, 'id' | 'email'>

type UserExcluded = Extract<UserSelect | UserSelectTwo, Required<UserSelectTwo>>

type excluded = Exclude<string | number | boolean, string>
type extracted = Extract<string | number | boolean, boolean>

declare type Subset<T, U> = {
  [key in keyof T]: key extends keyof U ? T[key] : never
}

type subset = Subset<UserSelectTwo, UserSelect>
type subset2 = Subset<UserSelect, UserSelectTwo>

type Pick1<T, Keys extends keyof T> = {
  [P in Keys]: T[P]
}

type Picked2 = Pick1<UserArgs, 'first' | 'select'>

type ReturnType1<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
type MyFuncReturnValue = ReturnType1<(a: number, b: number) => string | number | boolean>
