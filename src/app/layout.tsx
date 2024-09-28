import "./globals.css";
import type { Metadata } from "next";
import { Kaisei_Tokumin } from "next/font/google";
import { Zen_Antique } from "next/font/google";
import { Noto_Serif_JP } from "next/font/google";
import localFont from "next/font/local";

const kaiseiTokumin = Kaisei_Tokumin({
  subsets: ["latin"], // 必要なサブセットを指定します
  weight: ["400", "700"], // 使用するフォントウェイトを指定
});

const ZenAntique = Zen_Antique({
  subsets: ["latin"], // 必要なサブセットを指定します
  weight: ['400'], // 使用するフォントウェイトを指定
});

const NoteSerifJP = Noto_Serif_JP({
  subsets: ["latin"], // 必要なサブセットを指定します
  weight: ["400", "700"], // 使用するフォントウェイトを指定
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "ポートフォリオサイトです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap"
        />
      </head>
      <body className={NoteSerifJP.className}>{children}</body>
    </html>
  );
}
