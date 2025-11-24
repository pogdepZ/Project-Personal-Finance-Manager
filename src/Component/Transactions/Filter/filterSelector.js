import { createSelector } from "@reduxjs/toolkit";
import { data } from "react-router-dom";

const list = state => state.transactions.list
const search = state => state.filter.search
const status = state => state.filter.status
const category = state => state.filter.category
const date = state => state.filter.date



export const allFilterSelector = createSelector(
    [list, search, status, category, date],
    (list, search, status, category, date) => {
        let curList = [...list]
        curList = curList.filter(item => item.note.toLowerCase().includes(search.toLowerCase()))
        if (category != 'ALL') {
            curList = curList.filter(item => item.category.toLowerCase() == category.toLowerCase())
        }
        if (status != 'ALL') {
            curList = curList.filter(item => item.type == status)
        }

        if (date != '') {
            curList = curList.filter(item => item.date == date)
        }
        return (
            curList
        )
    }
)