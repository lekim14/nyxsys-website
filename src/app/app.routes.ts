import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: '', 
        title: 'Digital Out of Home Advertising Philippines | NYXSYS PH',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) 
    },
    {
        path: 'about',
        title: 'Who We Are • NYXSYS Philippines, Inc.',
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
        path: 'blog',
        title: 'DOOH Insights, Trends & Strategies | NYXSYS Philippines, Inc.',
        children: [
            { path: '', loadComponent: () => import('./pages/blog/blog.component').then(m => m.BlogComponent) },
            { path: ':slug', loadComponent: () => import('./components/blog-details/blog-details.component').then(m => m.BlogDetailsComponent) },
        ]
    },
    {
        path: 'testimonials',
        title: 'Customer Testimonials & Success Stories | NYXSYS Philippines, Inc.',
        loadComponent: () => import('./pages/testimonials/testimonials.component').then(m => m.TestimonialsComponent)
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
