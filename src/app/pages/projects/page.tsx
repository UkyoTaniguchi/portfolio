import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar"
import Link from "next/link";

export default function Projects() {
    return(
        <div className="flex flex-col items-center w-full px-10 py-5">
            <div className="flex flex-col items-center w-[80%] rounded-2xl p-4 shadow-inner shadow-[#0aafe6]">
                <Avatar className="w-32 h-32 mb-5">
                    <AvatarImage src="/logo.png" className=""/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1 className="text-3xl text-[#daf6ff] font-bold mb-8">『I-Team』　
                    <Link href="https://i-team-self.vercel.app" className="text-xl hover:underline">
                        i-team-self.vercel.app
                    </Link>
                </h1>
                <div className="w-[80%] text-center">
                    <p className="text-xl mb-4">2024/08　2Daysハッカソンでの作品を継続開発</p>
                    <p className="text-xl mb-4">担当箇所：認証機能全般，作品投稿ページ，チャットページ</p>
                    <p className="text-xl mb-4">使用技術：Next.js，TypeScript，React，tailwindcss，firebase</p>
                    <p className="text-xl mb-4">コンセプト：チーム開発などの経験が欲しい人をターゲットにしたチームビルディングと制作した作品を投稿できるアプリケーションです。</p>
                    <p className="text-xl mb-4">工夫点：Slackとの連携やプロジェクト内でのチャット欄の設置など、オンラインでもコミュニケーションを取りやすくしました。</p>
                </div>
            </div>
        </div>
    );
}