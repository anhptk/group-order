import { Routes } from '@angular/router';
import { OrdersDashboardComponent } from './features/orders/orders-dashboard/orders-dashboard.component';
import { GroupOrdersDashboardComponent } from './features/group-orders/group-orders-dashboard/group-orders-dashboard.component';

export const routes: Routes = [
    {
        path: 'orders',
        component: OrdersDashboardComponent
    },
    {
        path: 'group-orders',
        component: GroupOrdersDashboardComponent
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
