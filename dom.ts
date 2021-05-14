type SetStateCallBack = (prev: object) => object

type SetState = (callback: SetStateCallBack | object) => void

type EventHandler = (event: string, setState: SetState) => void

type TDocumentReturn = {
  addEventListener: (event: string, handler: EventHandler) => void
  dispatch: (event: string) => void
  getState: () => object
  setState: SetState
}

const Dom = (initialState: any = {}): TDocumentReturn => {
  const events = new Map<string, Set<EventHandler>>()
  let state = initialState

  const getState = () => state

  const render = () => {
    console.log(state)
  }

  const setState = (callback: SetStateCallBack | object) => {
    state = callback instanceof Function ? callback(state) : callback
    render()
  }

  const addEventListener = (event: string, handler: EventHandler) => {
    const actions = events.get(event) || new Set<EventHandler>()
    actions.add(handler)
    events.set(event, actions)
  }

  const dispatch = (event: string) => {
    const actions = events.get(event)
    if (!actions) return
    actions.forEach((handler) => handler(event, setState))
  }

  return {
    addEventListener,
    dispatch,
    getState,
    setState,
  }
}

const dom = Dom({ c: 19991 })

dom.addEventListener('click', (event, setState) => {
  setState((prev) => ({ ...prev, e: 1 }))
})

dom.addEventListener('click', () => {
  console.log('clicked!')
})

dom.addEventListener('submit', () => {
  console.log('submitted!')
})

dom.dispatch('click')
dom.dispatch('submit')
dom.dispatch('submmit')

dom.setState((prev) => ({ ...prev, a: 1 }))
dom.setState((prev) => ({ ...prev, b: 138 }))
dom.setState({ a: 1 })
dom.setState((prev) => ({ ...prev, d: 123 }))
