interface SubmittedQuestion {
  id: string
  title: string
}

const useState = <T>(initial): [T, Function] => {
  let state = initial as T
  const setState = (val: T): void => {
    state = val
  }

  return [state, setState]
}

const [question, setQuestion] = useState<SubmittedQuestion | null>(null)

const handleFetchQuestion = async () => {
  const response = await fetch('API')
  const data: SubmittedQuestion = await response.json()
  setQuestion(data)
}

// async function api<T>(request: RequestInfo): Promise<T> {
//   const response = await fetch(request)
//   const data = await response.json()
//   return data
// }
