export const totalBudget = (categories) => {
    return categories ? Object.values(categories).reduce((sum, item) => sum + Number(item), 0) : 0
}