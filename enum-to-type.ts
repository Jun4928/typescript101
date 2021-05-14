// interface ImageUrl<T extends Keys, Properties> {
//   [P keyof Properties]: UrlWithKey;
// }
// const url = 'www.abc.com/source'

// enum ImgUrl {
//   a = `${url}/a`
//   b = `${url}/b`
//   c = `${url}/c`
// }

const url = 'www.abc.com/source'

enum ImagesEnum {
  a = 'a',
  b = 'b',
  c = 'c',
}

type ImageUrls = Record<ImagesEnum, string>

const imageUrls: ImageUrls = Object.keys(ImagesEnum).reduce<ImageUrls>(
  (acc: ImageUrls, key: string) => {
    acc[key] = `${url}/${key}`
    return acc
  },
  {} as ImageUrls
)

console.log(imageUrls)
console.log(imageUrls.a)
console.log(imageUrls.b)
console.log(imageUrls.c)
// console.log(imageUrls.e);
// console.log(imageUrls.d);
// console.log(imageUrls.d);
// console.log(imageUrls.d);
// console.log(imageUrls.e);
