const data = [{ id: '1' }, { id: '2' }] as const

type Tdata = typeof data[number]
type valueof<T> = T[keyof T]

type TValue = valueof<Tdata>
