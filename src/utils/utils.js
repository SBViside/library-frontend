function getPages(total, limit) {
    return Math.ceil(total / limit);
}

export { getPages };