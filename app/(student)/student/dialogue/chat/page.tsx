import { NextPage } from 'next';

import ChatFuction from '@/components/chat/chat-function';
import ChatInput from '@/components/chat/chat-input';
import { UserMessage, ZJMessage } from '@/components/chat/chat-message';
import Navbar from '@/components/elements/navbar';
import SubpageHeader from '@/components/elements/subpage-header';

const Page: NextPage = () => {
  const messages = [
    {
      id: 1,
      content: 'y = 4x + 3 的零点在哪里',
      role: '你',
    },
    {
      id: 2,
      content:
        '要找到方程 y = 4x + 3 的零点，你需要解方程 4x + 3 = 0。将方程重新排列为 4x = -3，然后除以 4，得到 x = -3/4。所以，该直线的零点为 (-3/4, 0)。',
      role: 'ZJ',
    }
  ];

  return (
    <main>
      <SubpageHeader backUrl="/" title="知境" purpose="dialogue" />
      <div className="relative top-[10vh] flex w-full flex-col gap-[2vh] px-[5%]">
        {messages.map((item, index) =>
          item.role === 'ZJ' ? (
            <ZJMessage
              key={item.id}
              content={item.content}
              isLatest={index === messages.length - 1}
            />
          ) : (
            <UserMessage key={item.id} content={item.content} />
          )
        )}
      </div>
      <ChatFuction userType="student" />
      <ChatInput purpose="dialogue" />
      <Navbar activeID={1} role="student" />
    </main>
  );
};

export default Page;
