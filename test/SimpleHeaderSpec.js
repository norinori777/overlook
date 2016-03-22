var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var SimpleHeader = require('../develop/assets/jsx/SimpleHeader.js');

describe("SimpleHeader",function(){
	it('should render',function(){
		myComponent = TestUtils.renderIntoDocument(<SimpleHeader title={'test'}></SimpleHeader>);

		value = TestUtils.findRenderedDOMComponentWithTag(myComponent,'p');

		expect(value.textContent).toContain('test');
	});
});