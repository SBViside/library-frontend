// UTILS
const CURR_YEAR = new Date().getFullYear();

// FILTER
const CLEAR_FILTER = {
    search: "",
    page: { from: 50, to: 2000 },
    year: { from: 1600, to: CURR_YEAR },
    genres: [],
    inStock: false,
};

// REGEXP
const EMAIL_REGEXP = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

export { CURR_YEAR, CLEAR_FILTER, EMAIL_REGEXP };