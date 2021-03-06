import React, { Component } from 'react'
import {connect} from 'react-redux'
import {add,remove,removeAsync} from './static/redux/redux'
import Abc from "./Abc";
// const mapStateToProps=(state)=>{
//   return {
//     xyz:state
//   }
// }

// const mapDispatchToProps={add,remove,removeAsync}

// App = connect(mapStateToProps,mapDispatchToProps)(App);

@connect(state=>({xyz:state}),{add,remove,removeAsync})

class App extends Component {
  render() {
    //const {add,remove,removeAsync,dispatch} = this.props;
    return (
      <div className="App">
        <Abc/>
        <p>{this.props.xyz}</p>
        <button
          onClick = {()=>{
            this.props.add()
          }}
        >
          增加炮兵
        </button>
        <button
          onClick={()=>{
            this.props.remove()
          }}
        >
          减少炮兵
        </button>
        <button
          onClick = {()=>{
            this.props.removeAsync()
          }}
        >
          减少炮兵异步
        </button>
      </div>
    );
  }
}


export default App;
