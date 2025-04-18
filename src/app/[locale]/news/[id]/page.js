import { getTranslations } from 'next-intl/server';
import MainMenu from '@/components/base/MainMenu';
import SwitchLang from '@/components/ydm/SwitchLang';
import Image from 'next/image';
import { Link } from 'next-view-transitions';

export default async function NewsDetail({params}) {
  const { locale, id } = await params;
  const t = await getTranslations('HomePage');

  return (
    <div className='p-5'>
      <MainMenu active={'news'} />
      <div className='fixed right-0 top-0 p-5'>
        <SwitchLang locale={locale} />
      </div>

      <div className='container py-20'>
        <h1>{t('title')}</h1>
        <div className='tranAbout1 size-[100px]'>
          <Image className='w-full h-auto' src="/globe.svg" width={100} height={100} alt="" />
        </div>
        <div className={`tran_news_${id} flex justify-center items-center bg-amber-200 text-[44px] min-h-[240px]`}>
          Thumbnail {id}
        </div>
        <div>
          NewsDetail NewsDetail NewsDetail NewsDetail NewsDetail NewsDetail NewsDetail NewsDetail NewsDetail NewsDetail 
          NewsDetail NewsDetail NewsDetail NewsDetail NewsDetail NewsDetail NewsDetail NewsDetail NewsDetail NewsDetail 
          NewsDetail NewsDetail NewsDetail NewsDetail NewsDetail NewsDetail NewsDetail NewsDetail NewsDetail NewsDetail 
          NewsDetail NewsDetail NewsDetail NewsDetail NewsDetail NewsDetail NewsDetail NewsDetail 
        </div>
        <div className='py-3'>
          <Link href={'/news'}>Back</Link>
        </div>
      </div>
    </div>
  )
}
