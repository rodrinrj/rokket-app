import { mount } from "enzyme";
import React from "react";
import RootProvider from "../../../redux-store/RootProvider";
import { Book } from "../models/Book";
import BooksInfo from "./BooksInfo";
import { generateMockedBooks } from "../../../__mocks__/Book.mock";

const wrapper = (mockedBooks: Book[]) => (
  <RootProvider>
    <BooksInfo amount={mockedBooks.length} />
  </RootProvider>
);

describe("BooksInfo Component", () => {
  let component: any;
  let mockedBooks: Book[];

  beforeAll(async () => {
    mockedBooks = await generateMockedBooks(20);
  });

  it("renders without crashing", () => {
    component = mount(wrapper(mockedBooks));
    expect(component).toBeTruthy();
  });

  it("displays the default number of books", () => {
    component = mount(wrapper([]));
    expect(component.find("[data-testid='booksInfo']").text()).toBe(
      "0 libros agregados"
    );
  });

  it("displays the correct number of fetched books", () => {
    component = mount(wrapper(mockedBooks));
    expect(component.find("[data-testid='booksInfo']").text()).toBe(
      `${mockedBooks.length} libros agregados`
    );
  });

  it("displays the correct info when there is one book", () => {
    component = mount(wrapper([mockedBooks[0]]));
    expect(component.find("[data-testid='booksInfo']").text()).toBe(
      `1 libro agregado`
    );
  });
});
