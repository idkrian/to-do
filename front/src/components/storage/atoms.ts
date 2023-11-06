import { atom } from "jotai";

export const sidebarOpenAtom = atom(false);
export const isUpdateAtom = atom(false);
export const sidebarDataAtom = atom({
  id: "",
  title: "",
  description: "",
  list: "",
  date: new Date(),
});
