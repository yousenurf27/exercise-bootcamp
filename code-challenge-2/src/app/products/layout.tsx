import { Metadata } from "next";

export const metadata: Metadata = {
  title: "X Interior Products",
  description: "See all our products, to beautify the interior of your home",
};

const ProductsLayout = ({
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

export default ProductsLayout