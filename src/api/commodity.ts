import request from "../utils/axios";

const api = {
  commodityLibrary: "/commodity/library"
};

export function getCommodityLibraryList(parameter?: any) {
  return request({
    url: api.commodityLibrary,
    method: "get",
    params: parameter
  });
}
