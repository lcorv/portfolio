import { trigger, style, state, animate, transition, query, group } from '@angular/animations';

export function enterFromBottom(delay) {
    return trigger("enterBottom", [
        transition(":enter", [
            style({
                opacity: 0,
                transform: 'translateY(100%)'
            }),
            animate(`500ms ${delay}ms`, style({
                opacity: 1,
                transform: 'translateY(0)'
            }))
        ]),
        transition(":leave", [
            style({
                opacity: 1,
                transform: 'translateY(0%)',
            }),
            animate('500ms 0ms', style({
                opacity: 0,
                transform: 'translateY(100%)'
            }))
        ])
    ])
}
export function enterFromLeft() {
    return trigger("enterLeft", [
        transition(":enter", [
            style({
                opacity: 0,
                transform: 'translateX(-100%)'
            }),
            animate('500ms 1000ms', style({
                opacity: 1,
                transform: 'translateX(0%)',
            }))
        ]),
        transition(":leave", [
            style({
                opacity: 1,
                transform: 'translateX(0%)'
            }),
            animate('500ms 0ms', style({
                opacity: 0,
                transform: 'translateX(-100%)',
            }))
        ])
    ])
}