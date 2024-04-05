'use client';

import { Preferences } from '@capacitor/preferences';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const useTokenCheck = () => {
  const router = useRouter();

  useEffect(() => {
    const tokenChecked = async () => {
      const { value } = await Preferences.get({ key: 'token' });
      const isToken = !!value;
      if (!isToken) router.push('/login');
    };

    tokenChecked();
  }, [router]);
};

export default useTokenCheck;
