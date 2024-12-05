import type { Note } from "../types";

export const randomId = () => {
  return Math.random().toString(36).slice(2, 9);
};

export const getFromLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || "[]");
};

export const setToLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const formatDateTime = (date: Date | string) => {
  const convertetDate = new Date(date);

  if (convertetDate.getDate() === new Date().getDate()) {
    return new Date(date).toLocaleTimeString("nb-NO", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return new Date(date).toLocaleString("nb-NO", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const onlyUnique = (data: string[] | string[][]): string[] => {
  return Array.from(new Set(data.flat().filter((item) => !!item)));
};
