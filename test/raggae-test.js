var should = require('should'),
    raggae = require('../index.js');

describe('raggae', function () {
    it('should set an object', function () {
        raggae.set('namespace.obj', {a: 5});
        raggae.get('namespace.obj.a').should.equal(5);
    });

    it('should get an object by default value', function () {
        should.not.exist(raggae.get('namespace.not.existing.object'));
        raggae.get('namespace.not.existing.object', 'defaultValue').should.equal('defaultValue');
    });

    it('it should get useing local scopes', function () {
        var scope = {scopedA: {scopedB: 5}};
        raggae.get('scopedA.scopedB',null, scope).should.equal(5);
    });

    it('it should set useing local scopes', function () {
        var scope = {scopedA: {scopedB: {}}};
        raggae.set('scopedA.scopedB.scopedC.scopedD', 5, scope);
        should.exist(raggae.get('scopedA.scopedB.scopedC.scopedD',null, scope));
    });

    it('it should not overwrite primitive values ', function () {
        var scope = {scopedA: {scopedB: 5}};
        raggae.set('scopedA.scopedB.scopedC.scopedD', 5, scope);
        should.not.exist(raggae.get('scopedA.scopedB.scopedC.scopedD',null, scope));
    });

    it('it should return defaultValues on local scopes', function () {
        var scope = {scopedA: {scopedB: 5}};
        raggae.get('scopedA.scopedB.scopedC.scopedD', 'defaultValue', scope).should.equal('defaultValue');
    });

});
