import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: '探索电脑的奥秘：从底层原理到大型语言模型',
  description: '这并非一份包罗万象的百科全书，而是一次精心策划的知识探险。它旨在系统性地梳理出一条从计算机底层理论到大型语言模型（LLM）的核心脉络，帮助您洞察理论与工程的内在联系。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
