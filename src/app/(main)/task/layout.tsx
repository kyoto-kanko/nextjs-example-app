import React from "react";

const taskLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-blue-300 p-4">
      <div>taskLayout</div>
      {children}
    </div>
  );
};

export default taskLayout;
