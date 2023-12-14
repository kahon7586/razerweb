// const example = {
//   '000': {
//     name: "CyberMouse",
//     price: 500,
//     amount: 1, 
//     imgPath : require('123.webp') // this will return webpack path: /static/media/......
// }}

// eslint-disable-next-line no-unused-vars
export const products = {
  '000': {
    id: '000',
    name: "CyberMouse",
    price: 500,
    amount: 1, 
    imgPath: require('./000_CyberMouse.jpg') ,
    typeOptionPair: { // 'type' : [...options]
      'Color': ['Blue', 'Black', 'Pink'],
      'Size': ['S', 'M', 'L'],
      'Texture': ['Classic', 'Metal']}
  },
  '001': {
    id: '001',
    name: "CyberHeadphone",
    price: 350,
    amount: 1,
    imgPath: require('./001_CyberHeadphone.jpg') ,
    typeOptionPair: { // 'type' : [...options]
      'Color': ['Blue', 'Black', 'Pink'],
      'Size': ['S', 'M', 'L'],
      'Texture': ['Classic', 'Metal']}
  },
  '002': {
    id: '002',
    name: "CyberWebCam",
    price: 150,
    amount: 1,
    imgPath: require('./002_CyberWebCam.jpg'),
    typeOptionPair: { // 'type' : [...options]
      'Color': ['Blue', 'Black', 'Pink'],
      'Size': ['S', 'M', 'L'],
      'Texture': ['Classic', 'Metal']}
  }
}

export default products;

