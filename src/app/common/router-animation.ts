import {
    animate,
    query,
    style,
    transition,
    trigger,
    group,
} from '@angular/animations';

const left = [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
        query(':enter', [style({ transform: 'translateX(-100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
            optional: true,
        }),
        query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(100%)' }))], {
            optional: true,
        }),
    ]),
];

const right = [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
        query(':enter', [style({ transform: 'translateX(100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
            optional: true,
        }),
        query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(-100%)' }))], {
            optional: true,
        }),
    ]),
];


export let routerAnimate = trigger('routerAnimate', [
    transition(':increment', right),
    transition(':decrement', left),
]);

/*export let routerAnimation = trigger('animRoutes', [
    transition(':increment', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
        group([
            query(':enter', [style({ transform: 'translateX(100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
                optional: true,
            }),
            query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(-100%)' }))], {
                optional: true,
            }),
        ]),
    ]),
    transition(':decrement', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
        group([
            query(':enter', [style({ transform: 'translateX(-100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
                optional: true,
            }),
            query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(100%)' }))], {
                optional: true,
            }),
        ]),
    ]),
  ]);*/