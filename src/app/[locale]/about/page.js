import Image from 'next/image';
import {getTranslations} from 'next-intl/server';

import SwitchLang from '@/components/ydm/SwitchLang';
import MainMenu from '@/components/base/MainMenu';

export default async function page({params}) {
  const { locale } = await params;
  const t = await getTranslations('HomePage');

  return (
    <div className='p-5'>
      <MainMenu active={'about'} />
      <div className='fixed right-0 top-0 p-5'>
        <SwitchLang locale={locale} />
      </div>

      <div className='container py-20'>
        <h1>{t('title')}</h1>
        <div className='tranAbout1 size-[400px]'>
          <Image className='w-full h-auto' src="/globe.svg" width={400} height={400} alt="" />
        </div>
        <div>{locale == 'th' ? 'รายละเอียด เกี่ยวกับเรา':'Content About'}</div>
        <div style={{"viewTransitionName":"txt"}} className='bg-red-500'>txt-1</div>
      </div>
    </div>
  )
}
