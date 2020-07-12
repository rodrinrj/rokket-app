import { cleanup } from "@testing-library/react";
import { mount } from "enzyme";
import React from "react";
import { act } from "react-dom/test-utils";
import RootProvider from "../../../redux-store/RootProvider";
import BooksDashboard from "./BooksDashboard";

const wrapper = () => (
  <RootProvider>
    <BooksDashboard />
  </RootProvider>
);

describe("BooksDashboard", () => {
  let component: any;
  beforeEach(async () => {
    act(() => {
      component = mount(wrapper());
    });
  });

  afterEach(cleanup);

  it("renders without crashing", () => {
    expect(component).toBeTruthy();
  });

  it("displays the page title", () => {
    expect(component.find("[data-testid='pageTitle']").text()).toBe("Libros");
  });
});
