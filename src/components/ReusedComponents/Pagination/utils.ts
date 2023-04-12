export const getPagesArray = (quantityPages: number) => {
    const result = [];
    for (let i = 0; i < quantityPages; i++) {
        result.push(i + 1);
    }
    return result;
};
