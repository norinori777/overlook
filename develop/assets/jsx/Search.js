import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {getData} from '../js/actions'
import classNames from 'classnames'
import InputCandidate from './InputCandidate.js'

export default class Search extends Component {
	constructor(props) {
	  super(props)
	}
	handleSearch(e){
		let target = document.getElementById('search')
		getData({keyword:target.value, table: this.props.targetTable, dispatch: this.props.dispatch})
	}
	render(){
		let
		search = classNames('search'),
		search__btn = classNames('search__button btn btn--info')

		return (
			<div className={search}>
				<InputCandidate id={'keywords'} placeholder={this.props.placeholder}
					candidate={this.props.candidate}
					targetTable={this.props.targetTable}
					targetCandidate={this.props.targetCandidate}
					type='text'
					keyword={this.props.keyword}
					dispatch={this.props.dispatch} />
				<a className={search__btn} onClick={this.handleSearch.bind(this)}>検索</a>
			</div>
		)
	}
}

Search.propTypes = {
	placeholder: React.PropTypes.string.isRequired,
	candidate: React.PropTypes.array,
	targetCandidate: React.PropTypes.array.isRequired,
	targetTable: React.PropTypes.string.isRequired,
	keyword: React.PropTypes.string.isRequired
}
