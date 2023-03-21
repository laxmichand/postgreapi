var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;

describe('Array', function () {
    let userName = 'Laxmichandra'
    it('check string', ()=>{
       expect(userName).to.be.a('string');
    })
});