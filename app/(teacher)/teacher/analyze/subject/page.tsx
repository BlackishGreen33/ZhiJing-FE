'use client';

import { NextPage } from 'next';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import Navbar from '@/components/elements/navbar';
import PieChart from '@/components/elements/pie-chart';
import SubpageHeader from '@/components/elements/subpage-header';

const Page: NextPage = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get('title') || '';

  const data = [
    { value: 434, name: '是非题' },
    { value: 510, name: '选择题' },
    { value: 735, name: '计算题' },
  ];
  return (
    <main>
      <SubpageHeader backUrl="/student/analyze" title={title} purpose="none" />
      <PieChart
        title="错题类别"
        subTitle="知境"
        seriesName="错题数"
        className="relative top-[10vh]"
        data={data}
      />
      <div className="relative top-[3vh] grid h-[25vh] w-full grid-cols-2 grid-rows-1 gap-x-[10px] gap-y-[10px] px-[20px] py-[10px]">
        <Link
          href={`/student/analyze/subject/history?type=${title}`}
          className="flex items-center justify-center rounded-lg bg-blue-500"
        >
          <div className="font-bold">历史错题</div>
        </Link>
        <Link
          href="/student/analyze/subject/enhance"
          className="flex items-center justify-center rounded-lg bg-red-500"
        >
          <div className="font-bold">强化训练</div>
        </Link>
      </div>
      <Navbar activeID={3} role="teacher" />
    </main>
  );
};

export default Page;
