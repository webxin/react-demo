let reducer=(state={text:0},action)=>{
	switch(action.type){
		case "twoDir":
			return {
				text:action.text
			}
		default:
			return state;
	}
}
export default reducer;
