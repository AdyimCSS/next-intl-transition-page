import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { Link } from 'next-view-transitions';

import MainMenu from '@/components/base/MainMenu';
import SwitchLang from '@/components/ydm/SwitchLang';

export default async function NewsList({params}) {
  const { locale } = await params;
  const t = await getTranslations('HomePage');

  return (
    <div className='p-5'>
      <MainMenu active={'news'} />
      <div className='fixed right-0 top-0 p-5'>
        <SwitchLang locale={locale} />
      </div>

      <div className='container py-20'>
        <h1>{t('title')}</h1>
        <div className='tranAbout1 size-[400px]'>
          <Image className='w-full h-auto' src="/globe.svg" width={400} height={400} alt="" />
        </div>
        <div className='grid grid-cols-4 gap-3'>
          {["","","",""].map((item, itemKey) => (
            <div key={itemKey} className={`tran_news_${itemKey+1} transition-all bg-amber-200 hover:bg-amber-400`}>
              <Link className='flex p-5 justify-center items-center min-h-[80px]' href={`/news/${itemKey+1}`}>item {itemKey+1}</Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}