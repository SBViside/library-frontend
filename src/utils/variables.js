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
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

export { CURR_YEAR, CLEAR_FILTER, EMAIL_REGEXP };