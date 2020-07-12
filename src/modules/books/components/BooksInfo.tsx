import React from "react";

interface BooksInfoProps {
  amount: number;
}

const BooksInfo: React.FC<BooksInfoProps> = ({ amount }) => {
  return (
    <div data-testid="booksInfo">
      {amount} {amount !== 1 ? "libros agregados" : "libro agregado"}
    </div>
  );
};

export default BooksInfo;
