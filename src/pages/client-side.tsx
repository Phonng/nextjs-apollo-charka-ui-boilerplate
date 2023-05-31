import { Inter } from "next/font/google";
import Head from "next/head";
import ClientOnly from "../components/ClientOnly";
import Countries from "../components/Countries";
const inter = Inter({ subsets: ["latin"] });

export default function ClientSide() {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <ClientOnly>
          <Countries />
        </ClientOnly>
      </main>
    </div>
  );
}
