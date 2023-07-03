import React from 'react';
import './gallery.css'
import Logo from './image/dexs.png';

import GalleryImg1 from './image/tatto1.jpg';
import GalleryImg2 from './image/tatto2.jpg';
import GalleryImg3 from './image/tatto3.jpg';
import GalleryImg4 from './image/tatto4.jpg';
import GalleryImg5 from './image/tatto5.jpg';
import GalleryImg6 from './image/tatto6.jpg';
import kc from './image/pen.svg';
import me from './image/key.svg';
import her from './image/shoe.svg';

import QuoteImg from './image/Quote.png'
import rege from './assets/rege.mp4'

export const headerData = {
    logo: Logo
};
export const nothing = {
    image:[
       kc,
       me,
       her
    ]
}
export const hi = [
    {rege}
]

export const navData = {
    items: [
        {href: '/', name: 'Home'},
        {href: '/', name: 'About'},
        {href: '/', name: 'Projects'},
        
        {href: '/', name: 'Skills'},
        {href: '/', name: 'Contact'},
    ],
};

export const socialData = [
    {href: '/', icon: <i className="fa-brands fa-facebook"></i>},

    {href: '/', icon: <i className="fa-brands fa-twitter"></i>},

    {href: '/', icon: <i className="fa-brands fa-youtube"></i>},

    {href: '/', icon: <i className="fa-brands fa-instagram"></i>},

    {href: '/', icon: <i className="fa-brands fa-facebook"></i>},
];

export const heroData = {
    title: 'Im void sir.',
    subtitle:
    'tattoos hava their own unique power and magic they not only beautify the body but also the psysche',
    btnText: 'read more',
    btnIcon: <i className="fa-solid fa-arrow-right-long"></i>,
};

export const aboutData = {
    title: 'my story',
    subtitle1: 
    'in velt arc posurer interger dolo sit amet consedfti nun adisping elit suid portiffur massa tellus hacvel ante sit sed screpling present duient vulent loreapist',
    subtitle2: 
    'kdjdf kidhgd kdidddfjd dkfid idi dkxiiid didfu djfkd dkdkfie ldodfidf idjifd dfkdddjfd dijf dfiddddididi dfldk didfkdfdfjid dfdif dddfsif pfkd dfipd fdfdi difpadf dfiapieui dfiapif didis ifuiap dipaidfid difpa dipai dieui wipaie diadufid difdi adifudi ifdiao dfiodsa  difudif aidfif diapoidf diapdifi',
    btnText: 'know more',
    btnIcon: <i className="fa-solid fa-arrow-right-long"></i>
};

export const galleryData = {
    title: 'check my gallery:',
    btnText: 'view all',
    btnIcon: <i className="fa-solid fa-arrow-right-long"></i>,
    images: [
        {
            src: GalleryImg1,
            original: GalleryImg1,
            width: 465,
            height: 412
        },

        {
            src: GalleryImg2,
            original: GalleryImg2,
            width: 465,
            height: 540
        },

        {
            src: GalleryImg3,
            original: GalleryImg3,
            width: 465,
            height: 412
        },

        {
            src: GalleryImg4,
            original: GalleryImg4,
            width: 465,
            height: 540
        },

        {
            src: GalleryImg5,
            original: GalleryImg5,
            width: 465,
            height: 540
        },
        {
            src: GalleryImg6,
            original: GalleryImg6,
            width: 464,
            height: 412
        },

     
    ]

}


export const interviewData = {
    title: 
    '"consider what you desire your tatto artist will never tell you what tatto to have"',
    btnText: 'watch it now',
    btnIcon: <i className="fa-solid fa-play"></i>
}

export const testimonialDatat = [
    {
        QuoteImg: QuoteImg,
        mesaage: 
        'djjjjjj kkkkkkkkk d did dsajfid adifs ufdus dsfdsuifia iafA DIAFUIDF DFIA AIA FIAFA IFA iafu aifuia fifaoifa f wiaoife eioak aiaoi aioaife feifao ',
        name: 'sixtus',
        occupation: 'tatto artest',


    },

    {
        QuoteImg: QuoteImg,
        mesaage: 
        'djjjjjj kkkkkkkkk d did dsajfid adifs ufdus dsfdsuifia iafA DIAFUIDF DFIA AIA FIAFA IFA iafu aifuia fifaoifa f wiaoife eioak aiaoi aioaife feifao ',
        name: 'sixtus',
        occupation: 'tatto artest',
    },
]

export const contactData = {
    title: 'Get in touch with me:',
    info: [
        {
            title: 'LA office',
            subtitle: 'ksjks isjifs sidfjid fkdsjkdj fdsfjsdkfj dfjsdkfj dskjkd dskgjdskf dkjsd sdkfjs fksdjfksf kdsjfds fjdsh',
            address: {
                icon: <i className="fa-solid fa-location-dot"></i>,
                name: '765 Norman Street Los angels'
            },
            phone: {
                icon:<i className="fa-solid fa-phone"></i>,
                number: '+123 9018944777',
            },

            email: {
                icon: <i class="fa-solid fa-envelope"></i>,
                address: 'contact@yourcompany.com',
            },
            link: 'get location'
        },

        {
            title: 'NYC office',
            subtitle: 
            'dsi dsof lsdlojsf okjkj hjhjk hh hghg uiiiuiuiu iuiyiyiyii ioi i iuiyuyuiui iidu aufidaufiuaidfuia dfuuisufas ',

            address: {
                icon:<i className="fa-solid fa-location-dot"></i>,
                name: '1630 Elm Drive New York,City'
            },

            phone: {
                icon: <i className="fa-solid fa-phone"></i>,
                number: '+123 9018944777'
            },

            email: {
                icon: <i className="fa-solid fa-envelope"></i>,
                address: 'contact@yourcompany.com',
            },
            link: 'get location'
        },
    ],

    form: {
        name: 'Write your name here',
        email: 'Write your email address',
        message: 'Write your messages here',
        btnText: 'send it'
    },
};