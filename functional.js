const log = console.log

// iterable => for ... of, ... spread syntax 순회 가능하고, 복사 가능한 객체
const forEach = (fn, iter) => {
  for (const el of iter) fn(el)
}

const map = (fn, iter) => {
  const results = []
  for (const el of iter) results.push(fn(el))

  return results
}

const filter = (fn, iter) => {
  const results = []
  for (const el of iter) if (fn(el)) results.push(el)

  return results
}

const reduce = (fn, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]()
    acc = iter.next().value
  }

  for (const el of iter) acc = fn(acc, el)
  return acc
}

const arr = [1, 2, 3, 4, 5]

forEach((el) => console.log(el), arr)
log(map((el) => el + 1, arr))
log(filter((el) => el > 3, arr))
log(reduce((acc, el) => acc + el, arr))
