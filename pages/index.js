import Head from 'next/head';
import Homepage from '../components/Homepage';
import TestParent from '../components/TestParent';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Movies2u</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      {/* <Homepage /> */}
      <TestParent />
    </div>
  );
}
