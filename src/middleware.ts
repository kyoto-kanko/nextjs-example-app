import { NextRequest, NextResponse } from "next/server";

export const middleware = (requests: NextRequest) => {
  console.log("middleware");
  return NextResponse.next();
};
