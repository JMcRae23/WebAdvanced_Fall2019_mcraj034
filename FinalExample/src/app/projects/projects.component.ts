import { Component, OnInit } from '@angular/core';
import {projects} from '../projects';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  data = projects;

  constructor() { }

  ngOnInit() {
  }


  showDialog1(){
    let closeModal  = document.getElementById('P1Modal')
   closeModal.classList.remove('hhidden')
   closeModal.classList.add('sshow');
  }

  showDialog2(){
    let closeModal  = document.getElementById('P2Modal')
   closeModal.classList.remove('hhidden')
   closeModal.classList.add('sshow');
  }

  

  
  
}

