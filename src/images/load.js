import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

//creste store

const bookStore = (set = {
  books: [],
  //actions(1)
  addNewBook: (book) => {
    set((state) => ({
      books: [...state.books, book],
    }));
  },
});
