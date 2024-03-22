import { Metadata } from "next";

export const metadata: Metadata = {
  title: "X Interior About Us",
  description: "See our history, team and culture. So that you are more confident in using our products and services.",
};

const AboutLayout = ({
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

export default AboutLayout