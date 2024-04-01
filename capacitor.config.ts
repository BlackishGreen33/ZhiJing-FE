import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.zhijing.app',
  appName: '知境',
  webDir: 'out',
  server: {
    androidScheme: 'https',
    url: 'http://10.130.88.87:3000',
    cleartext: true,
  },
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
};

export default config;
