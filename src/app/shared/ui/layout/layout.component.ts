import { Component } from '@angular/core';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
    imports: [FooterComponent, HeaderComponent, RouterModule]
})
export class LayoutComponent {

}
