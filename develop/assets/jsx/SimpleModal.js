import React, {Component, PropTypes} from 'react'
import {closeModal} from '../js/actions'
import classNames from 'classnames'

export default class SimpleModal extends Component {
	constructor(props) {
	  super(props)
	}
	renderContents(titles, rows, names, num){
		let items = [], i, j,
		title = classNames('simple-modal__title'),
		body = classNames('simple-modal__content')

		for(i = 0; i < rows.length; i++){
			if(i+1 === num){
				for(j = 0; j < titles.length; j++){
					items.push(<div className={title}>{titles[j]}</div>)
					items.push(<div className={body}>{rows[i][names[j]]}</div>)			
				}				
			}
		}
		return items
	}
	closeModal(){
		closeModal({dispatch:this.props.dispatch})
	}
	render(){
		let 
		showModal = this.props.number === 0 ? false : true,
		hideModal = this.props.number === 0 ? true : false,
		Modal = classNames('simple-modal', 'fade', {'in': showModal}),
		header = classNames({'simple-modal__header': showModal}),
		body = classNames({'simple-modal__body': showModal}),
		footer = classNames({'simple-modal__footer': showModal}),
		button = classNames('btn', 'btn--info', 'btn--sm'),
		backdrop = classNames('simple-modal__backdrop', 'fade', {'in': showModal})

		return (
			<div>
				<div className={Modal}>
					<div className={header}>Detail</div>
					<div className={body}>{this.renderContents(this.props.titles,
																	this.props.rows,
																	this.props.columnNames,
																	this.props.number)}</div>
					<div className={footer}>
						<a className={button} onClick={this.closeModal.bind(this)}>閉じる</a>
					</div>
				</div>
				<div className={backdrop} onClick={this.closeModal.bind(this)} />
			</div>
		)
	}
}

SimpleModal.propTypes = {
	number: React.PropTypes.number.isRequired,
	rows: React.PropTypes.array.isRequired,
	columnNames: React.PropTypes.array.isRequired,
	titles: React.PropTypes.array.isRequired
}
