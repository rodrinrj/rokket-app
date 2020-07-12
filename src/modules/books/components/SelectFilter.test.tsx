import React from "react";
import RootProvider from "../../../redux-store/RootProvider";
import SelectFilter from "./SelectFilter";
import { mount } from "enzyme";
import { BookFilters } from "../../../redux-store/filter/Filter.actions";

const wrapper = () => (
  <RootProvider>
    <SelectFilter
      filter={{ title: "Todos", value: BookFilters.ALL_BOOKS_FILTER }}
      onChange={() => null}
    />
  </RootProvider>
);

describe("SelectFilter Component", () => {
  let component: any;
  beforeEach(() => {
    component = mount(wrapper());
  });

  it("renders without crashing", () => {
    expect(component).toBeTruthy();
  });
});
