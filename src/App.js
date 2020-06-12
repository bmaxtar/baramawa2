import React, { Component } from 'react';
import './App.scss';
import Automobile from './components/Automobile/Automobile';
import Trip from './components/Trip/Trip';
import Magazine from './components/Magazine/Magazine';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import logo from './static/images/logo.png';
import trip from './static/images/trip.png';
import mag from './static/images/mag.png';
import birawama3d from './static/images/BIRAMAWA3D2.png'
import facebook from './static/images/facebook.png';
import twiter from './static/images/twiter.png';
import linkedin from './static/images/linkedin.png';
import whatsapp from './static/images/whatsapp.png';
import home from './static/images/home.png';
import sn from './static/images/sn.png';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import MagazineMobile from './components/MagazineMobile/MagazineMobile';
import $ from 'jquery';



class App extends Component {

  constructor(){
    super();
    this.state={
      w:0,
      idimgslide:1,
      imgSlide:[{url:"BIRAMAWA3D2.png",text:"BIRAWAMA"},{url:"home-bmw-serie-2.png",text:"BIRAWAMA CAR"},{url:"trip.png",text:"BIRAWAMA VOYAGE"},{url:"mag.png",text:"BIRAWAMA MAGAZINE"}]
    }

   /* setInterval(()=>{

      this.bare();
    },1000);
    this.hauteurPage();*/

  }

  slide(){
   // setTimeout(()=>{
    console.log(this.state.imgSlide.length);
    let nv=this.state.idimgslide===3?0:this.state.idimgslide+1;
      this.setState({idimgslide:nv});
     if(this.state.idimgslide<this.state.imgSlide.length){
        document.getElementById("menu").style.backgroundImage="url("+"http://127.0.0.1/birawamafront/src/static/images/"+this.state.imgSlide[this.state.idimgslide].url+")";
        //this.setState({idimgslide:this.state.idimgslide+1});
      }else{
        this.setState({idimgslide:0});
        document.getElementById("menu").style.backgroundImage="url("+"http://127.0.0.1/birawamafront/src/static/images/"+this.state.imgSlide[this.state.idimgslide].url+")";
       // this.setState({idimgslide:this.state.idimgslide+1});
      }
      // document.getElementById("menu").setAttribute("src",'./static/images/mag.png');
    //},5000);

  }
  bare(){

    if(this.state.w<100){
        document.getElementById("bare").style.width=""+this.state.w+"%";
        document.getElementById("bare").style.backgroundColor="#FFD030";
        //console.log(w);
        //this.slide();
        let W=this.state.w+5;
        this.setState({w:W});
    }else{
      this.setState({w:0});
      //this.setState({idimgslide:0});
      /*if(this.state.idimgslide===4){
        this.setState({idimgslide:0});
      }*/
      this.slide();
      let W=this.state.w+5;
      this.setState({w:W});
      //this.setState({idimgslide:this.state.idimgslide+1});
    }
   // w=10;
  }
  hauteurPage(){
    $(document).ready(()=>{
      let h1=window.outerHeight+50;
   // console.log(h);
  //  console.log(h1);
  //
    document.getElementById("menu").style.height=h1+"px";
    document.getElementById("menu1").style.height=h1+"px";
    let hm=$("#m").innerHeight()+50;
    console.log(hm);
    document.getElementById("triangle").style.position="fixed";
    document.getElementById("triangle").style.top=hm+"px";
    });

  }
  old(){
    return(
    <div id="menu">
          <div id="menu1">
            <div id="m">
                <div id="logo">
                  <img src={logo} alt="logo" />
                </div>
                <ul id="ul" >
                  <li className={this.state.idimgslide===0?"li":""}><span><img style={{marginRight:"0.4em"}} src={home} alt="home" />BIRAWAMA</span><img  src={sn} alt="home" /></li>
                  <li className={this.state.idimgslide===1?"li":""}><Link onClick={()=>this.clearInterval()} to="/car" style={{color:"#72405A"}}><span>BIRAWAMA CAR</span></Link></li>
                  <li className={this.state.idimgslide===2?"li":""}><Link onClick={()=>this.clearInterval()} to="/trip"><span>BIRAWAMA TRIP</span></Link></li>
                  <li className={this.state.idimgslide===3?"li":""}>BIRAWAMA MAGAZINE</li>
                </ul>
            </div>
            <div id="triangle"></div>
            <div className="slid">
              <h3 id="text" style={{marginTop:"47%"}}>{this.state.imgSlide[this.state.idimgslide].text}</h3>
            </div>
            <div style={{marginTop:"10%"}} id="flech">
              <div style={{height:"0.2em",width:"100%",backgroundColor:"rgba(255, 208, 48,0.6)",marginBottom:"0.2em"}}></div>
              <div style={{height:"0.2em",width:"100%",backgroundColor:"rgba(255, 208, 48,0.6)",marginBottom:"0.2em"}}></div>
              <div style={{height:"0.1em",width:"100%",backgroundColor:"rgba(255, 208, 48,0.6)",marginBottom:"0.2em"}}></div>
              <div id="triangle2"></div>

            </div>
          </div>
          <div className="bar">
              <div id="bare" className="percentage has-tip"  style={{width: "10%"}} data-perc="50%">

              </div>
          </div>
          <div id="socialMediaTop">
              <div><img src={facebook} alt="facebook" /></div>
              <div><img src={twiter} alt="twiter" /></div>
              <div><img src={linkedin} alt="linkedin" /></div>
              <div><img src={whatsapp} alt="whatsapp" /></div>
          </div>

        </div>
    )
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/magazine" component={Magazine} />
            <Route exact path="/trip" component={Trip} />
            <Route exact path="/car" component={Automobile} />MagazineMobile
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/magazineMobile" component={MagazineMobile} />
          </Switch>
        </Router>
      </div>
     );
  }
}

export default App;
