import { Metadata } from "next";
import { Suspense } from "react";

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
    <Suspense>
      {children}
    </Suspense>
  )
}

export default ProductsLayout