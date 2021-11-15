import favicon from '../asset/favicon.ico';
import previewImage from '../asset/profile.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = 'Choi Kyuyoung - Resume page';
const description = '차곡차곡 적어보는 나의 이력서 - by Kyuyoung Choi.';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'OpenGraph Image Sample.png',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Kyuyoung',
        lastName: 'Choi',
        username: '뀨',
        gender: 'Female',
      },
    },
  },
};
