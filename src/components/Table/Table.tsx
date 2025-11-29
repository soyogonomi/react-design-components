"use client";
type TableProps = {
  children?: React.ReactNode;
};
export const Table = ({ children }: TableProps) => {
  return <div className="border rounded-xl shadow bg-blue-200">{children}</div>;
};
