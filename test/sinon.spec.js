var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var controller = require('../customer.controller');
describe('cheking api call get', () => {
    it('test customer api', () => {
        var spy = sinon.spy(controller.createCustomer, 'createCustomer');
        console.log(spy);
        // spy.createCustomer();
        expect(spy.createCustomer).to.be.a('function');
    })
})