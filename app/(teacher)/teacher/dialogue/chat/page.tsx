'use client';

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
      content: 'test',
      role: '你',
    },
    {
      id: 2,
      content: '您好，我能帮您什么吗？',
      role: 'ZJ',
    },
    // {
    //   id: 3,
    //   content:
    //     '我好爱你我好爱你我好爱你我好爱你我好爱你我好爱你我好爱你我好爱你我好爱你',
    //   role: '你',
    // },
    // {
    //   id: 4,
    //   content:
    //     '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
    //   role: 'ZJ',
    // },
  ];

  return (
    <main>
      <SubpageHeader backUrl="/teacher/dialogue" title="知境" purpose="none" />
      <div className="relative top-[10vh] flex w-full flex-col gap-[2vh] px-[5%]">
        {messages.map((item, index) =>
          item.role === 'ZJ' ? (
            <ZJMessage
              key={item.id}
              content={item.content}
              role={item.role}
              isLatest={index === messages.length - 1}
            />
          ) : (
            <UserMessage key={item.id} content={item.content} />
          )
        )}
      </div>
      <ChatFuction userType="teacher" />
      <ChatInput purpose="dialogue" />
      <Navbar activeID={1} role="teacher" />
    </main>
  );
};

export default Page;
