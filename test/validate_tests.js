var assert = require("assert");
var yamlValidator = require("../lib/validate.js");

describe('Validate yaml test', function() {
    describe('Validate yaml with invalid directory', function() {
        it('Should throw exception when directory does not exists', function() {
            assert.throws(function() {
                yamlValidator.validate('someDirectoryWhichDoesNotExists');
            }, Error);
        });

        it('Should throw exception when directory name is undefined', function() {
            assert.throws(function() {
                yamlValidator.validate();
            }, Error);
        });

        it('Should throw exception when directory name is empty string', function() {
            var str = "ss";
            assert.throws(function() {
                yamlValidator.validate('');
            }, Error);
        });

    });

});
