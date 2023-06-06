import { trigger, style, state, animate, transition, query, group } from '@angular/animations';

export function enterFromLeft(delay) {
    return trigger("enterLeft", [
        transition(":enter", [
            style({
                opacity: 0,
                transform: 'translateX(-10px)'
            }),
            animate(`500ms ${delay}ms`, style({
                opacity: 1,
                transform: 'translateX(0px)',
            }))
        ]),
        transition(":leave", [
            style({
                opacity: 1,
                transform: 'translateX(0%)'
            }),
            animate('500ms 0ms', style({
                opacity: 0,
                transform: 'translateX(-10px)',
            }))
        ])
    ])
}
export function enterFromRight(delay) {
    return trigger("enterRight", [
        transition(":enter", [
            style({
                opacity: 0,
                transform: 'translateX(10px)'
            }),
            animate(`500ms ${delay}ms`, style({
                opacity: 1,
                transform: 'translateX(0px)',
            }))
        ]),
        transition(":leave", [
            style({
                opacity: 1,
                transform: 'translateX(0%)'
            }),
            animate('500ms 0ms', style({
                opacity: 0,
                transform: 'translateX(10px)',
            }))
        ])
    ])
}
export function enterFromBottom(delay) {
    return trigger("enterBottom", [
        transition(":enter", [
            style({
                opacity: 0,
                transform: 'translateY(10px)'
            }),
            animate(`500ms ${delay}ms`, style({
                opacity: 1,
                transform: 'translateY(0px)',
            }))
        ]),
        transition(":leave", [
            style({
                opacity: 1,
                transform: 'translateY(0px)'
            }),
            animate('500ms 0ms', style({
                opacity: 0,
                transform: 'translateY(10px)',
            }))
        ])
    ])
}
export function enterFromTop(delay) {
    return trigger("enterTop", [
        transition(":enter", [
            style({
                opacity: 0,
                transform: 'translateY(-10px)'
            }),
            animate(`500ms ${delay}ms`, style({
                opacity: 1,
                transform: 'translateY(0px)',
            }))
        ]),
        transition(":leave", [
            style({
                opacity: 1,
                transform: 'translateY(0px)'
            }),
            animate('500ms 0ms', style({
                opacity: 0,
                transform: 'translateY(-10px)',
            }))
        ])
    ])
}