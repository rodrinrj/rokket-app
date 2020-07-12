import { mount } from "enzyme";
import React from "react";
import RootProvider from "../../../redux-store/RootProvider";
import { postMockerData } from "../../../__mocks__";
import { generateMockedBooks } from "../../../__mocks__/Book.mock";
import { Book } from "../models/Book";
import { IBooksResponse } from "../models/response";
import BooksModal from "./BooksModal";

const wrapper = (isVisible: boolean, book?: Book) => (
  <RootProvider>
    <BooksModal
      onCreate={postMockerData}
      visible={isVisible}
      onCancel={() => null}
      book={book}
    />
  </RootProvider>
);

describe("BooksModal Component", () => {
  let component: any;
  let mockedBooks: Book[];

  beforeAll(async () => {
    const mockedResponse: IBooksResponse = {
      books: await generateMockedBooks(20),
    };
    mockedBooks = mockedResponse.books;
  });

  it("renders without crashing with no book and hidden", () => {
    component = mount(wrapper(false));
    expect(component).toBeTruthy();
  });

  it("renders without crashing with no book and visible", () => {
    component = mount(wrapper(true));
    expect(component).toBeTruthy();
  });

  it("renders without crashing with book and hidden", () => {
    component = mount(wrapper(false, mockedBooks[0]));
    expect(component).toBeTruthy();
  });

  it("renders without crashing with book and visible", () => {
    component = mount(wrapper(true, mockedBooks[0]));
    expect(component).toBeTruthy();
  });
});
