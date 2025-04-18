import {getTranslations} from 'next-intl/server';

import {Link} from '@/i18n/navigation';
import SwitchLang from '@/components/ydm/SwitchLang';
import MainMenu from '@/components/base/MainMenu';
 
export default async function HomePage({params}) {
  const { locale } = await params;
  const t = await getTranslations('HomePage');

  return (
    <div className='p-5'>
      <MainMenu active={'home'} />
      <div className='fixed right-0 top-0 p-5'>
        <SwitchLang locale={locale} />
      </div>

      <div className='container py-20'>
        <h1>{t('title')}</h1>
        <div>{locale == 'th' ? 'รายละเอียด หน้าแรก':'Content Home'}</div>
      </div>
    </div>
  );
}