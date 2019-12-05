import React, {Component} from 'react';
import './App.css';
import Modal from './Components/Modal/Modal';
import Frame1 from '../src/images/1.jpg';
import Frame2 from '../src/images/2.jpg';
import Frame3 from '../src/images/3.jpg';
import Frame4 from '../src/images/4a.jpg';
import Frame5 from '../src/images/5a.jpg';
import Frame6 from '../src/images/6a.jpg';
import Frame7 from '../src/images/7a.jpg';
import Frame8 from '../src/images/8a.jpg';
import Frame9 from '../src/images/9.jpg';
import Frame10 from '../src/images/10a.jpg';
import Frame11 from '../src/images/11a.jpg';
import Frame12 from '../src/images/12a.jpg';
import Frame13 from '../src/images/13a.jpg';
import Frame14 from '../src/images/3.jpg';
import Frame15 from '../src/images/15.jpg';
import Frame16 from '../src/images/2.jpg';
import Frame17 from '../src/images/1.jpg';

class App extends Component {
  state = {
    show:false,

    projects:[
      {id: 'one', name: 'Project One', description: 'This is my first project'},
      {id: 'two', name: 'Project Two', description: 'This is my second project'},
      {id: 'three', name: 'Project Three', description: 'This is my third project'}
    ]

  };
  showModal = ()=>{
    this.setState({
      // show:true
      show:!this.state.show
    });
  };

  render(){ 

    const items = this.state.projects.map(
      
      (data) => 
        <div className = 'Projects'>
        <h2>{data.name}</h2>
        <p>{data.description}</p>
        </div>
        
        
      
    
    );

    return (
      
      
    <div className="frame1">
      <img src={Frame1} alt=''/>
    </div>
    
    <div className="frame1">
    <img src={Frame1} alt=''/>
  </div>
  );

  
}}
 

export default App;