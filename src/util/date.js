// 날짜 자르기
export const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};
