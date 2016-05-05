import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {reGetConfig} from '../js/actions'
import classNames from 'classnames'

export default class HorizontalMenu extends Component {
	constructor(props) {
	  super(props)
	}

	changeMenu(e){
		let value = e.target.getAttribute('value')
		reGetConfig({table:value, dispatch:this.props.dispatch})
	}
	renderItems(values){
		let items = [], i,
		num = values.length,
		css_item = classNames('horizontalMenu__item', 'horizontalMenu--'+num)

		for(i = 0; i < values.length; i++){
			items.push(<li className={css_item} onClick={this.changeMenu.bind(this)} value={values[i].table}>{values[i].title}</li>);
		}
		return items
	}
	render(){
		let
		css_root = classNames('horizontalMenu'),
		css_list = classNames('horizontalMenu__list')

		return(
			<navi className={css_root}>
				<ul className={css_list}>{this.renderItems(this.props.items)}</ul>
			</navi>
		)
	}
}

HorizontalMenu.propTypes = {
	items: React.PropTypes.array.isRequired
}

