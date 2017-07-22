import { Component }          from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  
  <header role="banner">
  
			<nav class="navbar">
			<div class="container">
  <a href="#" class="sitename">Game of thrones</a>
  				<ul class="nav">
    					<li><a routerLink="/dashboard" routerLinkActive="active">Dashboard</a></li>
    					<li><a routerLink="/heroes" routerLinkActive="active">Celebrities</a></li>
    					
    				
  				</ul>
			</div>
      </nav>
      
    <router-outlet></router-outlet>
    
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Games of Thrones';
}
