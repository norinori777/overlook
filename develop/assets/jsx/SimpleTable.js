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
	renderHead(values, sizes, visible){
		let head = [], i, small, middle, large, xlarge, size

		if(this.props.isSetNum){
			head.push(<th>No.</th>)
		}
		for(i = 0; i < values.length; i++){
			if(visible[i]){
				small = sizes[i] === 's' ? true : false
				middle = sizes[i] === 'm' ? true : false
				large = sizes[i] === 'l' ? true : false
				xlarge = sizes[i] === 'xl' ? true : false

				size = classNames({'simple-table__item--small': small,
									'simple-table__item--middle': middle,
									'simple-table__item--large': large,
									'simple-table__item--xlarge': xlarge})

				head.push(<th className={size}>{values[i]}</th>)
			}
		}
		return head
	}
	renderBody(values, config, visible){
		let body = [], i, record = classNames('simple-table__record')

		for(i = 0; i < values.length; i++){
			body.push(<tr className={record} onClick={this.handleModal.bind(this)}>{this.renderRow(values[i], i, config, visible)}</tr>)
		}
		return body
	}
	renderRow(values, num, config, visible){
		let row = [], i
		
		if(this.props.isSetNum){
			row.push(<th>{num+1}</th>)
		}
		for(i = 0; i < config.length; i++){
			if(visible[i]){
				if(values[config[i]] == undefined){
					row.push(<td>{'－'}</td>)
				} else {
					row.push(<td>{values[config[i]]}</td>)
				}				
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
							{this.renderHead(this.props.title, this.props.sizes, this.props.visible)}
						</tr>
					</thead>
					<tbody className={body}>
						{this.renderBody(this.props.rows, this.props.columns, this.props.visible)}
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
	sizes: React.PropTypes.array.isRequired,
	visible: React.PropTypes.array.isRequired,
	modal: React.PropTypes.number.isRequired
}
