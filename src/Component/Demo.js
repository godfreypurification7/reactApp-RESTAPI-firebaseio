import { Component } from "react";
import Paragraph from "./Paragraph";

class Demo extends Component{
    constructor(){
        super();
        this.state={showParagraph: true, count:0};
    }

    componentDidMount(){
        console.log("componentDidMountCalled");
    }
    componentDidUpdate(prevprops,prevState){
        // console.log("componentDidUpdateCalled");
        // if (prevState.count !=this.state.count){
        // this.setState({count:this.count+1});
        // try{
        //         throw new Error("An error has occurred");
        // } catch(error){
        //         alert(error.message)
        // }
        
    // }
    throw new Error("An error has occurred");
}
        toggleParagraph(){
            // console.log(this);
            this.setState((currentState)=>{
                return {showParagraph: !currentState.showParagraph}
            })
        }
    render(){
        return <>
        <h3>{this.props.name}</h3>
        {this.state.showParagraph && <Paragraph></Paragraph>}
        <button onClick={this.toggleParagraph.bind(this)}>{this.state.showParagraph ? 'Hide' : 'Show'}</button>
            </>
    }
}

export default Demo;
