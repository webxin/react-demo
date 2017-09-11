import {connect} from 'react-redux';
import Counter from "../components/Counter.js";
import {Add,Jian} from "../actions/index.js";
import  $ from "jquery";

let mapStateToProps=(state)=>{
	return {
		val:state.index.num
	}
}
let mapDispatchtoProps=(dispatch)=>{
	return{
		addHandle:()=>{
				dispatch(Add())		
		},
		jianHandle:()=>{
			dispatch(Jian())
		}
	}
}
export default connect(mapStateToProps,mapDispatchtoProps)(Counter);
