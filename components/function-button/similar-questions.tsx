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

const SimilarQuestions = () => {
  const [answer, setAnswer] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isDetail, setIsDetail] = useState(false);

  const question = {
    title:
      '一个桶中有红球、白球共30只，这些球除颜色外都相同。小陈将桶中的球搅拌均匀，从中随机摸出一只球，记下它的颜色后再放回，不断重复这一过程。小陈共摸了60次，发现有20次是红球，问这个桶中约有红球多少只？',
    options: [
      { id: 1, content: '8' },
      { id: 2, content: '10' },
      { id: 3, content: '12' },
      { id: 4, content: '20' },
    ],
    answer: '10',
    detail:
      '概率问题。根据题意小陈有放回的摸球，共摸了60次球，有20次是红球，则60次中摸到20次红球的概率为20/60=1/3。由于是有放回的摸球，所以单次摸到红球的概率与60次摸到20次红球的概率与相同。根据公式：古典概率=所求等可能样本数/总的等可能样本数，则1/3=红球数/总球数=红球数/30，解得红球数=10，则桶中约有红球10只。因此，答案为10。',
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
