import React from "react";

const taskEdit = ({ params }: { params: { id: string } }) => {
  return <div>taskEdit{params.id}</div>;
};

export default taskEdit;
