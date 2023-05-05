import{ trigger, style, state, animate, transition, query, group } from '@angular/animations';

export function iconAnim(){
return trigger('iconAnim',[
    transition(':enter',[
        style({
            opacity: 0,
            transform:'translateX(-50vw)'
        }),
        animate(200,style({
            opacity: 1,
            transform:'translateX(0)'
        }))
    ]),
    transition(':leave',[
        style({
            position:'absolute',
            opacity:1,
            transform:'translateX(0)'
        }),
        animate(200,style({
            opacity: 0,
            transform:'translateX(-50vw)'
        }))
    ])
])
}