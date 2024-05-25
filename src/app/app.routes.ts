import { Routes } from '@angular/router';
import { OrdersDashboardComponent } from './features/orders/orders-dashboard/orders-dashboard.component';

export const routes: Routes = [
    {
        path: 'orders',
        component: OrdersDashboardComponent
    },
    {
        path: '',
        redirectTo: 'orders',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '',
    }
];
