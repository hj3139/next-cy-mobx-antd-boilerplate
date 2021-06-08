import { HTMLProps } from 'react';
import Head from 'next/head';
import { Layout } from 'antd';

export const CommonLayout = ({ children }: HTMLProps<HTMLDivElement>) => {
  return (
    <>
      <Head>
        <title>BoilerPlate</title>
        <meta name='viewport' content='width=device-width' />
      </Head>
      <Layout.Content>{children}</Layout.Content>
    </>
  );
};
