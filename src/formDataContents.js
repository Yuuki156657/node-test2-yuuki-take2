

function createData(id, title, state, url, created, updated) {
    return { id, title, state, url, created, updated };
}

// Not a default export
export const rows = [
    createData('123456789', "title1", "open", "http://1", "2019-09-24", "2019-09-24"),
    createData('223456789', "title2", "open", "http://2", "2019-09-24", "2019-09-24"),
    createData('323456789', "title3", "open", "http://3", "2019-09-24", "2019-09-24"),
    createData('423456789', "title4", "open", "http://4", "2019-09-24", "2019-09-24"),
    createData('523456789', "title5", "open", "http://5", "2019-09-24", "2019-09-24"),
];

// A default export
// export default rows


