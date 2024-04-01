import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Share, ThumbsDown, ThumbsUp } from 'lucide-react';

type MessageProps = {
  content: string;
  isLatest?: boolean;
};

const messageContainerStyle: React.CSSProperties = {
  wordBreak: 'break-all',
  wordWrap: 'break-word',
  whiteSpace: 'normal',
};

export const ZJMessage: React.FC<MessageProps> = ({ content, isLatest }) => {
  return (
    <div className="flex w-full flex-col gap-[1vh]">
      <div className="flex gap-[3%]">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="知境" />
          <AvatarFallback>ZJ</AvatarFallback>
        </Avatar>
        <div
          className="h-auto max-w-full rounded-lg bg-gray-800 p-3"
          style={messageContainerStyle}
        >
          {content}
        </div>
      </div>
      {isLatest && (
        <div className="flex gap-[3%]">
          <Button
            className="h-[4vh] w-[20%] rounded-2xl border-0 bg-[#327cc6] p-0"
            variant="default"
            size="icon"
          >
            <Share className="h-[2vh]" />
            <p>分享</p>
          </Button>
          <Button
            className="h-[4vh] w-[4vh] rounded-full p-0"
            variant="outline"
            size="icon"
          >
            <ThumbsUp className="h-[2vh]" />
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="h-[4vh] w-[4vh] rounded-full p-0"
                variant="outline"
                size="icon"
              >
                <ThumbsDown className="h-[2vh]" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>老师，我有问题！</DialogTitle>
                <DialogDescription>
                  请填写关于此问题回答相关的疑惑。
                </DialogDescription>
              </DialogHeader>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="message-2">问题描述</Label>
                <Textarea
                  placeholder="好的，我们都知道你有问题🤣👉🤡"
                  id="message-2"
                />
                <p className="text-sm text-muted-foreground">
                  你的疑问将会反映给我们团队和老师。
                </p>
              </div>
              <DialogFooter>
                <Button type="submit">送出疑问</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  );
};

export const UserMessage: React.FC<MessageProps> = ({ content }) => {
  return (
    <div className="flex w-full flex-col gap-[1vh]">
      <div className="flex gap-[3%]">
        <div
          className="ml-auto h-auto max-w-full rounded-lg bg-gray-800 p-3"
          style={messageContainerStyle}
        >
          {content}
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="知境" />
          <AvatarFallback>你</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
