import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiFirebase } from 'react-icons/si';
import { FaBootstrap } from 'react-icons/fa';
import { BiHomeAlt, BiBook } from 'react-icons/bi';
import {TbFileCertificate} from 'react-icons/tb'



const infoDataLeft = [
    {
        name: 'Html',
        icon: <AiFillHtml5 className='icon html'/>,
        link: 'https://lenguajehtml.com/html/'
    },
    {
        name: 'Css',
        icon: <DiCss3 className='icon css'/>,
        link: 'https://lenguajecss.com/css/'
    },
    {
        name: 'JavaScript',
        icon: <SiJavascript className='icon js'/>,
        link: 'https://lenguajejs.com/javascript/'
    }
]

const infoDataRigth = [
    {
        name: 'ReactJs',
        icon: <FaReact className='icon react'/>,
        link: 'https://es.reactjs.org/'
    },
    {
        name: 'Firebase',
        icon: <SiFirebase className='icon firebase'/>,
        link: 'https://firebase.google.com/docs'
    },
    {
        name: 'Bootstrap',
        icon: <FaBootstrap className='icon bootstrap'/>,
        link: 'https://getbootstrap.com/'
    }
]

const sidebarData = [
    {
        title: 'Dashboard',
        link: 'dashboard',
        icon: <BiHomeAlt className='sidebar-icon'/>
    },
    {
        title: 'Cursos',
        link: 'courses',
        icon: <BiBook className='sidebar-icon' />
    },
    {
        title: 'Certificaciones',
        link: 'certifications',
        icon: <TbFileCertificate className='sidebar-icon' />
    }
   
]

const courseData = [
    {
        title: 'Leccion 1',
        img: require('../images/curso.png'),
        modules: '30',
        hours: '50'
    },
    {
        title: 'Leccion 2',
        img: require('../images/curso.png'),
        modules: '11',
        hours: '20'
    },
    {
        title: 'Leccion 3',
        img: require('../images/curso.png'),
        modules: '5',
        hours: '8'
    },
    {
        title: 'Leccion 4',
        img: require('../images/curso.png'),
        modules: '22',
        hours: '30'
    },
    {
        title: 'Leccion 5',
        img: require('../images/curso.png'),
        modules: '12',
        hours: '35'
    },
    {
        title: 'Leccion 6',
        img: require('../images/curso.png'),
        modules: '14',
        hours: '28'
    }
]

export {infoDataLeft, infoDataRigth, sidebarData, courseData}