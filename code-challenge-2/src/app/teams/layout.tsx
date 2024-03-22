import { Metadata } from "next";

export const metadata: Metadata = {
  title: "X Interior Teams",
  description: "Contact our team to help you recommend beautiful interior decorations",
};

const TeamsLayout = ({
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

export default TeamsLayout