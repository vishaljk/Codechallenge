import React,{Component} from 'react'
import Measureform from '../component/measureform'
import {connect} from 'react-redux'
import createmeasure from '../store/measure/action'

class Measurepage extends Component{

    constructor(props){
        super(props)
        this.state= {measure:""}
    }

    click=()=>{
        console.log(this.state.measure)
        const {dispatch,history}=this.props
    dispatch(createmeasure(this.state.measure)) 
    history.push('/measuredetails');
    }

    pass=(value)=>{
        this.setState({measure:value})
    }
    render(){
        return(
            <div>
            <Measureform click={this.click} pass={value=>this.pass(value)}/>
            <div>the measure name is :{this.props.measure}</div>
            </div>
        )
    }
}

const mapstatetoprops=(state)=>{
    return{
        measure : state.createmeasure.measure
    }
}

export default connect(mapstatetoprops)(Measurepage);
