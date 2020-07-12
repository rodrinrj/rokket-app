import { generateMockedBooks } from "../../../__mocks__/Book.mock";
import { Book } from "../models/Book";
import { convertState, getFilteredBooks } from "./booksTable.service";
import filters from "./selectFilter.service";

export const hola = "hola";

describe("BooksTable Functions", () => {
  let readingBooks: Book[],
    wishingBooks: Book[],
    finishedBooks: Book[],
    mockedBooks: Book[];

  beforeAll(async () => {
    readingBooks = await generateMockedBooks(20, "reading");
    wishingBooks = await generateMockedBooks(15, "wishing");
    finishedBooks = await generateMockedBooks(30, "finished");

    mockedBooks = [...readingBooks, ...wishingBooks, ...finishedBooks];
  });

  it("filters the books correctly", () => {
    expect(getFilteredBooks(mockedBooks, filters.readingBooks).length).toBe(
      readingBooks.length
    );
    expect(getFilteredBooks(mockedBooks, filters.wishingBooks).length).toBe(
      wishingBooks.length
    );
    expect(getFilteredBooks(mockedBooks, filters.finishedBooks).length).toBe(
      finishedBooks.length
    );
    expect(getFilteredBooks(mockedBooks, filters.allBooks).length).toBe(
      mockedBooks.length
    );
  });

  it("converts the state correctly", () => {
    expect(convertState("reading")).toBe("Leyendo");
    expect(convertState("wishing")).toBe("Por leer");
    expect(convertState("finished")).toBe("Finalizado");
  });
});
