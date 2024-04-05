import Head from "next/head";
import { Manrope } from "next/font/google";
import {
  ButtonPimary,
  ButtonSecondary,
} from "@/components/button";
import Link from "next/link";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans" });

export default function Home() {
  return (
    <>
      <Head>
        <title>Design System - Ahmad Rosid</title>
      </Head>
      <main className={`${manrope.variable} font-sans`}>
        <div className="py-12">
          <div className="p-8 flex justify-center">
            <img src={"/logo.png"} width={80} height={80} alt="Design System" />
          </div>
          <div className="max-w-screen-sm mx-auto">
            <h1 className="title text-center">
              A simple system design for my indie hacking products.
            </h1>
          </div>
          <div className="max-w-screen-lg mx-auto py-8">
            <div className="py-8 flex gap-4 justify-center">
              <Link href="/preview">
                <ButtonPimary>{"Get started- It's free"}</ButtonPimary>
              </Link>
              <ButtonSecondary>
                <svg
                  height="32"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="32"
                  data-view-component="true"
                  className="w-5 h-5"
                >
                  <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                </svg>
                <span className="ml-2">Star on GitHub</span>
              </ButtonSecondary>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
