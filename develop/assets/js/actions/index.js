import ControlData from '../util/ControlData.js'

const constants = {
	GET_CONFIG: "GET_CONFIG",
	REGET_CONFIG: 'REGET_CONFIG',
	GET_DATA: "GET_DATA",
	GET_CANDIDATE: "GET_CANDIDATE",
	SHOW_MODAL: "SHOW_MODAL",
	CLOSED_MODAL: "CLOSED_MODAL"
}


let getConfig = (data) => {
	ControlData('GET',
		'/tableConfig' + '/config/' + data.table,
		false,
		data,
		(inLineData) => {
			let response = JSON.parse(inLineData.response)
			data.dispatch({type:constants.GET_CONFIG, config: response})
		}
	)
}

let reGetConfig = (data) => {
	ControlData('GET',
		'/tableConfig' + '/config/' + data.table,
		false,
		data,
		(inLineData) => {
			let response = JSON.parse(inLineData.response)
			data.dispatch({ type:constants.REGET_CONFIG, config: response})
		}
	)	
}
let getCandidate　= (data) => {
	ControlData('GET',
		'/' + data.table + '/candidate/' + data.keyword,
		false,
		data,
		(inLineData) => {
			let response = JSON.parse(inLineData.response)
			data.dispatch({ type:constants.GET_CANDIDATE, candidate: response.candidate, keyword: data.keyword})
		}
	)	
}

let getData = (data) => {
	ControlData('GET',
		'/' + data.table + '/search/' + data.keyword,
		false,
		data,
		(inLineData) => {
			let response = JSON.parse(inLineData.response)
			data.dispatch({ type:constants.GET_DATA, data: response.data})
		}
	)	
}

let showModal = (data) => {
	data.dispatch({type:constants.SHOW_MODAL, modal:data.rowIndex})
}

let closeModal = (data) => {
	data.dispatch({type: constants.CLOSED_MODAL})
}

export {
	getConfig,
	reGetConfig,
	getCandidate,
	getData,
	showModal,
	closeModal,
}