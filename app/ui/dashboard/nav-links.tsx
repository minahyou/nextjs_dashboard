'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  AcademicCapIcon,
  Bars2Icon,
  AdjustmentsHorizontalIcon,
  ArrowDownCircleIcon,
} from '@heroicons/react/24/outline';

import { usePathname } from 'next/navigation'; //현재의 경로를 알아내기 위한 것 
import clsx from 'clsx'; //이걸 이용해서 현재 선택된 메뉴임을 조건을 줘서
// 색으로 티를 내려고 

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: '대쉬보드홈', href: '/dashboard', icon: HomeIcon },
  {
    name: '송장',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: '고객', href: '/dashboard/customers', icon: UserGroupIcon },
  { name: '홈', href: '/', icon: ArrowDownCircleIcon },
];

export default function NavLinks() {
  const pathname = usePathname(); //현재의 url을 알아 낼 수 있다
  console.log(pathname)

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}>
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })}
    </>
  );
}
