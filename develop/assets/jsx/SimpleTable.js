import React, {Component, PropTypes} from 'react'
import {showModal} from '../js/actions'
import classNames from 'classnames'
import SimpleModal from './SimpleModal.js'

export default class SimpleTable extends Component {
	constructor(props) {
	  super(props)
	}
	handleModal(e){
		showModal({rowIndex:e.target.parentNode.rowIndex, dispatch: this.props.dispatch})
	}
	renderModal(titles, rows, columnNames, num){
		let modal = [];

		modal.push(<SimpleModal titles={titles}
									rows={rows}
									columnNames={columnNames}
									number={num}
									dispatch={this.props.dispatch} />)
		return modal
	}
	renderHead(values){
		let head = [], i

		if(this.props.isSetNum){
			head.push(<th>No.</th>)
		}
		for(i = 0; i < values.length; i++){
			head.push(<th>{values[i]}</th>)
		}
		return head
	}
	renderBody(values, config){
		let body = [], i, record = classNames('simple-table__record')

		for(i = 0; i < values.length; i++){
			body.push(<tr className={record} onClick={this.handleModal.bind(this)}>{this.renderRow(values[i], i, config)}</tr>)
		}
		return body
	}
	renderRow(values, num, config){
		let row = [], i
		
		if(this.props.isSetNum){
			row.push(<th>{num+1}</th>)
		}
		for(i = 0; i < config.length; i++){
			if(values[config[i]] == undefined){
				row.push(<td>{'－'}</td>)
			} else {
				row.push(<td>{values[config[i]]}</td>)
			}
		}
		return row
	}
	render(){
		let
		isHide = this.props.rows.length === 0 ? true : false, 
		table = classNames('simple-table', 'table--responsive', {'simple-table--hide': isHide}),
		head = classNames('simple-table__head'),
		body = classNames('simple-table__body')

		return (
			<div>
				<table className={table}>
					<thead className={head}>
						<tr>
							{this.renderHead(this.props.title)}
						</tr>
					</thead>
					<tbody className={body}>
						{this.renderBody(this.props.rows, this.props.columns)}
					</tbody>
				</table>
				<div>{this.renderModal(this.props.title, 
										this.props.rows, 
										this.props.columns,
										this.props.modal)}</div>
			</div>
		)
	}
}

SimpleTable.propTypes = {
	title: React.PropTypes.array.isRequired,
	rows: React.PropTypes.array.isRequired,
	columns: React.PropTypes.array.isRequired,
	modal: React.PropTypes.number.isRequired
}
