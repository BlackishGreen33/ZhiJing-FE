import { ChevronLeft, KeyRound, UserRound } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';

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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { UnderstandContext } from '../providers/understand-provider';

type SubpageHeaderProps = {
  backUrl: string;
  title: string;
  purpose: 'dialogue' | 'solve' | 'none';
};

const SubpageHeader: React.FC<SubpageHeaderProps> = ({
  backUrl,
  title,
  purpose,
}) => {
  const router = useRouter();
  const { setIsUnderstand } = useContext(UnderstandContext)!;

  return (
    <header className="fixed flex h-[10vh] w-full items-center justify-center">
      <Link href={backUrl} className="absolute left-[5%] top-[3.5vh]">
        <ChevronLeft />
      </Link>
      <p className="text-lg font-bold">{title}</p>
      <div className="absolute right-[5%]">
        {purpose === 'dialogue' && (
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="border-0 bg-transparent"
                variant="outline"
                size="default"
              >
                <div className="flex flex-col items-center justify-center">
                  <UserRound />
                  <p className="text-xs ">指导老师</p>
                </div>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>指导老师信息</DialogTitle>
                <DialogDescription>
                  请输入指导老师的名称与邮箱，我们将为您发送邀请邮件。
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    名称
                  </Label>
                  <Input
                    id="name"
                    placeholder="请输入指导老师名称"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    邮箱
                  </Label>
                  <Input
                    id="email"
                    placeholder="xxx@email.com"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">送出邀请</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
        {purpose === 'solve' && (
          <div
            className="flex flex-col items-center justify-center"
            onClick={() => {
              setIsUnderstand(true);
              router.push('/student/solve');
            }}
          >
            <KeyRound />
            <p className="text-xs ">我理解了</p>
          </div>
        )}
      </div>
    </header>
  );
};

export default SubpageHeader;
