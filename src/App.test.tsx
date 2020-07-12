import React from "react";
import App from "./App";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";

const wrapper = () => <App />;

describe("AppComponent", () => {
  let component: any;
  act(() => {
    component = mount(wrapper());
  });
  test("should render without crashing", () => {
    expect(component).toBeTruthy();
  });
});
