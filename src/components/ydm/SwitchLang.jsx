'use client'

import React, { useState } from 'react'

import { redirect, usePathname } from '@/i18n/navigation'

import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Check, Globe } from 'lucide-react'


export default function SwitchLang({locale}) {
  const labelTH = 'ไทย';
  const labelEN = 'Eng';
  const [labelLang, setLabelLang] = useState(`${locale == 'th' ? (labelTH):(labelEN)}`);
  const pathname = usePathname();
  const [langOpen, setLangOpen] = useState(false);

  function handleChangeLang(lang){
    if(locale != lang){
      // close
      setLangOpen(false);

      // change
      setLabelLang(`${lang == 'th' ? (labelTH):(labelEN)}`);

      redirect({href:pathname, locale:lang});

      // redirect
      // console.log('pathname', pathname);
      // if(pathname.indexOf('/product/') >= 0){
      //   // check pathname /product/:id, data-switchlang
      //   let mc = document.getElementById('header').attributes;

      //   if(mc['data-switchlang']){
      //     // console.log(`/product/${mc['data-switchlang']}`);
      //     redirect({href:`/product/${mc['data-switchlang']}`, locale:lang});
      //   }else {
      //     // other switch lang
      //     redirect({href:pathname, locale:lang});
      //   }
      //   // 
      // }else if(pathname.indexOf('/news/') >= 0){
      //   // check pathname /news/:id, data-switchlang
      //   let mc = document.getElementById('header').attributes;

      //   if(mc['data-switchlang']){
      //     // console.log(`/news/${mc['data-switchlang']}`);
      //     redirect({href:`/news/${mc['data-switchlang']}`, locale:lang});
      //   }else {
      //     // other switch lang
      //     redirect({href:pathname, locale:lang});
      //   }
      //   // 
      // }else if(pathname.indexOf('/article/') >= 0){
      //   // check pathname /article/:id, data-switchlang
      //   let mc = document.getElementById('header').attributes;

      //   if(mc['data-switchlang']){
      //     // console.log(`/article/${mc['data-switchlang']}`);
      //     redirect({href:`/article/${mc['data-switchlang']}`, locale:lang});
      //   }else {
      //     // other switch lang
      //     redirect({href:pathname, locale:lang});
      //   }
      //   // 
      // }else if(pathname.indexOf('/about-us/award/') >= 0){
      //   // check pathname /about-us/award/:id, data-switchlang
      //   let mc = document.getElementById('header').attributes;

      //   if(mc['data-switchlang']){
      //     // console.log(`/about-us/award/${mc['data-switchlang']}`);
      //     redirect({href:`/about-us/award/${mc['data-switchlang']}`, locale:lang});
      //   }else {
      //     // other switch lang
      //     redirect({href:pathname, locale:lang});
      //   }
      //   // 
      // }else if(pathname.indexOf('/about-us/corporate-governance/') >= 0){
      //   // check pathname /about-us/corporate-governance/:id, data-switchlang
      //   let mc = document.getElementById('header').attributes;

      //   if(mc['data-switchlang']){
      //     // console.log(`/about-us/corporate-governance/${mc['data-switchlang']}`);
      //     redirect({href:`/about-us/corporate-governance/${mc['data-switchlang']}`, locale:lang});
      //   }else {
      //     // other switch lang
      //     redirect({href:pathname, locale:lang});
      //   }
      //   // 
      // }else {
      //   // other switch lang
      //   redirect({href:pathname, locale:lang});
      // }
    }
  }

  return (
    <DropdownMenu open={langOpen} onOpenChange={setLangOpen}>
      <DropdownMenuTrigger asChild>
        <Button>
          <Globe /> {labelLang}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem 
          className={`font-medium cursor-pointer`}
          onClick={() => handleChangeLang('th')}
        ><Check strokeWidth={3} className={`${locale == 'th' ? (''):('opacity-0')}`} />{labelTH}</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          className={`font-medium cursor-pointer`}
          onClick={() => handleChangeLang('en')}
        ><Check strokeWidth={3} className={`${locale == 'en' ? (''):('opacity-0')}`} />{labelEN}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
