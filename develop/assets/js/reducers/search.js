
const constants = {
	GET_CONFIG: "GET_CONFIG",
	REGET_CONFIG: "REGET_CONFIG",
	GET_DATA: "GET_DATA",
	GET_CANDIDATE: "GET_CANDIDATE",
	SHOW_MODAL: "SHOW_MODAL",
	CLOSED_MODAL: "CLOSED_MODAL"
};

function search(state = {},	action){
	switch(action.type) {
		case constants.GET_CONFIG:
			return Object.assign({}, state, {
				title: action.config[0].title,
				columnsConfig: action.config[0].constructure,
				candidateConfig: action.config[0].candidate,
				placeholder: action.config[0].placeholder,
				table: action.config[0].table
			})
		case constants.REGET_CONFIG:
			return Object.assign({}, state, {
				data: [],
				title: action.config[0].title,
				candidate: [],
				columnsConfig: action.config[0].constructure,
				candidateConfig: action.config[0].candidate,
				placeholder: action.config[0].placeholder,
				table: action.config[0].table,
				modal: 0,
				keyword: ''
			})
		case constants.GET_DATA:
			return Object.assign({}, state, {
				data: action.data
			})
		case constants.GET_CANDIDATE:
			return Object.assign({}, state, {
				candidate: action.candidate,
				keyword: action.keyword
			})
		case constants.SHOW_MODAL:
			return Object.assign({}, state, {
				modal: action.modal
			})
		case constants.CLOSED_MODAL:
			return Object.assign({}, state, {
				modal: 0
			})
		default:
			return state
	}
}

export default search