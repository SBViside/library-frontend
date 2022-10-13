// UTILS
const CURR_YEAR = new Date().getFullYear();

// FILTER
const FILTER_PAGES = { from: 50, to: 2000 };
const FILTER_YEAR = { from: 1600, to: CURR_YEAR };

// REGEXP
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

export { CURR_YEAR, FILTER_PAGES, FILTER_YEAR, EMAIL_REGEXP }