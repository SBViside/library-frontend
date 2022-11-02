function getPages(total, limit) {
    return Math.ceil(total / limit);
}
function getDateFromSQLString(stringDate) {
    const arrayDate = stringDate.split('-');
    return `${arrayDate[2]}.${arrayDate[1]}.${arrayDate[0]}`;
}
function shortenAuthorName(stringName) {
    let arrayName = stringName.split(' ');

    if (arrayName.length === 2) {
        arrayName[1] = arrayName[1].slice(0, 1);
        return `${arrayName[1]}.${arrayName[0]}`;
    }

    arrayName[1] = arrayName[1].slice(0, 1);
    arrayName[2] = arrayName[2].slice(0, 1);
    return `${arrayName[1]}.${arrayName[2]}.${arrayName[0]}`;
}

export { getPages, getDateFromSQLString, shortenAuthorName };