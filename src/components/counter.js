import React,{Component} from 'react';
import './counter.css';


class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            val:0,
            auto:false,
            color: 'rgb(184, 177, 177)',
            intervalId:null,
            flight:'Auto'
        }
    }
    changeColor=()=>{
        let colors = ['rgb(167, 21, 21)','rgb(75, 201, 240)','rgb(33, 226, 33)','rgb(184, 177, 177)'];
        let index;
        do{
            index = Math.floor(Math.random()*(colors.length-0+1));
        }while(colors[index]===this.state.color);
        
        this.setState({color:colors[index]})
    }
    increment = ()=>{
        
        if(this.state.auto===false){
            
            clearInterval(this.state.intervalId);
            
        }

        this.setState({val:this.state.val+1});
        if(this.state.val>0 && this.state.val%10===0)
                this.changeColor();
        

    }



    render(){
        return(
            <div className="Counter">
                <h1>Counter</h1>
                <p  style={{color:this.state.color}}>{this.state.val}</p>
                <button onClick={()=>{
                    this.increment();
                    
                }}>Click me!</button>
                <button onClick={()=>this.setState({val:this.val=0})}>Reset</button>
                <button onClick={async ()=>
                    {
                    await this.setState({auto:!this.state.auto,flight:this.state.flight==='Auto'?'Stop':'Auto'});
                    
                    if(this.state.auto===true)
                        this.setState({intervalId:setInterval(this.increment,1000)});
                    }}>{this.state.flight} flight</button>
            </div>
        )
    }



}

export default Counter;