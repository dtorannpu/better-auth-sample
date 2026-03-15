import React from "react";

type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

const H1 = ({ children, ...props }: Props) => {
  return (
    <h1 className="text-5xl font-bold text-heading" {...props}>
      {children}
    </h1>
  );
};

export default H1;
