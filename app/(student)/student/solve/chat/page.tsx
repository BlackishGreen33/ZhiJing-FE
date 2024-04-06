'use client';

import { NextPage } from 'next';
import { useSearchParams } from 'next/navigation';

import ChatInput from '@/components/chat/chat-input';
import { UserMessage, ZJMessage } from '@/components/chat/chat-message';
import Navbar from '@/components/elements/navbar';
import SubpageHeader from '@/components/elements/subpage-header';
import { Label } from '@/components/ui/label';

const messageContainerStyle: React.CSSProperties = {
  wordBreak: 'break-all',
  wordWrap: 'break-word',
  whiteSpace: 'normal',
};

const Page: NextPage = () => {
  const searchParams = useSearchParams();

  const title = searchParams.get('title') || '';

  const question = '我还是不太懂，应该如何判断一个函数有没有零点呢？';

  const messages = [
    {
      id: 1,
      content: `一个函数是否有零点可以通过解它的方程来确定。一个函数的零点是使得函数等于零的输入值。如果你有一个函数 f(x)，那么它的零点就是解方程 f(x) = 0 所得到的 x 值。

      一般来说，如果你有一个函数的解析表达式，你可以通过求解 f(x) = 0 来找到函数的零点。但有时候函数可能没有解析表达式，这时你可能需要使用数值方法（如牛顿法、二分法等）来估计函数的零点。

      因此，要判断一个函数是否有零点，你需要尝试解它的方程 f(x) = 0。`,
      role: '老师',
    },
    // {
    //   id: 2,
    //   content: '那老师，如果这样这样那样那样的话，还能得到类似的结果吗？',
    //   role: '你',
    // },
    // {
    //   id: 3,
    //   content: '还有在那样那样的情况也能使用 ggbond 定理吗？',
    //   role: '你',
    // },
    // {
    //   id: 4,
    //   content:
    //     '是的，在这样这样的情况下，ggbond 定理也能得到类似的结果。汝子可教也！',
    //   role: '老师',
    // },
  ];

  return (
    <main>
      <SubpageHeader backUrl="/student/solve" title={title} purpose="solve" />
      <div className="relative top-[10vh] flex h-[72vh] w-full flex-col items-center gap-[2vh] overflow-scroll">
        <div className="flex w-[90%] flex-col gap-[2vh] rounded-xl bg-neutral-900 p-[4%]">
          <Label htmlFor="message-2">题目：</Label>
          <div
            className="h-auto max-w-full rounded-lg bg-neutral-800 p-3"
            style={messageContainerStyle}
          >
            {question}
          </div>
        </div>
        <div className="flex w-full flex-col gap-[2vh] px-[5%]">
          {messages.map((item) =>
            item.role === '老师' ? (
              <ZJMessage
                key={item.id}
                content={item.content}
                role={item.role}
              />
            ) : (
              <UserMessage key={item.id} content={item.content} />
            )
          )}
        </div>
      </div>
      <ChatInput purpose="solve" />
      <Navbar activeID={2} role="student" />
    </main>
  );
};

export default Page;
