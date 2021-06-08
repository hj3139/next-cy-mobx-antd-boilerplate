import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'antd/dist/antd.less';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
