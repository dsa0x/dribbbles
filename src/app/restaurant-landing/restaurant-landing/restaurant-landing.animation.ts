import {
  animate,
  group,
  query,
  stagger,
  style,
  transition,
  trigger,
  state,
  keyframes,
} from '@angular/animations';

export const SCALE_ANIMATION = trigger('scaleAnimation', [
  state(
    'inactive',
    style({
      bottom: '0px',
    })
  ),
  state(
    'active',
    style({
      bottom: '200px',
    })
  ),
  transition('void <=> *', [
    style({ transform: 'translateY(100px)', opacity: '.1' }),
    animate(1000),
  ]),
]);
export const DOWN_ANIMATION = trigger('downAnimation', [
  state(
    'open',
    style({
      height: '200px',
      opacity: 1,
      backgroundColor: 'yellow',
    })
  ),
  state(
    'closed',
    style({
      height: '100px',
      opacity: 0.5,
      backgroundColor: 'green',
    })
  ),
  transition('void <=> *', [
    animate(
      '2s',
      keyframes([
        style({ position: 'absolute' }),
        style({ position: 'relative' }),
        //  style({ opacity: 1, offset: 0.5 }),
        //  style({ opacity: 0.2, offset: 0.7 }),
      ])
    ),
  ]),
]);

export const DROPDOWN_ANIMATION = trigger('scaleAnimation', [
  state(
    ':enter',
    style({
      bottom: '0px',
    })
  ),
  state(
    ':leave',
    style({
      bottom: '200px',
    })
  ),
  transition(':enter <=> :leave', [style({ opacity: '.9' }), animate(1000)]),
]);
