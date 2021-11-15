import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faBlogger, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/profile.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: 'Choi Kyuyoung',
    small: '',
  },
  contact: [
    {
      title: 'kyuyoung486@gmail.com',
      link: 'mailto:kyuyoung486@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    // {
    //   title: 'Github',
    //   link: 'https://github.com/wnjoon',
    //   icon: faGithub,
    // },
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/wonjoon/',
      icon: faLinkedin,
    },
    {
      title: 'Blog',
      link: 'https://wnjoon.github.io',
      icon: faBlogger,
    },
    // {
    //   title: 'YouTube',
    //   link: 'https://www.youtube.com/channel/UC3SyT4_WLHzN7JmHQwKQZww',
    //   // icon: faRss,
    //   icon: faYoutube,
    // },
  ],
  notice: {
    title: 'Status : Open to new opportunities and challenges 🙋‍♂️',
    // title: 'Status : 작성중입니다 🔧',
    icon: faBell,
  },
};

export default profile;
