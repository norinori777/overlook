var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var StaticTop = require('../develop/assets/jsx/static_top.js');

describe("StaticTop",function(){
	it('should render',function(){
		var items = [
			{url:'http://hoge1.co.jp', title:'norinori1'},
			{url:'http://hoge2.co.jp', title:'norinori2'},
			{url:'http://hoge3.co.jp', title:'norinori3'}
		], values = [];

		myComponent = TestUtils.renderIntoDocument(<StaticTop items={items}></StaticTop>);

		values = TestUtils.scryRenderedDOMComponentsWithTag(myComponent,'a');

		expect(values[0].textContent).toContain('norinori1');
		expect(values[1].textContent).toContain('norinori2');
		expect(values[2].textContent).toContain('norinori3');
	});
});