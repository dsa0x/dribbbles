import {
  animate,
  group,
  query,
  stagger,
  style,
  transition,
  trigger,
  state,
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
  // transition('inactive => active', animate('100ms ease-in')),
  // transition('active => inactive', animate('100ms ease-in')),
  transition('void <=> *', [
    style({ transform: 'translateY(100px)', opacity: '.1' }),
    animate(1000),
    // animate both the newly entered and removed items on the page
    // at the same time
  ]),
]);
