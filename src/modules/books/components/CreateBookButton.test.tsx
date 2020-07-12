import { mount } from "enzyme";
import React from "react";
import RootProvider from "../../../redux-store/RootProvider";
import CreateBookButton from "./CreateBookButton";

const wrapper = () => (
  <RootProvider>
    <CreateBookButton onClick={() => null} />
  </RootProvider>
);

describe("CreateBookButton Component", () => {
  let component: any;

  beforeEach(() => {
    component = mount(wrapper());
  });

  it("renders without crashing", () => {
    expect(component).toBeTruthy();
  });

  it("shows the right label", () => {
    expect(component.find("button span").text()).toBe("Agregar libro");
  });
});
