import Image from 'next/image';

import { ModeToggle } from '@/components/elements/mode-toggle';

const Header = () => {
  return (
    <header className="fixed h-[10vh] w-full">
      <Image
        className="absolute left-[4.9%] top-[2.5vh] h-[5vh] w-[5vh]"
        src="/icon.png"
        alt="logo"
        width={200}
        height={200}
      />
      <p className="absolute left-[17%] top-[2.5vh] text-sm text-gray-400">
        欢迎使用
      </p>
      <p className="absolute left-[17.2%] top-[4.5vh] text-lg font-bold">
        知境
      </p>
      <div className="absolute right-[5%] top-[3vh]">
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
