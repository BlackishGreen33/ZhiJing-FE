'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPrimitive,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const messageContainerStyle: React.CSSProperties = {
  wordBreak: 'break-all',
  wordWrap: 'break-word',
  whiteSpace: 'normal',
};

type QuestionProviderProps = {
  title: string;
  children?: React.ReactNode;
};

export function QuestionProvider({
  children,
  ...props
}: QuestionProviderProps) {
  const { title } = props;

  const [answer, setAnswer] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isDetail, setIsDetail] = useState(false);

  const question = {
    title:
      '小张在一瞎手机电脑维修店铺上班，维修物品所收取的费用根据物品的种类物品的损坏原因、物品的损坏程度、需要的零件等多方面决定。小张在2022年年初统计了2021年全年当中A款笔记本电脑由于卡顿加装同一种固态硬盘所收取的金额，统计后发现，共有25个A款笔记本电脑进行了该项维修，并且每个笔记本的维修费用相同，最后总收入是一个四位数，且各位数之和是18的倍数，若所有金额均为整数，那么小张这项收入的钱数可能有多少种情况？',
    options: [
      { id: 1, content: '20' },
      { id: 2, content: '21' },
      { id: 3, content: '24' },
      { id: 4, content: '26' },
    ],
    answer: '21',
    detail: '没有',
  };

  const handleClick = () => {
    setIsSubmit(true);
    if (answer === question.answer) setIsCorrect(true);
  };

  const renderOptions = () => {
    return question.options.map((item) => (
      <div className="flex items-center space-x-2" key={item.id}>
        <RadioGroupItem value={item.content} id={item.content} />
        <Label htmlFor={item.content}>{item.content}</Label>
      </div>
    ));
  };

  return (
    <div className="w-full">
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex w-full justify-center" {...props}>
            {children}
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>请选择一个最适合的选项</DialogDescription>
          </DialogHeader>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message-2">题目</Label>
            <div
              className="h-auto max-w-full rounded-lg bg-neutral-900 p-3"
              style={messageContainerStyle}
            >
              {question.title}
            </div>
            {!isDetail && (
              <>
                <Label htmlFor="message-2">选项</Label>
                <div className="h-auto max-w-full rounded-lg bg-neutral-900 p-3">
                  <RadioGroup
                    defaultValue={answer}
                    onValueChange={(e) => {
                      setAnswer(e);
                    }}
                    disabled={isSubmit}
                  >
                    {renderOptions()}
                  </RadioGroup>
                </div>
              </>
            )}
          </div>
          {isSubmit && !isCorrect && isDetail && (
            <>
              <Label htmlFor="message-2">详解</Label>
              <div
                className="h-auto max-w-full rounded-lg bg-neutral-900 p-3"
                style={messageContainerStyle}
              >
                {question.detail}
              </div>
            </>
          )}
          <DialogFooter>
            {!isSubmit && (
              <Button type="submit" onClick={handleClick}>
                送出答案
              </Button>
            )}
            {isCorrect && (
              <DialogPrimitive.Close>
                <Button type="submit">恭喜答对🎉</Button>
              </DialogPrimitive.Close>
            )}
            {isSubmit && !isCorrect && !isDetail && (
              <Button type="submit" onClick={() => setIsDetail(true)}>
                答错了😭 看看详解🥲
              </Button>
            )}
            {isSubmit && !isCorrect && isDetail && (
              <DialogPrimitive.Close>
                <Button type="submit">我懂了😁</Button>
              </DialogPrimitive.Close>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
