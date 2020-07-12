import mocker from "mocker-data-generator";
import { Book } from "../modules/books/models/Book";
import { IBooksResponse } from "../modules/books/models/response";

export const BookSchema = {
  _id: {
    faker: "random.alphaNumeric",
  },
  title: {
    faker: "name.jobTitle",
  },
  author: {
    faker: "name.firstName",
  },
  state: {
    values: ["reading", "wishing", "finished"],
  },
  _v: {
    faker: "random.number",
  },
};

export const generateMockedBooks = (amount: number, state?: string) =>
  mocker()
    .schema("books", BookSchema, amount)
    .build()
    .then(({ books }: IBooksResponse) => {
      if (state) {
        return books.map((b) => ({ ...b, state: state }));
      } else {
        return books;
      }
    })
    .catch((err) => {
      throw err;
    });
