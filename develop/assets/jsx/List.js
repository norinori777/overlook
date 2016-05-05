import React, {Component, PropTypes} from 'react'
import classNames from 'classNames'

export default class List extends Component {
	constructor(props) {
	  super(props)
	}
	renderItems(values){
		let items = [], i
		if(undefined !== values && values.length){
			for(i=0; i < values.length; i++){
				items.push(<option value={values[i]} />)
			}
		}
		return items
	}
	render(){
		return(
			<datalist id={this.props.id}>{this.renderItems(this.props.data)}</datalist>
		)
	}
}

List.propTypes = {
	data: React.PropTypes.array.isRequired,
	id: React.PropTypes.string.isRequired
}
