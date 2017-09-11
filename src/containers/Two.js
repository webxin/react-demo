import React from "react";
import {connect} from "react-redux";
import {twodir} from "../actions/index.js";
class Two extends React.Component{
	render(){
		let {text,inputchange}=this.props;
		return (
			<div>
				<span>{text}</span><br />
				<input type="text" onChange={inputchange} defaultValue="这是默认值"/>
			</div>
		)
	}
}
let mapStateToProps=(state,ownProps)=>{
	return{
		text:state.manage.text
	}	
}
let mapDispatchToProps=(dispatch)=>{
	return{
		inputchange:(event)=>{
			dispatch(twodir(event.target.value))
		}
	}
}

let TwoCon=connect(mapStateToProps,mapDispatchToProps)(Two);
export default TwoCon;
