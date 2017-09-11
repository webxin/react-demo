
const reducer=(state={num:0},action)=>{
	switch(action.type){
			case "Addone":
			return{
				num:++state.num
			}
			case "Jianone":
			 return { 
			 	num:a(state.num)
			 	}
			default:
			return state;
	}
}
let a=(val)=>{
 	if(val<=0){
 		return 0;
 	}else{
 		return --val;
 	}
}

export default reducer;
