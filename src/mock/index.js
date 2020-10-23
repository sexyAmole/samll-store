import Mock from "mockjs";
import { getCommodityLibrary } from "./commodity";

// about
Mock.mock(/commodity\/library/, "get", getCommodityLibrary);

export default Mock;
