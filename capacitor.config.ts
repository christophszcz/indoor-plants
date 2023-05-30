import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.christophszcz.indoorPlants',
  appName: 'indoor plants',
  webDir: 'dist/indoor-plants',
  server: {
    androidScheme: 'https'
  }
};

export default config;
