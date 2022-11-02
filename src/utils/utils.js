function getPages(total, limit) {
    return Math.ceil(total / limit);
}
function getDateFromSQLString(stringDate) {
    const arrayDate = stringDate.split('-');
    return `${arrayDate[2]}.${arrayDate[1]}.${arrayDate[0]}`;
}

export { getPages, getDateFromSQLString };