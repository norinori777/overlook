import React, {Component, PropTypes} from 'react'
import {getCandidate} from '../js/actions'
import classNames from 'classNames'
import List from './List.js'

export default class InputCandidate extends Component {
	constructor(props) {
	  super(props)
	}
	getKeyWord(e) {
		getCandidate({keyword: e.target.value, 
			table: this.props.targetTable, 
			dispatch: this.props.dispatch})
	}
	render(){
		let search__input = classNames('search__input')
		return(
			<div>
				<input id='search' list={this.props.id} 
						className={search__input} 
						type='search' 
						placeholder={this.props.placeholder}
						onChange={this.getKeyWord.bind(this)}
						value={this.props.keyword} />
				<List id={this.props.id} data={this.props.candidate} />
			</div>
		);
	}
}

InputCandidate.propTypes = {
	candidate: React.PropTypes.array.isRequired,
	id: React.PropTypes.string.isRequired,
	targetTable: React.PropTypes.string.isRequired,
	targetCandidate: React.PropTypes.array.isRequired,
	keyword: React.PropTypes.string
}


