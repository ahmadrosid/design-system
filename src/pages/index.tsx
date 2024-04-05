import Head from "next/head";
import { Manrope } from "next/font/google";
import Image from "next/image";
import { ButtonGhost, ButtonPimary, ButtonSecondary } from "@/components/button";
import Badge from "@/components/badge";

const manrope = Manrope({ subsets: ["latin"],   variable: "--font-sans",});

export default function Home() {
  return (
    <>
      <Head>
        <title>Design System - Ahmad Rosid</title>
      </Head>
      <main className={`${manrope.variable} font-sans`}>
        <div>
          <div className="p-8 flex justify-center">
            <Image src={"/logo.png"} width={80} height={80} alt="Design System" />
          </div>
          <div className="max-w-screen-sm mx-auto">
            <h1 className="text-4xl font-black text-center">
              A simple system design for my indie hacking products.
            </h1>
          </div>
          <div className="max-w-screen-lg mx-auto py-8">
            <div className="py-8 flex gap-4 justify-center">
              <ButtonPimary>{"Get started- It's free"}</ButtonPimary>
              <ButtonSecondary>Learn more</ButtonSecondary>
            </div>
            <div className="py-2 flex gap-4 justify-center">
              <ButtonGhost>Sign in</ButtonGhost>
              <ButtonGhost>Register</ButtonGhost>
            </div>
            <div className="py-2">
              <p>
                <Badge>Format</Badge>
                <Badge>Works</Badge>
                <Badge>None</Badge>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
