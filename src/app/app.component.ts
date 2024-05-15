import { Component } from '@angular/core';
import { FooterComponent } from './commons/footer/footer.component';
import { HeaderComponent } from './commons/header/header.component';
import { UltimoComponent } from './commons/ultimo/ultimo.component';
import { BanerComponent } from './commons/baner/baner.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sis414angular';
}
