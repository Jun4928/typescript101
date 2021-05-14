function eatable<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    eatable = true
  }
}

function log(constructor: any) {
  return function (...args: any[]) {
    console.log(`New ${constructor.name} created!`)
    return new constructor(...args)
  } as typeof constructor
}

interface Place {
  x: number
  y: number
}

@eatable
@log
class Yogurt {
  constructor(public flavor: string) {}

  goTo(place: string | Place) {
    console.log(`this yogurt has been moved to ${place}`)
  }
}

const y1 = new Yogurt('apple!')
const y2 = new Yogurt('starberry')

y1.goTo('jun')
y1.goTo({ x: 10, y: 2 })
