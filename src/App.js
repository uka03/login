import {data } from "./util/data"
import "./App.css";
import Mainpage from "./component/Mainpage";
import Profile from "./component/Profile";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [index , setIndex] =useState()
  function check(username, password){
    console.log(username,password)
    data.map((user,i)=>{
      console.log(user)
      if(user.name===username){

        if(user.password === password ){
          setIsLogin(true)
          setIndex(i)
        }
      }

    })
   
  }

  return (
    <div className="App">
      {isLogin ? <Profile logout={setIsLogin} data={data} index={index}/> : <Mainpage check={check}/>}
    </div>
  );
}

export default App;
