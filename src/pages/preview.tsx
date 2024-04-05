import Head from "next/head";
import { Manrope } from "next/font/google";
import Image from "next/image";
import {
  ButtonDanger,
  ButtonGhost,
  ButtonPimary,
  ButtonSecondary,
  ButtonSuccess,
} from "@/components/button";
import Badge from "@/components/badge";
import Link from "next/link";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans" });

export default function Home() {
  return (
    <>
      <Head>
        <title>Design System Preview - Ahmad Rosid</title>
      </Head>
      <main className={`${manrope.variable} font-sans`}>
        <div className="min-h-screen flex">
          <div className="w-12 px-1">
            <div className="p-1.5">
              <Link href="/">
                <img
                  src="/logo.png"
                  width={35}
                  height={35}
                  alt="Design System"
                />
              </Link>
            </div>
            <div className="py-6">
              <button className="btn-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-7 h-7"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 12l3 3l3 -3l-3 -3z" />
                  <path d="M15 12l3 3l3 -3l-3 -3z" />
                  <path d="M9 6l3 3l3 -3l-3 -3z" />
                  <path d="M9 18l3 3l3 -3l-3 -3z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="border-l border-gray-200 bg-gray-100 flex-1">
            <div className="p-6">
              <h2 className="h2">Components</h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="card">
                <h3 className="h3 mb-2">Button</h3>
                <div className="p-2 flex gap-4 mb-2">
                  <ButtonPimary>Button primary</ButtonPimary>
                  <ButtonSecondary>Button secondary</ButtonSecondary>
                  <ButtonDanger>Button danger</ButtonDanger>
                  <ButtonSuccess>Button success</ButtonSuccess>
                  <ButtonGhost>Button ghost</ButtonGhost>
                </div>
                <div className="p-2">
                  <div className="font-medium text-sm">
                    Badge
                    <Badge>Format</Badge>
                    <Badge>Works</Badge>
                    <Badge>None</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
