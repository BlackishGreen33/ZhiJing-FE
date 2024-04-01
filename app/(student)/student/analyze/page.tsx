'use client';

import { NextPage } from 'next';
import Link from 'next/link';

import Header from '@/components/elements/main-header';
import Navbar from '@/components/elements/navbar';
import PieChart from '@/components/elements/pie-chart';

const Page: NextPage = () => {
  const data = [
    { value: 735, name: '数学' },
    { value: 510, name: '语文' },
    { value: 434, name: '历史' },
    { value: 335, name: '物理' },
  ];

  return (
    <main>
      <Header />
      <PieChart
        title="错题比例"
        subTitle="知境"
        seriesName="错题数"
        className="relative top-[10vh]"
        data={data}
      />
      <div className="relative top-[3vh] grid h-[25vh] w-full grid-cols-2 grid-rows-2 gap-x-[10px] gap-y-[10px] px-[20px] py-[10px]">
        <Link
          href="/student/analyze/subject?title=数学"
          className="flex items-center justify-center rounded-lg bg-blue-500"
        >
          <div className="font-bold">数学</div>
        </Link>
        <Link
          href="/student/analyze/subject?title=语文"
          className="flex items-center justify-center rounded-lg bg-red-500"
        >
          <div className="font-bold">语文</div>
        </Link>
        <Link
          href="/student/analyze/subject?title=历史"
          className="flex items-center justify-center rounded-lg bg-yellow-500"
        >
          <div className="font-bold">历史</div>
        </Link>
        <Link
          href="/student/analyze/subject?title=物理"
          className="flex items-center justify-center rounded-lg bg-orange-500"
        >
          <div className="font-bold">物理</div>
        </Link>
      </div>
      <Navbar activeID={3} role="student" />
    </main>
  );
};

export default Page;
