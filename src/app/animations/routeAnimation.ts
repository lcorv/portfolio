import{ trigger, style, state, animate, transition, query, group } from '@angular/animations';
var translateType = 'translateY'
var translate = 100;
export function routeAnim(){
    return trigger('routeAnim',[
        transition(':increment',[
            query(':enter , :leave',[
                style({
                    overflow:'visible',
                    width:'100%'
                })
            ]),
            group([
                query(':enter',[
                    style({
                        transform: `${translateType}(${translate}%)`,
                        opacity:0,
                    }),
                    animate(500,
                        style({
                            transform:`${translateType}(${0}%)`,
                            opacity:1
                    })
                    )
                ],{ optional: true }
                ),
                query(':leave',[
                    style({
                        position:'absolute',
                        transform: `${translateType}(${0}%)`,
                        opacity:0.5,
                        maxWidth:'calc(100% + 10px)',
                        minWidth:'calc(100% + 10px)',
                        width:'calc(100% + 10px)'

                    }),
                    animate(500,
                        style({
                            transform:`${translateType}(${-translate}%)`,
                            opacity:0
                    })
                    )
                ],{ optional: true })
            ])
        ]),
        transition(':decrement',[
            query(':enter , :leave',[
                style({
                    overflow:'visible',
                    width:'100%'
                })
            ]),
            group([
                query(':enter',[
                    style({
                        transform: `${translateType}(${-translate}%)`,
                        opacity:0,
                    }),
                    animate(500,
                        style({
                            transform:`${translateType}(${0}%)`,
                            opacity:1
                    })
                    )
                ],{ optional: true }
                ),
                query(':leave',[
                    style({
                        position:'absolute',
                        transform: `${translateType}(${0}%)`,
                        opacity:0.5,
                        maxWidth:'calc(100% + 10px)',
                        minWidth:'calc(100% + 10px)',
                        width:'calc(100% + 10px)'
                    }),
                    animate(500,
                        style({
                            transform:`${translateType}(${translate}%)`,
                            opacity:0
                    })
                    )
                ],{ optional: true })
            ])
        ]),
    ])
}