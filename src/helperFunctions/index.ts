export const randomId = () => {
  return Math.random().toString(36).slice(2, 9);
};

export const getFromLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem("notes") || "[]");
};

export const setToLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};
