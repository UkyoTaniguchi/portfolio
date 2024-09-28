import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar"
import Link from "next/link";

export default function Projects() {
    return(
        <div className="flex flex-col items-center w-full px-5 md:px-10 py-5">
            <div className="flex flex-col items-center w-full md:w-[80%] rounded-2xl px-4 py-10 mb-10 shadow-inner shadow-[#4CACB9]">
                <Avatar className="w-32 h-32 mb-5">
                    <AvatarImage src="/logo.png" className=""/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1 className="hidden sm:block text-3xl text-[#4CACB9] font-bold mb-8">『I-Team』　
                    <Link href="https://i-team-self.vercel.app" className="text-xl hover:underline">
                        i-team-self.vercel.app
                    </Link>
                </h1>
                <div className="sm:hidden text-3xl text-[#4CACB9] font-bold mb-8">
                    <h1 className="mb-3 text-center">『I-Team』</h1>
                    <Link href="https://i-team-self.vercel.app" className="text-xl hover:underline">
                        i-team-self.vercel.app
                    </Link>
                </div>
                <div className="flex flex-col items-center text-base md:text-xl w-[80%]">
                    <p className="text-center mb-4">2024/08　2Daysハッカソンでの作品を継続開発</p>
                    <div className="flex mb-4 w-full">
                        <p className="w-[85px] md:w-[105px] flex-shrink-0">担当箇所：</p>
                        <p className="flex-grow">認証機能全般，作品投稿ページ，チャットページ</p>
                    </div>      
                    <div className="flex mb-4 w-full">
                        <p className="w-[85px] md:w-[105px] flex-shrink-0">使用技術：</p>
                        <p className="flex-grow">Next.js，TypeScript，React，Tailwind CSS，Firebase</p>
                    </div>
                    <div className="flex mb-4 w-full">
                        <p className="w-[100px] md:w-[120px] flex-shrink-0">コンセプト：</p>
                        <p className="flex-grow">チーム開発などの経験が欲しい人をターゲットにしたチームビルディングと制作した作品を投稿できるアプリケーションです．</p>
                    </div>
                    <div className="flex mb-4 w-full">
                        <p className="w-[65px] md:w-[85px] flex-shrink-0">工夫点：</p>
                        <p className="flex-grow">Slackとの連携やプロジェクト内でのチャット欄の設置など，オンラインでもコミュニケーションを取りやすくしました．</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center w-full md:w-[80%] rounded-2xl px-4 py-10 shadow-inner shadow-[#FFD08A]">
                <Avatar className="w-32 h-32 mb-5">
                    <AvatarImage src="/整know-2.png" className=""/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1 className="text-3xl text-[#FFD08A] font-bold mb-8">『整know』　
                    <Link href="https://topaz.dev/projects/1a5a4ffedaa05c7a06b4" className="text-xl hover:underline">
                        Topaz.app
                    </Link>
                </h1>
                <div className="flex flex-col items-center text-base md:text-xl w-[80%]">
                    <p className="text-center mb-4">2024/09　3Daysハッカソンでの作品を継続開発</p>
                    <div className="flex mb-4 w-full">
                        <p className="w-[85px] md:w-[105px] flex-shrink-0">担当箇所：</p>
                        <p className="flex-grow">バックからフロントへ繋ぎ込み，モデル設計，デザイン，フロントエンド全般</p>
                    </div>      
                    <div className="flex mb-4 w-full">
                        <p className="w-[85px] md:w-[105px] flex-shrink-0">使用技術：</p>
                        <p className="flex-grow">Next.js，TypeScript，React，Tailwind CSS，Flask，YOLOX</p>
                    </div>
                    <div className="flex mb-4 w-full">
                        <p className="w-[100px] md:w-[120px] flex-shrink-0">コンセプト：</p>
                        <p className="flex-grow">サウナ室内で整いスペースを予約できるサービスです．</p>
                    </div>
                    <div className="flex mb-4 w-full">
                        <p className="w-[65px] md:w-[85px] flex-shrink-0">工夫点：</p>
                        <p className="flex-grow">カメラからの定期的な処理と，予約ページからの不定期の処理を組み合わせました．</p>
                    </div>
                </div>
            </div>
        </div>
    );
}