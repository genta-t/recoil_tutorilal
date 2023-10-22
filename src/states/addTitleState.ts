import { atom, selector } from "recoil";
import { TypeTask } from "../types/Task";

export const addTitleState = atom<Array<TypeTask>>({
  key: "addTitleState",
  default: [],
});

export const addTitleStateLength = selector<number>({
  key: "addTitleStateLength",
  get: ({ get }) => {
    const addTitleNumber: Array<TypeTask> = get(addTitleState);
    return addTitleNumber?.length || 0;
  },
})