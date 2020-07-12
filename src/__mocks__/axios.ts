const axios = {
  get: jest.fn(() => Promise.resolve({ data: {} })),
  post: jest.fn(() => Promise.resolve({ data: {} })),
  create: () => axios,
  defaults: {
    headers: {
      post: {
        "Content-Type": "",
      },
      common: {
        "X-Requested-With": "",
        "Cache-Control": "",
        Pragma: "",
        "If-Modified-Since": "",
      },
    },
    adapter: {},
  },
  interceptors: {
    request: {
      use: jest.fn(),
    },
    response: {
      use: jest.fn(),
    },
  },
};

export const postMockerData = (obj: any) => {
  axios.post = jest.fn(() => Promise.resolve({ data: obj }));
};

export const getMockerData = (obj: any) => {
  axios.get = jest.fn(() => Promise.resolve({ data: obj }));
};

export default axios;
