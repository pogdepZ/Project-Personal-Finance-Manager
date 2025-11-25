import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = 'budget';

const getInitialList = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};

const budgetSlice = createSlice({
    name: "budget",
    initialState: {
        list: getInitialList(),
    },
    reducers: {
        saveBudget: (state, action) => {
            const { monthStr, category, limit } = action.payload;
            const [yearStr, monthStrParsed] = monthStr.split("-");
            const year = parseInt(yearStr);
            const month = parseInt(monthStrParsed);
            const existingRecord = state.list.find(
                (item) => item.year === year && item.month === month
            );
            if (existingRecord) {
                if (!existingRecord.categories) {
                    existingRecord.categories = {};
                }
                existingRecord.categories[category] = Number(limit);
            } else {
                state.list.push({
                    year: year,
                    month: month,
                    categories: {
                        [category]: Number(limit),
                    },
                });
            }
            state.list.sort((a, b) => {
                if (a.year !== b.year) return a.year - b.year;
                return a.month - b.month;
            });      
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state.list));
        },
        removeBudgetCategory: (state, action) => {
            const { year, month, category } = action.payload;
            const record = state.list.find(item => item.year === year && item.month === month);
            if (record && record.categories) {
                delete record.categories[category];
                localStorage.setItem(STORAGE_KEY, JSON.stringify(state.list));
            }
        }
    },
});

export const { saveBudget, removeBudgetCategory } = budgetSlice.actions;
export default budgetSlice.reducer;