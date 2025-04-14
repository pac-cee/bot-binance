import Head from 'next/head';
import AssetDashboard from '../components/AssetDashboard';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Trading Dashboard</title>
        <meta name="description" content="Real-time crypto, forex, and stocks dashboard" />
      </Head>
      <AssetDashboard />
    </div>
  );
}
