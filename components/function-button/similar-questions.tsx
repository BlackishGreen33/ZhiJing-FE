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

const SimilarQuestions = () => {
  const [answer, setAnswer] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isDetail, setIsDetail] = useState(false);

  const question = {
    title: '8y + 4x -5 = 0 的零点在哪里？',
    options: [
      { id: 1, content: '3/2' },
      { id: 2, content: '7/12' },
      { id: 3, content: '5/4' },
      { id: 4, content: '1' },
    ],
    answer: '10',
    detail:
      `要找到方程 8y + 4x - 5 = 0 的零点，您需要解方程以找到 x和 y 的值，使得方程成立。

      首先，我们可以将方程重写为 y = -frac{4}{8}x + frac{5}{8}，这样我们就得到了直线的斜率截距形式。斜率截距形式是 y = mx + b，其中 m 是斜率，b 是截距。

      在这个方程中，斜率 m = -frac{4}{8} = -frac{1}{2}，截距 b = frac{5}{8}。

      因此，直线的斜率为负斜率，截距在 y 轴上的正值。我们可以画出这条直线，并找到它与 x 轴的交点，即零点。`,
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
    <div className="flex h-[4.5vh] w-full items-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="absolute left-[3%] h-[3vh] w-[20%] border-0 p-0"
            variant="default"
            size="sm"
          >
            相似题目
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>相似题目</DialogTitle>
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
};

export default SimilarQuestions;
