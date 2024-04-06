import { Camera } from '@capacitor/camera';
import { Toast } from '@capacitor/toast';
import { Http } from '@capacitor-community/http';
import { FolderPlus, SendHorizonal } from 'lucide-react';
import Image from 'next/image';
import { useContext, useState } from 'react';

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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { postData } from '@/lib/fetchData';

import { ImageContext } from '../providers/image-provider';
import { ButtonContext } from '../providers/message-provider';

type ChatInputProps = {
  purpose: 'dialogue' | 'solve' | 'answer';
};

const ChatInput: React.FC<ChatInputProps> = ({ purpose }) => {
  const [inputValue, setInputValue] = useState('');
  const { incrementClickCount } = useContext(ButtonContext)!;
  const { imageUrl, setImageUrl } = useContext(ImageContext)!;

  const showToast = (text: string) => {
    Toast.show({
      text,
      duration: 'short',
      position: 'top',
    });
  };

  const handleUploadFiles = async () => {
    try {
      const image = await Camera.pickImages({
        quality: 90,
      });

      const res = await Http.downloadFile({
        url: image.photos[0].webPath,
        filePath: '',
      });
      const blobData = res.blob!;
      const imageFile = new File(
        [blobData],
        `example.${image.photos[0].format}`,
        { type: blobData.type }
      );

      const formdata = new FormData();
      formdata.append('file', imageFile, `example.${image.photos[0].format}`);

      const imageUrl = await postData('/upload_file', formdata);
      setImageUrl(imageUrl[0]);
    } catch (error) {
      showToast('上传失败');
    }
  };

  return (
    <div className="fixed bottom-[8vh] flex h-[8vh] w-full flex-col">
      <div className="h-[0.1vh] w-full bg-gray-700"></div>
      <div className="flex h-[7.9vh] w-full items-center">
        <div className="absolute left-[5%]">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="border-0 bg-transparent"
                variant="outline"
                size="icon"
              >
                <FolderPlus />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>上传文件</DialogTitle>
                <DialogDescription>请填写以下信息</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="flex w-full justify-center">
                  {imageUrl ? (
                    <Image
                      src={`https:\\${imageUrl}`}
                      width={50}
                      height={50}
                      alt="uploadedImage"
                      className="w-[30%]"
                    />
                  ) : (
                    <Button type="submit" onClick={handleUploadFiles}>
                      添加档案
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="text" className="text-right">
                    对话内容
                  </Label>
                  <Input
                    id="text"
                    placeholder="请输入对话内容"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogPrimitive.Close>
                  <Button
                    type="submit"
                    className="w-full"
                    onClick={() => {
                      incrementClickCount();
                      setInputValue('');
                    }}
                  >
                    送出信息
                  </Button>
                </DialogPrimitive.Close>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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
