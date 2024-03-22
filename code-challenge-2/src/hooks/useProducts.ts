import { IFurniture } from '@/interface'
import { furnitures, randomNumberArray } from '@/utils'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

const useProducts = (productId: string) => {
  const [data, setData] = useState<IFurniture[]>()
  const [dataPaths, setDataPaths] = useState<{name: string, url: string}[]>()
  const searchRef = useRef<HTMLInputElement>(null)
  const paths = usePathname()
  const pathNames = paths.split('/').filter( path => path )
  const router = useRouter()
  const searchParams = useSearchParams()
  const search = searchParams.get('search')

  const onSearch = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    if(searchRef && searchRef.current) {
      const search = searchRef.current.value;
      if(search){
        router.push(`/products?search=${search}`)
        searchRef.current.value = "";
      } else {
        router.push('/products')
      }
    }
  }

  const fetchDatas = () => {
    if (search) {
      const regExp = new RegExp(search, "gi")
      const dataSearch = furnitures.filter((item) => item.title.match(regExp) ? item : null)
      setData(dataSearch)
    } else {
      setData(furnitures)
    }
  }

  const fetchRandom = async () => {
    const numArr = await randomNumberArray()
    const randomData = await furnitures.filter((item) => numArr.includes(item.id) ? item : null)

    setData(randomData)
  }

  const fetchOneData = () => {
    const furniture = furnitures.filter((item) => String(item.id) === productId ? item : '')
    setData(furniture)

    const newPhats = pathNames.map((item) => (
      {
        name: Number(item) ? furniture[0].title : item,
        url: Number(item) ? `/products/${item}` : `/${item}`
      }
    ))
    setDataPaths(newPhats)
  }

  useEffect(() => {
    if (pathNames.includes('products') && pathNames.length > 1) {
      fetchOneData()
    } else if (pathNames.includes('products')) {
      fetchDatas()
    } else {
      fetchRandom()
    }
  }, [paths, searchParams])

  return {
    dataProducts: data,
    onSearch,
    searchRef,
    dataPaths
  }
}

export default useProducts