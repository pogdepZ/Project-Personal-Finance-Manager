import { createSelector } from "@reduxjs/toolkit";

const list = state => state.transactions.list;

const search = state => state.filter.search;
const status = state => state.filter.status;
const category = state => state.filter.category;
const date = state => state.filter.date;

export const allFilterSelector = createSelector(
  [list, search, status, category, date],
  (list, search, status, category, date) =>
    list.filter(item => 
      item.note.toLowerCase().includes(search.toLowerCase()) &&
      (category === 'ALL' || item.category.toLowerCase() === category.toLowerCase()) &&
      (status === 'ALL' || item.type === status) &&
      (date === '' || item.date === date)
    )
);
