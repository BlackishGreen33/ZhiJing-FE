'use client';

import { Preferences } from '@capacitor/preferences';
import { Toast } from '@capacitor/toast';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Eye, EyeOff, Mail, User } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';

import { authGet, authPost } from '@/lib/fetchData';
import { cn } from '@/lib/utils';

type AuthFormProps = {
  className?: string;
  isLogin: boolean;
};

const AuthForm: React.FC<AuthFormProps> = ({ className, isLogin }) => {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');

  const router = useRouter();

  const showToast = (text: string) => {
    Toast.show({
      text,
      duration: 'short',
      position: 'top',
    });
  };

  const validateEmail = () => {
    const testEmail =
      /^[\w!#$%&'*+/=?`{|}~^-]+(\.[\w!#$%&'*+/=?`{|}~^-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/;
    return testEmail.test(email);
  };

  const validateForm = () => {
    if (!email) {
      showToast('邮箱不能为空！');
      return false;
    }
    if (!password) {
      showToast('密码不能为空！');
      return false;
    }
    if (!validateEmail()) {
      showToast('请输入有效的邮箱');
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    if (!validateForm()) {
      return;
    }

    const user = {
      email,
      password,
    };

    try {
      const res = await authPost('/auth/login', user);
      const token = res.token;
      Preferences.set({
        key: 'token',
        value: token,
      });
      router.push('/');
    } catch (error) {
      showToast('登录失败');
    }
  };

  const handleRegister = async () => {
    if (!validateForm()) {
      return;
    }

    const user = {
      email,
      password,
      code,
      username,
      role,
    };

    try {
      await authPost('/auth/register', user);
      router.push('/login');
    } catch (error) {
      showToast('注册失败');
    }
  };

  const hadleVerify = async () => {
    try {
      await authGet('/auth/email_code', email);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={cn(
        'absolute flex w-full flex-col items-center gap-10',
        className
      )}
    >
      <div className="grid w-[80%] items-center gap-2">
        {!isLogin && (
          <div className="gap-1.5">
            <Label htmlFor="username" className="text-base">
              用户名称
            </Label>
            <div className="flex h-[5.3vh] items-center justify-center gap-1 rounded bg-gray-800">
              <Input
                type="username"
                id="username"
                placeholder="请输入用户名称"
                className="h-[5.3vh] w-[85%] border-none bg-transparent outline-none"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <User className="w-[15%] bg-transparent" />
            </div>
          </div>
        )}
        <div className="gap-1.5">
          <Label htmlFor="email" className="text-base">
            电子邮箱
          </Label>
          <div className="flex h-[5.3vh] items-center justify-center gap-1 rounded bg-gray-800">
            <Input
              type="email"
              id="email"
              placeholder="请输入电子邮箱"
              className="h-[5.3vh] w-[85%] border-none bg-transparent outline-none"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Mail className="w-[15%] bg-transparent" />
          </div>
        </div>
        <div className="gap-1.5">
          <Label htmlFor="password" className="text-base">
            密码
          </Label>
          <div className="flex h-[5.3vh] items-center justify-center gap-1 rounded bg-gray-800">
            <Input
              type={showPass ? 'text' : 'password'}
              id="password"
              placeholder="请输入密码"
              className="h-[5.3vh] w-[85%] border-none bg-transparent outline-none"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button
              className="w-[15%] border-0 bg-transparent"
              variant={null}
              size="icon"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <EyeOff /> : <Eye />}
            </Button>
          </div>
        </div>
        {!isLogin && (
          <>
            <div className="gap-1.5">
              <Label htmlFor="code" className="text-base">
                验证码
              </Label>
              <div className="flex h-[5.3vh] items-center justify-center gap-1 rounded bg-transparent">
                <InputOTP
                  maxLength={6}
                  pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                  render={({ slots }) => (
                    <InputOTPGroup>
                      {slots.map((slot, index) => (
                        <InputOTPSlot
                          key={index}
                          {...slot}
                          className="h-[5.3vh] w-8 border-gray-600"
                        />
                      ))}{' '}
                    </InputOTPGroup>
                  )}
                  className="w-[65%]"
                  value={code}
                  onChange={(e) => {
                    setCode(e);
                  }}
                />
                <Button
                  className="w-[35%] border-0 bg-gray-800 px-0"
                  variant={null}
                  size="default"
                  onClick={hadleVerify}
                >
                  发送验证信
                </Button>
              </div>
            </div>
            <div className="gap-1.5">
              <Label htmlFor="role" className="text-base">
                用户类型
              </Label>
              <div className="flex h-[5.3vh] items-center justify-center gap-1 rounded bg-gray-800">
                <Select
                  onValueChange={(e) => {
                    setRole(e);
                  }}
                >
                  <SelectTrigger className="h-[5.3vh] w-full bg-transparent">
                    <SelectValue placeholder="请选择用户类型" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800">
                    <SelectItem value="1">学生</SelectItem>
                    <SelectItem value="2">老师</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="flex w-full flex-col items-center">
        <Button
          className="h-[6vh] w-[50%] rounded-[5vh]"
          variant="default"
          size="default"
          onClick={isLogin ? handleLogin : handleRegister}
        >
          <p className="text-base">{isLogin ? '登录' : '注册'}</p>
        </Button>
        {isLogin ? (
          <Button variant="link" size="default">
            <p className="text-sm">人家忘记密码了 耶嘿</p>
          </Button>
        ) : (
          <div className="flex items-center justify-center">
            <p className="text-sm">注册视为同意</p>
            <Button className="p-0" variant="link" size="default">
              <p className="text-sm text-[#327cc6]">《知境APP隐私条例》</p>
            </Button>
            <p className="text-sm">内所有内容</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default AuthForm;
