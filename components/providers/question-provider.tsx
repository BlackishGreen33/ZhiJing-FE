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
  whiteSpace: 'pre-line',
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
    title: `考虑函数 f(x) = 2x^2 - 5x + 2。

      下列哪个选项表示了函数 f(x) 的零点？`,
    options: [
      { id: 1, content: 'x = 2 和 x = 1/2' },
      { id: 2, content: 'x = -2 和 x = 1/2' },
      { id: 3, content: 'x = 2 和 x = -1/2' },
      { id: 4, content: 'x = -2 和 x = -1/2' },
    ],
    answer: 'x = 2 和 x = 1/2',
    detail: `函数 f(x) = 2x^2 - 5x + 2 的零点是使得 f(x) = 0 的值。我们可以使用求根公式或者其他方法来找到零点。

    首先，我们可以尝试使用因式分解来分解这个二次方程。观察到该函数可以写成 f(x) = (2x - 1)(x - 2)，因此 f(x) = 0 的解为 x = 1/2 和 x = 2。

    另一种方法是使用二次方程的求根公式：
    x = frac{-b +- sqrt{b^2 - 4ac}}{2a}

    对于 f(x) = 2x^2 - 5x + 2，其中 a = 2，b = -5，c = 2。将这些值代入求根公式，我们得到：
    x = frac{-(-5) +- sqrt{(-5)^2 - 4 cdot 2 cdot 2}}{2 cdot 2}
    x = frac{5 +- sqrt{25 - 16}}{4}
    x = frac{5 +- sqrt{9}}{4}
    x = frac{5 +- 3}{4}

    因此，我们得到 x = frac{5 + 3}{4} = 2 和 x = frac{5 - 3}{4} = frac{1}{2}。`,
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
                className="h-auto max-h-[40vh] max-w-full rounded-lg bg-neutral-900 p-3 overflow-scroll"
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
