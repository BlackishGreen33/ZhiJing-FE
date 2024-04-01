'use client';

import { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';

import Navbar from '@/components/elements/navbar';
import SubpageHeader from '@/components/elements/subpage-header';
import { QuestionProvider } from '@/components/providers/question-provider';
import { Button } from '@/components/ui/button';

const Page: NextPage = () => {
  const [buttonName, setButtonName] = useState('开始刷题');

  return (
    <main>
      <SubpageHeader
        backUrl="/student/analyze"
        title="强化巩固"
        purpose="none"
      />
      <div className="relative top-[10vh] flex w-full flex-col items-center gap-5">
        <Image
          className="absolute top-[5vh] h-[50vh] w-[50vh]"
          src="/enhance.png"
          alt="enhance"
          width={200}
          height={200}
        />
        <QuestionProvider title="强化训练">
          <Button
            className="relative top-[70vh] font-bold"
            onClick={() => setButtonName('再来一题💪')}
          >
            {buttonName}
          </Button>
        </QuestionProvider>
      </div>
      <Navbar activeID={3} role="teacher" />
    </main>
  );
};

export default Page;
