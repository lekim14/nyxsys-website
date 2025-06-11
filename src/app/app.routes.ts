import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: '', 
        title: 'NYXSYS Philippines Inc. | Official Site | DOOH Advertising',
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
                children: [
                    {
                        path: '',
                        loadComponent: () => import('./pages/led/led.component').then(m => m.LedComponent),
                    },
                    {
                        path: 'iconic-edsa-orense-led',
                        title: 'Advertise on EDSA ORENSE Northbound Static Billboard in Makati',
                        loadComponent: () => import('./pages/led/locations/locations.component').then(m => m.LocationsComponent)
                    },
                    {
                        path: 'edsa-paragon-led',
                        title: 'Advertise on EDSA PARAGON LED Billboard | Pioneer LED Billboard in Mandaluyong City',
                        loadComponent: () => import('./pages/led/locations/locations.component').then(m => m.LocationsComponent)
                    },
                    {
                        path: 'c5-market-market-led',
                        title: 'Advertise on C5 MARKET! MARKET! LED Billboard | Free Standing LED Billboard in Mckinley',
                        loadComponent: () => import('./pages/led/locations/locations.component').then(m => m.LocationsComponent)
                    }
                ]
            },
            {
                path: 'static-fixed-inventories',
                title: 'Static Fixed Inventories • NYXSYS Philippines, Inc.',
                children: [
                    {
                        path: '',
                        loadComponent: () => import('./pages/static/static.component').then(m => m.StaticComponent)
                    },
                    {
                        path: 'edsa-northbound-static-billboard',
                        title: 'Advertise on EDSA ORENSE Northbound Static Billboard in Makati',
                        loadComponent: () => import('./pages/led/locations/locations.component').then(m => m.LocationsComponent)
                    },
                    {
                        path: 'edsa-marcaleon-northbound-static-billboard',
                        title: 'Advertise on EDSA MARCALEON (DOUBLE-FACED, NORTHBOUND) Static Billboard in Mandaluyong',
                        loadComponent: () => import('./pages/led/locations/locations.component').then(m => m.LocationsComponent)
                    },
                    {
                        path: 'edsa-marcaleon-southbound-static-billboard',
                        title: 'Advertise on EDSA MARCALEON (DOUBLE-FACED, SOUTHBOUND) Static Billboard in Mandaluyong',
                        loadComponent: () => import('./pages/led/locations/locations.component').then(m => m.LocationsComponent)
                    },
                    {
                        path: 'edsa-orense-parallel-northbound-static-billboard',
                        title: 'Advertise on EDSA ORENSE Parallel Northbound Static Billboard – Nyxsys Philippines',
                        loadComponent: () => import('./pages/led/locations/locations.component').then(m => m.LocationsComponent)
                    }
                ],
                
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
    // {
    //     path: 'blog',
    //     title: 'DOOH Insights, Trends & Strategies | NYXSYS Philippines, Inc.',
    //     children: [
    //         { path: '', loadComponent: () => import('./pages/blog/blog.component').then(m => m.BlogComponent) },
    //         { path: ':slug', loadComponent: () => import('./components/blog-details/blog-details.component').then(m => m.BlogDetailsComponent) },
    //     ]
    // },
    {
        path: 'testimonials',
        title: 'Customer Testimonials & Success Stories | NYXSYS Philippines, Inc.',
        loadComponent: () => import('./pages/testimonials/testimonials.component').then(m => m.TestimonialsComponent)
    },
    {
        path: "**", redirectTo: 'https://www.nyxsys.ph/404.shtml'
    }
];
