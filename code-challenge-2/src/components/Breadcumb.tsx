import { upperFirstLetter } from "@/utils"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"
import Link from "next/link"

const Breadcumb = ({props} : { props: {name: string, url: string}[] }) => {
  return (
    <Breadcrumb
      pt={'1rem'}
      spacing='8px'
      separator={<ChevronRightIcon color='gray.500' />}>
      <BreadcrumbItem>
        <Link href={'/'}>Home</Link>
      </BreadcrumbItem>
      {props.map((item) => (
        <BreadcrumbItem
          key={item.name}>
          <Link href={item.url}>{upperFirstLetter(item.name)}</Link>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  )
}

export default Breadcumb