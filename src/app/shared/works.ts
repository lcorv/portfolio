import { Work } from "./work";

export const WORKS:Work[]=[
    {
        name: 'Note',
        description: {
            it:`Un'app per le note. <br> Per provarla: <br> username: test@test.it<br>password: password4321`,
            en:`A note app. <br>To try it:<br>username: test@test.it<br>password: password4321`,
        },
        link: 'https://lcorv.github.io/notes',
        img: ['assets/images/notes.svg','assets/images/notes.png','assets/images/notes2.png'],
        anim: 'left',
        tools:['Angular','Typescript','Firebase','Material'],
        github:'https://github.com/lcorv/notes'
    },
    {
        name: 'tuner',
        description: {
            it:'Un accordatore per chitarra.',
            en:'A guitar tuner.'
        },
        link: 'https://lcorv.github.io/tuner',
        img: ['assets/images/tuner.svg','assets/images/tuner1.png','assets/images/tuner2.png'],
        anim: 'bottom',
        tools:['Angular','Typescript'],
        github:'https://github.com/lcorv/tuner'
    },
    {
        name: 'meteo',
        description: {
            it:'Un\'app meteo realizzata con l\'utilizzo dell\'API di openWeather',
            en:'A meteo app made using openWeather'
        },
        link: 'https://lcorv.github.io/meteo',
        img: ['assets/images/meteo.png','assets/images/meteo1.png','assets/images/meteo2.png'],
        anim: 'bottom',
        tools:['Angular','Typescript','Material'],
        github:'https://github.com/lcorv/meteo'
    }
]