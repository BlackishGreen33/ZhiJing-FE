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
import { Textarea } from '@/components/ui/textarea';

const PlanGeneration = () => {
  return (
    <div className="flex h-[4.5vh] w-full items-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="absolute left-[3%] h-[3vh] w-[20%] border-0 p-0"
            variant="default"
            size="sm"
          >
            教案生成
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>教案生成</DialogTitle>
            <DialogDescription>请填写以下信息</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="text" className="text-right">
                教学内容
              </Label>
              <Textarea
                id="text"
                placeholder="请输入教学内容"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="text" className="text-right">
                学生年级
              </Label>
              <Input
                id="text"
                placeholder="请输入学生年级"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="text" className="text-right">
                课程类型
              </Label>
              <Input
                id="text"
                placeholder="请输入课程类型"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">生成教案</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PlanGeneration;
