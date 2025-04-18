import Image from 'next/image';
import {getTranslations} from 'next-intl/server';

import SwitchLang from '@/components/ydm/SwitchLang';
import MainMenu from '@/components/base/MainMenu';
import { Link } from 'next-view-transitions';
 
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
        <div className='tranAbout1 size-[100px]'>
          <Image className='w-full h-auto' src="/globe.svg" width={100} height={100} alt="" />
        </div>
        <div>{locale == 'th' ? 'รายละเอียด หน้าแรก':'Content Home'}</div>

      </div>
    </div>
  );
}