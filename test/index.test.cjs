var assert = require('assert');
var calculateVolume = require('../src/index').calculateVolume;

describe('Foo-et-al-param', function(){
    it('1. The volume of the Sphere r=1', function(){
        assert.equal(calculateVolume(1), 4.1887902047863905,  );
    });
    it('2. The volume of the Sphere r=2', function(){
        assert.equal(calculateVolume(2), 33.510321638291124,  );
    });
});
