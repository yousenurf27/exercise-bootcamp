import { furnitures } from "@/utils";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string }
}
 
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id
 
  // fetch data
  const product = furnitures.filter((item) => String(item.id) === params.id ? item : '')
 
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: product[0].title,
    openGraph: {
      images: [`${product[0].image}`, ...previousImages],
    },
  }
}

const DetailProductLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      {children}
    </>
  )
}

export default DetailProductLayout