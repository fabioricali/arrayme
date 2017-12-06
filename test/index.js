const arrayme = require('../index');
const be = require('bejs');

describe('arrayme', function () {
    it('should be an array', function () {
        let result = arrayme('hello');
        be.err.array(result);
    });
    it('passing null should be an empty array', function () {
        let result = arrayme(null);
        be.err.array(result);
        be.err.empty(result);
    });
    it('passing null and set checkNull to false should be an array', function () {
        let result = arrayme(null, false);
        be.err.array(result);
        be.err.null(result[0]);
    });
    it('passing undefined should be an empty array', function () {
        let result = arrayme();
        be.err.array(result);
        be.err.empty(result);
    });
    it('passing 0 should be an array', function () {
        let result = arrayme(0);
        be.err.array(result);
        be.err.numeric(result[0]);
    });
});