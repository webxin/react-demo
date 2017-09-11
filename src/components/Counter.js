import React from "react";
class Counter extends React.Component{
	render(){
		let {val,addHandle,jianHandle}=this.props;
		return(
			<div>
				<span>{val}</span><br />
				<button onClick={addHandle}>+</button>
				<button onClick={jianHandle}>-</button>
			</div>
		)
	}
}
export default Counter;