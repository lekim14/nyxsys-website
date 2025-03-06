import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
    {
        path: 'about',
        data: {
            title: 'Who We Are • NYXSYS Philippines, Inc.',
        },
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'team',
        title: 'Meet Our Team • NYXSYS Philippines, Inc.',
        loadComponent: () => import('./pages/team/team.component').then(m => m.TeamComponent)
    },
    {
        path: 'services',
        title: 'Our Services • NYXSYS Philippines, Inc.',
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent)
            },
            {
                path: 'led-media-inventories',
                title: 'LED Media Inventories • NYXSYS Philippines, Inc.',
                loadComponent: () => import('./pages/led/led.component').then(m => m.LedComponent)
            },
            {
                path: 'static-fixed-inventories',
                title: 'Static Fixed Inventories • NYXSYS Philippines, Inc.',
                loadComponent: () => import('./pages/static/static.component').then(m => m.StaticComponent)
            },
            {
                path: 'digital-display-management-services',
                title: 'Digital Display Management Services • NYXSYS Philippines, Inc.',
                loadComponent: () => import('./pages/business-solutions/business-solutions.component').then(m => m.BusinessSolutionsComponent)
            },
            {
                path: 'audience-measurement',
                title: 'Audience Measurement Enabled by Calton Datx • NYXSYS Philippines, Inc.',
                loadComponent: () => import('./pages/audience-measurement/audience-measurement.component').then(m => m.AudienceMeasurementComponent)
            },
        ]
    },
    {
        path: 'contact',
        title: 'Get in Touch • NYXSYS Philippines, Inc.',
        loadComponent: () => import('./pages/contacts/contacts.component').then(m => m.ContactsComponent)
    },
    {
        path: '**',
        loadComponent: () => import('./pages/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)
    },
];
