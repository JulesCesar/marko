module.exports = function (helpers) {
    var attributes = { class: 'foo', id: 'bar' };

    return helpers.vdom.createElement('div', null, 2 /* childCount */).e('span', null, 1).e('p', attributes, 0).e('a', null, 0);
};