import { FolderPlus, SendHorizonal } from 'lucide-react';
import { useContext, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { ButtonContext } from '../providers/message-provider';

type ChatInputProps = {
  purpose: 'dialogue' | 'solve' | 'answer';
};

const ChatInput: React.FC<ChatInputProps> = ({ purpose }) => {
  const [inputValue, setInputValue] = useState('');
  const { incrementClickCount } = useContext(ButtonContext)!;

  return (
    <div className="fixed bottom-[8vh] flex h-[8vh] w-full flex-col">
      <div className="h-[0.1vh] w-full bg-gray-700"></div>
      <div className="flex h-[7.9vh] w-full items-center">
        <div className="absolute left-[5%]">
          <Button
            className="border-0 bg-transparent"
            variant="outline"
            size="icon"
          >
            <FolderPlus />
          </Button>
        </div>
        <div className="absolute left-[18%] w-[63%]">
          {purpose === 'dialogue' ? (
            <Input
              placeholder="与 知境 机器人对话"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          ) : purpose === 'answer' ? (
            <Input
              placeholder="与 学生 对话"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          ) : (
            <Input
              placeholder="与 老师 对话"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          )}
        </div>
        <div className="absolute right-[5%]">
          <Button
            className="border-0"
            variant="default"
            size="icon"
            onClick={() => {
              incrementClickCount();
              setInputValue('');
            }}
          >
            <SendHorizonal />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
