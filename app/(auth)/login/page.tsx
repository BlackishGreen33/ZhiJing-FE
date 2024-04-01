'use client';

import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

import AuthForm from '@/components/auth/auth-form';

const Page: NextPage = () => {
  const router = useRouter();

  return (
    <div className="relative flex flex-col items-center">
      <Image
        className="absolute top-[5vh] h-[20vh] w-[20vh]"
        src="/logo.png"
        alt="logo"
        width={200}
        height={200}
      />
      <p className="absolute top-[30vh] text-[4vh] font-bold">欢迎来到</p>
      <p className="absolute top-[35vh] text-[5vh] font-bold text-[#327cc6]">
        知境
      </p>
      <AuthForm className="top-[45vh]" isLogin={true} />
      <p className="absolute top-[93vh] text-sm">想尝试一下我们的服务？</p>
      <Button
        className="absolute top-[95vh]"
        variant="link"
        size="default"
        onClick={() => {
          router.push('/register');
        }}
      >
        <p className="text-sm text-[#327cc6] decoration-dashed">好呀！</p>
      </Button>
    </div>
  );
};

export default Page;
