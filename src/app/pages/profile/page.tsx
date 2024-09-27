import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar"
import { Badge } from "@/src/components/ui/badge"

export default function Profile() {
    return(
        <div className="w-full px-10 pt-5 pb-10">
            <div className="w-full flex justify-center">
                <Avatar className="w-56 h-56">
                    <AvatarImage src="/サウナ.jpeg" className=""/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className="text-center text-2xl pb-4 mt-4 border-b">
                <p className="mb-2 font-bold text-3xl">谷口 右京</p>
                <p>北九州市立大学大学院 国際環境工学研究科 情報工学専 1年</p>
            </div>
            <div className="text-center text-2xl pb-8 mt-8 border-b">
                <p className="mb-6 font-bold text-4xl">Mission Statement</p>
                <p>『継続的な学びと能動的な行動をチーム全体で推進し、オープンなコミュニケーションと協力を通じてユーザーに最高の体験を提供する』</p>
            </div>
            <div className="w-full flex flex-col items-center text-center text-2xl mt-8 border-b">
                <h1 className="mb-8 text-4xl font-bold">自己紹介</h1>
                <div className="mb-6 px-5 py-5 rounded-xl shadow-inner shadow-[#a7e9d0]">
                    <p className="text-3xl font-bold text-[#daf6ff] mb-5">趣味</p>
                    <p>サウナ・キャンプ・釣り・山登り</p>
                </div>
                <div className="mb-6 px-5 py-5 rounded-xl shadow-inner shadow-[#a7e9d0]">
                    <p className="text-3xl font-bold text-[#daf6ff] mb-5">学歴</p>
                    <p>2024/03　北九州市立大学 国際環境工学部 情報システム工学科 卒業</p>
                </div>
                <div className="mb-6 px-5 py-8 rounded-xl shadow-inner shadow-[#a7e9d0]">
                    <p className="text-3xl font-bold text-[#daf6ff] mb-5">言語・スキル</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        <Badge>Python</Badge>
                        <Badge>JavaScript</Badge>
                        <Badge>TypeScript</Badge>
                        <Badge>HTML/CSS</Badge>
                        <Badge>C言語</Badge>
                        <Badge>php</Badge>
                        <Badge>Next.js</Badge>
                        <Badge>Flask</Badge>
                        <Badge>React</Badge>
                        <Badge>Tailwind CSS</Badge>
                    </div>
                </div>
                <div className="flex flex-col items-center mb-6 px-5 py-10 rounded-xl shadow-inner shadow-[#a7e9d0]">
                    <p className="text-3xl font-bold text-[#daf6ff] mb-5">実績・受賞歴</p>
                    <p>2024/08　株式会社サポーターズ2Daysオンラインハッカソン出場</p>
                    <div className="border h-10 w-0 my-2"></div>
                    <p>2024/08　株式会社PR TImes3Daysオフラインハッカソン出場</p>
                    <div className="border h-10 w-0 my-2"></div>
                    <p>2024/09　株式会社クイック3Daysオフラインインターンシップ　優勝🏆</p>
                    <div className="border h-10 w-0 my-2"></div>
                    <p>2024/09　3Daysオフラインハックツハッカソン　入賞</p>
                </div>           
            </div>
        </div>
    );
}