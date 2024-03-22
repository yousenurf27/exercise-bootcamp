import { IFurniture, ITestimonis } from "@/interface"

export const furnitures: IFurniture[] = [
  {
    id: 1,
    title: "Green Sofa",
    description: "This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
    price: 1500000,
    image: "/images/green-sofa.jpg"
  },
  {
    id: 2,
    title: "Aesthetic Set New",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    price: 6000000,
    image: "/images/set-aesthetic-living-room-2.jpg"
  },
  {
    id: 3,
    title: "Aesthetic Set New",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    price: 1500000,
    image: "/images/orange-sofa.jpg"
  },
  {
    id: 4,
    title: "Black Set",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    price: 4000000,
    image: "/images/set-black-living-room.jpg"
  },
  {
    id: 5,
    title: "Bone Set",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    price: 5000000,
    image: "/images/set-bone-living-room.jpg"
  },
  {
    id: 6,
    title: "Aesthetic Set New",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    price: 7000000,
    image: "/images/set-aesthetic-living-room.jpg"
  },
  {
    id: 7,
    title: "Gray Set",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    price: 4000000,
    image: "/images/set-gray-living-room.jpg"
  },
]

export const testimonis: ITestimonis[] = [
  {
    id: 1,
    name: "Mas Jo",
    address: "Yogyakarta",
    comment: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
  },
  {
    id: 2,
    name: "Alex Subiyanto",
    address: "Kota Tangerang Selatan",
    comment: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
  },
  {
    id: 3,
    name: "Bella Syinta",
    address: "Jakarta",
    comment: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
  },
]

export const formatPrice = (data: number) => {
  const options = {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }
  return new Intl.NumberFormat("id-ID", options).format(data)
}

export const randomNumberArray = () => {
  const array = []
  while (array.length < 3) {
    const random = Math.floor(Math.random() * 7) + 1;
    if (array.indexOf(random) === -1) {
      array.push(random)
    }
  }
  return array;
}

export const upperFirstLetter = (message: any) => {
  message = message.split(" ")
  message = message.map((item: string) => {
    let fistLetter = item.charAt(0);
    fistLetter = fistLetter.toUpperCase()
    const remainingLetters = item.slice(1)
    return fistLetter + remainingLetters
  })
  return message.join().replace(/,/gi, ' ')
}