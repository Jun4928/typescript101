type viewShopInfoResponse = {
  result: string
  data?: object
  errorMessage?: string
}

const externalAPI = (bool) =>
  new Promise((resolve, reject) => {
    if (bool)
      resolve({
        data: {
          name: 'a',
          age: 20,
        },
      })
    reject({
      error: 'falied',
    })
  })

const viewShopInfo = async (arg: boolean): Promise<viewShopInfoResponse> => {
  return externalAPI(arg)
    .then((res: object) => ({ result: 'SUCCESS', data: res }))
    .catch((err) => ({ result: 'ERROR', errorMessage: err }))
}

const main = async () => {
  const response = await viewShopInfo(false)
  if (response.data) {
    console.log(response)
  }
}
main()
