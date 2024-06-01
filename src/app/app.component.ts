import { AfterViewInit, Component, afterRender, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from "./shared/ui/layout/layout.component";
import { AppDataService } from './shared/services/auth/app-data.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, LayoutComponent]
})
export class AppComponent {
    appData = inject(AppDataService);

    constructor() {
        afterRender(() => {
            this.appData.initializeUser();
        });
    }
}
