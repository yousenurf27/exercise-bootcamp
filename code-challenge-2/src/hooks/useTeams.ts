import { randomUserApi } from '@/api'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const useTeams = () => {
  const [data, setdata] = useState<any>()
  const paths = usePathname()
  const pathNames = paths.split('/').filter( path => path )

  const fetchUsers = async () => {
    try {
      const users = await randomUserApi.get('/?nat=us&gender=male&results=6')

      setdata(users.data)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchThreeUsers = async () => {
    try {
      const users = await randomUserApi.get('/?nat=us&gender=male&results=3')

      setdata(users.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (pathNames.includes('teams')) {
      fetchUsers()
    } else {
      fetchThreeUsers()
    }
  }, [])
  return {
    data
  }
}

export default useTeams