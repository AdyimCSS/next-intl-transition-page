import React from 'react'

import { Link } from 'next-view-transitions'

export default function MainMenu({
  locale='th',
  active=''
}) {
  return (
    <div className='menubar fixed left-0 top-0 p-5'>
      <Link className={`${active == 'home' ? 'underline':''}`} href='/'>{locale == 'th' ? 'หน้าแรก':'Home'}</Link>
      {` | `}
      <Link className={`${active == 'about' ? 'underline':''}`} href='/about'>{locale == 'th' ? 'เกี่ยวกับเรา':'About Us'}</Link>
      {` | `}
      <Link className={`${active == 'news' ? 'underline':''}`} href='/news'>{locale == 'th' ? 'ข่าวสาร':'News'}</Link>
    </div>
  )
}
