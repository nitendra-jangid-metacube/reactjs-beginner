import React from "react";
import './Timer.css';
import Header from "../Common/Header";

class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.intervalID = null;
        this.state = { time: new Date(), switch: true };
    }

    componentDidMount() {
        this.intervalID = setInterval(() => this.showTime(),1000);
    }

    showTime() {
        console.log('start')
        this.setState({time: new Date()});
    }
    
    componentWillUnmount() {
        console.log('stop')
        clearInterval(this.intervalID);
    }


    checkTime(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
    }      

    showWatch() {
        this.setState({switch: !this.state.switch})
    }

    render() {
        return (<>
            <Header />
            <section>
                <div className="col-md-6 offset-3">
                <h1 className="h1 text-center my-3">Timer</h1>
                {/* <button onClick={() => this.showWatch()}>click</button> */}
                {this.state.switch && <div className="clock">
                    <div className="bg">
                        <h2>{this.checkTime((this.state.time.getHours() % 12))}</h2>
                    </div>
                    <h2>:</h2>
                    <div className="bg">
                        <h2>{this.checkTime(this.state.time.getMinutes())}</h2>
                    </div>
                    <h2>:</h2>
                    <div className="bg">
                        <h2>{this.checkTime(this.state.time.getSeconds())}</h2>
                    </div>
                    <h2></h2>
                    <div className="bg">
                        <h2>{(this.state.time.getHours()>= 12) ? 'PM' : 'AM'}</h2>
                    </div>
                </div>}
                </div>
            </section>
        </>            
        );
    }
}
export default Timer;