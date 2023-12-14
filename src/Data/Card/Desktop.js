import pic_laptop from '../../Assets/pc/laptop.jpg'
import pic_PC from '../../Assets/pc/PC.webp'
import pic_accessories from '../../Assets/pc/accessories.jpg'



export const card_Desktop = [
  { productCategory : 'laptop',
    image: pic_laptop,
    cardName: '手提電腦',
    cardInfo: '簡潔，高性能遊戲筆記本電腦',
    moreURL: '/Test/laptop',
  },
  { productCategory : 'PC',
    image: pic_PC,
    cardName: '桌上型電腦和組件',
    cardInfo: '專為狂熱份子所打造，能提供絕佳效能',
    moreURL: '/Test/PC',
  },
  { productCategory : 'accessories',
    image: pic_accessories,
    cardName: '配件',
    cardInfo: '打造完美遊戲體驗',
    moreURL: '/Test/accessories',
  }
]