import { NextPage } from 'next';
import Link from 'next/link';

import Header from '@/components/elements/main-header';
import Navbar from '@/components/elements/navbar';

import { cn } from '@/lib/utils';

const Page: NextPage = () => {
  const questions = [
    { id: 1, type: '小明', title: '微分方程', isSolve: false },
    { id: 2, type: '阿花', title: '常态分布', isSolve: false },
    { id: 3, type: '恺卿', title: '什么是电磁场？', isSolve: false },
  ];

  const renderQuestions = (isSolve: boolean) => {
    return (
      <>
        {questions.map(
          (item) =>
            isSolve === item.isSolve && (
              <Link
                href={`/teacher/solve/chat/?title=${item.title}`}
                className="flex h-[10vh] w-[80%] items-center rounded-lg bg-neutral-800"
                key={item.id}
              >
                <div
                  className={cn(
                    'relative left-3 flex h-[6vh] w-[20%] items-center justify-center rounded-xl',
                    item.type === '小明'
                      ? 'bg-blue-500'
                      : item.type === '阿花'
                        ? 'bg-red-500'
                        : item.type === '恺卿'
                          ? 'bg-yellow-500'
                          : 'bg-orange-500'
                  )}
                >
                  {item.type}
                </div>
                <div className="flex h-[6vh] flex-1 items-center justify-center">
                  {item.title}
                </div>
              </Link>
            )
        )}
      </>
    );
  };

  return (
    <main>
      <Header />
      <div className="relative top-[10vh] flex w-full flex-col items-center gap-5">
        <div className="flex w-full flex-col items-center gap-3">
          <p className="text-gray-400">待解决</p>
          {renderQuestions(false)}
        </div>
      </div>
      <Navbar activeID={2} role="teacher" />
    </main>
  );
};

export default Page;
