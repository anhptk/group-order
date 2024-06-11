import { Routes } from '@angular/router';
import { OrdersDashboardComponent } from './features/orders/orders-dashboard/orders-dashboard.component';

export const routes: Routes = [
    {
        path: 'orders',
        component: OrdersDashboardComponent
    },
    {
        path: 'group-orders',
        loadComponent: () => import('./features/group-orders/group-orders-dashboard/group-orders-dashboard.component').then(m => m.GroupOrdersDashboardComponent),
    },
    {
        path: 'my-profile',
        loadComponent: () => import('./features/profiles/member-profile/member-profile.component').then(m => m.MemberProfileComponent),
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
