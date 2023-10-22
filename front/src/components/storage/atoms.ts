import { atom } from "jotai";

export const sidebarOpenAtom = atom(false);

export const sidebarDataAtom = atom({
  _id: "",
  title: "",
  description: "",
  list: "",
  date: new Date(),
});
