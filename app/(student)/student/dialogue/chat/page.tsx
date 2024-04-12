'use client';

import { NextPage } from 'next';
import { useContext, useEffect, useState } from 'react';

import ChatFuction from '@/components/chat/chat-function';
import ChatInput from '@/components/chat/chat-input';
import { UserMessage, ZJMessage } from '@/components/chat/chat-message';
import Navbar from '@/components/elements/navbar';
import SubpageHeader from '@/components/elements/subpage-header';
import { ImageContext } from '@/components/providers/image-provider';
import { ButtonContext } from '@/components/providers/message-provider';

interface Message {
  id: number;
  content: string;
  imageUrl?: string;
  role: '你' | 'ZJ';
}

const Page: NextPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoadingMessage, setIsloadingMessage] = useState(true);
  const { clickCount } = useContext(ButtonContext)!;
  const { imageUrl } = useContext(ImageContext)!;

  const mockMessages: Message[] = [
    {
      id: 1,
      content: 'y = 4x + 3 的零点在哪里',
      role: '你',
    },
    {
      id: 2,
      content:
        '要找到方程 y = 4x + 3 的零点，你需要解方程 4x + 3 = 0。将方程重新排列为 4x = -3，然后除以 4，得到 x = -3/4。所以，该直线的零点为 (-3/4, 0)。',
      imageUrl:
        'lablab.muxixyz.com/(2024-04-06 16:35:13.331716017 +0800 CST m=+70540.751566126)螢幕擷取畫面 2024-04-06 163337.png',
      role: 'ZJ',
    },
    {
      id: 3,
      content: '如图，这是一种什么函数',
      imageUrl: imageUrl,
      role: '你',
    },
    {
      id: 4,
      content: `描述过原点的直线通常用一般式方程表示。一般式方程表示的直线方程形式为：

        ax + by = 0

        其中 a 和 b 是直线的斜率和截距。如果直线过原点，则截距 b 为 0。因此，过原点的直线的方程可以简化为：

        y = kx

        其中 k 是直线的斜率。

        总结起来，过原点的直线的方程为 y = kx，其中 k 是直线的斜率。`,
      role: 'ZJ',
    },
    {
      id: 5,
      content: '那能帮我画出 y = 4x - 6 的图像吗？',
      role: '你',
    },
    {
      id: 6,
      content: `如图所示`,
      imageUrl:
        'lablab.muxixyz.com/(2024-04-06 16:35:13.331716017 +0800 CST m=+70540.751566126)螢幕擷取畫面 2024-04-06 163337.png',
      role: 'ZJ',
    },
    {
      id: 7,
      content: `那如何判断一个函数有没有零点呢？`,
      role: '你',
    },
    {
      id: 8,
      content: `一个函数是否有零点可以通过解它的方程来确定。一个函数的零点是使得函数等于零的输入值。如果你有一个函数 f(x)，那么它的零点就是解方程 f(x) = 0 所得到的 x 值。

      一般来说，如果你有一个函数的解析表达式，你可以通过求解 f(x) = 0 来找到函数的零点。但有时候函数可能没有解析表达式，这时你可能需要使用数值方法（如牛顿法、二分法等）来估计函数的零点。

      因此，要判断一个函数是否有零点，你需要尝试解它的方程 f(x) = 0。`,
      role: 'ZJ',
    },
  ];

  const updateMessages = () => {
    setIsloadingMessage(true);
    const inputMessage: Message = mockMessages.find(
      (message) => message.id === clickCount - 1
    )!;
    const answerMessage: Message = mockMessages.find(
      (message) => message.id === clickCount
    )!;
    if (clickCount !== 0)
      setMessages((prevMessages) => [
        ...prevMessages,
        inputMessage,
        answerMessage,
      ]);
    setTimeout(() => {
      setIsloadingMessage(false);
    }, 5000);
  };

  useEffect(() => {
    updateMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickCount]);

  return (
    <main>
      <SubpageHeader backUrl="/" title="知境" purpose="dialogue" />
      <div className="relative top-[10vh] flex h-[69vh] w-full flex-col gap-[2vh] overflow-scroll px-[5%]">
        {messages.map((item, index) =>
          item.role === 'ZJ' ? (
            <ZJMessage
              key={item.id}
              content={item.content}
              imageUrl={item.imageUrl}
              role={item.role}
              isLatest={index === messages.length - 1}
              isLoading={isLoadingMessage}
            />
          ) : (
            <UserMessage
              key={item.id}
              content={item.content}
              imageUrl={item.imageUrl}
            />
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
