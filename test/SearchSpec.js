var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var Search = require('../develop/assets/jsx/Search.js');

describe("Search",function(){
	it('should render',function(){
		myComponent = TestUtils.renderIntoDocument(<Search placeholder={'test'}></Search>);

		value = TestUtils.findRenderedDOMComponentWithTag(myComponent,'a');
		expect(value.textContent).toContain('検索')
	});
});