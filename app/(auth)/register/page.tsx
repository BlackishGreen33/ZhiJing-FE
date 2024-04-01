'use client';

import { NextPage } from 'next';
import { useRouter } from 'next/navigation';

import AuthForm from '@/components/auth/auth-form';
import { Button } from '@/components/ui/button';

const Page: NextPage = () => {
  const router = useRouter();

  return (
    <div className="relative flex flex-col items-center">
      <p className="absolute top-[15vh] text-[4vh] font-bold">注册新账户</p>
      <AuthForm className="top-[25vh]" isLogin={false} />
      <p className="absolute top-[93vh] text-sm">您已经有账号了？</p>
      <Button
        className="absolute top-[95vh]"
        variant="link"
        size="default"
        onClick={() => {
          router.push('/login');
        }}
      >
        <p className="text-sm text-[#327cc6] decoration-dashed">
          事不宜迟尽快登录！
        </p>
      </Button>
    </div>
  );
};

export default Page;
