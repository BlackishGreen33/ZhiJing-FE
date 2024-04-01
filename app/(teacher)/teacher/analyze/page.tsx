'use client';

import { NextPage } from 'next';

import Header from '@/components/elements/main-header';
import Navbar from '@/components/elements/navbar';
import PieChart from '@/components/elements/pie-chart';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const Page: NextPage = () => {
  const data = [
    { value: 735, name: '选择题' },
    { value: 510, name: '是非题' },
    { value: 434, name: '计算题' },
  ];

  return (
    <main>
      <Header />
      <PieChart
        title="错题类别"
        subTitle="知境"
        seriesName="错题数"
        className="relative top-[10vh]"
        data={data}
      />
      <div className="relative top-[3vh] flex h-[30vh] w-full flex-col items-center gap-[2vh]">
        <p className="text-lg font-bold">错题分布分析</p>
        <div className="flex w-full items-center justify-center gap-1 rounded">
          <Textarea
            id="analyze"
            value="根据上述分析，该同学在选择题、是非题和计算题上都存在一定的困难和错误。为了改善错题分布，建议该同学重点关注在这三个题型上的弱点，并采取相应的措施进行提高，例如加强对题目的理解、注意细节、加强对公式和概念的掌握、多做相关类型的练习题目等。此外，及时反馈和与老师的沟通也是提高题目解答能力的重要途径。"
            className="h-[20vh] w-[80%] border-none bg-gray-900 outline-none"
            disabled
          />
        </div>
        <Button>易错题生成</Button>
      </div>
      <Navbar activeID={3} role="teacher" />
    </main>
  );
};

export default Page;
