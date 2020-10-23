import Mock from "mockjs";

export const getCommodityLibrary = () => {
  const template = [
    {
      id: 1,
      url: "https://img01.hua.com/uploadpic/newpic/9010966.jpg_220x240.jpg",
      name: "一往情深。精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎",
      price: 0.01,
      marketPrice: 100,
      classify: "玫瑰",
      label: "热销",
      labelId: 1,
      salesPrice: 140
    }
  ];
  return Mock.mock(template);
};
