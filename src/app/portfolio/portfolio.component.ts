import { Component, OnInit } from '@angular/core';
import { Project, education, projects } from './projects';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  education: Project[];
  projects: Project[];

  constructor() { 
	this.education = education;
	this.projects = projects;
  }

  ngOnInit(): void {
  }

}
