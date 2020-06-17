import React, {Component} from 'react';


// const Header = () =>{
//     return <div>Header Component sssssssssssssssss</div>
// }

class Header1 extends Component{

    constructor(props){
        super(props);

        this.state={
            title:'The keywords are',
            keywords:''
        }
    }

    inputChange(event){
        console.log(event.target.value);
        this.setState({keywords:event.target.value});
        this.props.newsSearch(event.target.value)

        // console.log('H11');
    }
   
    render(){

        // const style ={
        //     header:{
        //         backgroundColor:'#265E95'
        //     },
        //     logo:{
        //         color:'#fff',
        //         fontSize:'30px',
        //         textAlign:'center'
        //     }
        // }

        return(
            <header>
                <div className="logo" onClick={()=>{console.log('Logo is clicked!!')}}>
                    LOGO
                </div>
                <input onChange={this.inputChange.bind(this)}/>
                <h3>
                    {this.state.title}
                </h3>
                <h3>
                    {this.state.keywords}
                </h3>
            </header>
        )
    }

}


export default Header1;