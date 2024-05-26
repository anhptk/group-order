import { AfterContentInit, Component, afterRender, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from "./shared/ui/layout/layout.component";
import { AppDataService } from './shared/services/auth/app-data.service';
import { AuthenticationService } from './shared/services/auth/authentication.service';
import { SecurityService } from './shared/services/api/sercurity.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, LayoutComponent]
})
export class AppComponent implements AfterContentInit {
    appData = inject(AppDataService);

    ngAfterContentInit(): void {
        this.appData.initializeUser();
    }
}
