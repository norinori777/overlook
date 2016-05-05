import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {connect} from 'react-redux'
import overlook from '../js/reducers/search.js'
import {getConfig} from '../js/actions'
import HorizaontalMenu from './HorizontalMenu.js'
import SimpleHeader from './SimpleHeader.js'
import Search from './Search.js'
import SimpleTable from './SimpleTable.js'

class Main extends Component {
	constructor(props) {
	  super(props)
	}
	componentDidMount(){
		getConfig({table:this.props.table, dispatch:this.props.dispatch});
	}
	makeTitles(config){
		let titles = [], i;

		for(i = 0; i < config.length; i++){
			titles.push(config[i].title)
		}
		return titles
	}
	makeColumns(config){
		let columns = [], i;
		for(i = 0; i < config.length; i++){
			columns.push(config[i].column)
		}
		return columns
	}
	render(){
		return(
			<div>
				<SimpleHeader title={this.props.title} />
				<HorizaontalMenu items={this.props.menu}
						dispatch={this.props.dispatch} />
				<br />
				<Search placeholder={this.props.placeholder} 
						candidate={this.props.candidate} 
						targetCandidate={this.props.candidateConfig}
						targetTable={this.props.table}
						keyword={this.props.keyword}
						dispatch={this.props.dispatch}></Search>
				<br />
				<SimpleTable title={this.makeTitles(this.props.columnsConfig)}
						columns={this.makeColumns(this.props.columnsConfig)}
						rows={this.props.data}
						modal={this.props.modal}
						isSetNum={true} dispatch={this.props.dispatch}
						dispatch={this.props.dispatch}></SimpleTable>
			</div>
		)
	}	
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Main)
