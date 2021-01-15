import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('WelcomePage <=> PostsListPage', [
      style({ position: 'absolute' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('500ms ease', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('500ms ease', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> PostViewPage', [
      style({ position: 'absolute' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('400ms ease', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('500ms ease', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);
