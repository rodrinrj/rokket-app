import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

(global as any).matchMedia =
  (global as any).matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
