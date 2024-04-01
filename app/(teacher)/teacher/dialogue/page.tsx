'use client';

import { NextPage } from 'next';

import useTokenCheck from '@/hooks/use-token-checked';

import ConsultingSubjects from '@/components/elements/consulting-subjects';
import Header from '@/components/elements/main-header';
import Navbar from '@/components/elements/navbar';

const Page: NextPage = () => {
  useTokenCheck();

  return (
    <main>
      <Header />
      <ConsultingSubjects purpose="teacher" />
      <Navbar activeID={1} role="teacher" />
    </main>
  );
};

export default Page;
