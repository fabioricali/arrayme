if (!Array.isArray) {
    Array.isArray = function(arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
}

/**
 * Transforms a value into array
 * @param value {*} value to transform
 * @param [checkNull=true] {boolean} if true returns empty array
 * @returns [] | *
 */
module.exports = function (value, checkNull) {
    checkNull = checkNull === undefined ? true : checkNull;
    if ((checkNull && value === null) || value === undefined)
        return [];
    else
        return Array.isArray(value)
            ? value
            : [value];
};