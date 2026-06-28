import { Component } from "react";
import DemoContext from "../DemoContext";

class Paragraph extends Component {
    static contextType =DemoContext;
    componentWillUnmount() {
        console.log("componentWillUnmount called");
    }

    render() {
        return <p>{this.context}</p>
        // return (
        //     <DemoContext.Consumer>
        //         {(ctx) => (
        //             <p>{ctx}</p>
        //         )}
        //     </DemoContext.Consumer>
        // );
    }
}

export default Paragraph;

