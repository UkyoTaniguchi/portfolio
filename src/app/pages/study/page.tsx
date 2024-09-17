import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar"
import Link from "next/link";

export default function Projects() {
    return(
        <div className="flex flex-col items-center w-full px-10 py-5">
            <div className="w-[90%] text-center text-xl p-5 mb-10 border-b">
                <h1 className="text-5xl font-bold mb-8">研究</h1>
                <p className="mb-4">北九州市立大学大学院 西田研究室</p>
                <p>西田研究室では，①協働ロボット，②グリッパ，③ケーブル艤装，④三次元計測，⑤動作計画，⑥リスクアセスメント，⑦無線通信に焦点を当てて研究しています．</p>
            </div>
            <div className="flex flex-col items-center w-[90%] text-xl p-5 border-b">
                <h1 className="text-5xl font-bold mb-8">研究内容</h1>
                <p className="mb-10">私は主に，三次元計測に焦点を当てて研究しています．</p>
                <div className="w-[90%] rounded-2xl px-24 py-4 shadow-inner shadow-[#0aafe6] mb-10">
                    <h2 className="font-bold mb-1 text-center">学部4年次</h2>
                    <h2 className="font-bold mb-4 text-center">『instant-ngpによる複数カメラのキャリブレーション』</h2>
                    <p className="mb-4">
                        <span className="font-bold">
                            概要：
                        </span>
                        機械学習が用いられているinstant-ngpを利用して，カメラの位置と向きを特定する精度の高いカメラキャリブレーションを自動で求める研究をしました．
                    </p>
                    <p className="mb-4">
                        <span className="font-bold">
                            結果：
                        </span>
                        従来手法に比べて精度向上を確認
                    </p>
                    <p className="mb-4">
                        <span className="font-bold">
                            実績：
                        </span>
                        2023/12　第24回計測自動制御学会 システムインテグレーション部門講演会 出場
                    </p>
                </div>
                <div className="w-[90%] rounded-2xl px-24 py-4 shadow-inner shadow-[#0aafe6]">
                    <h2 className="font-bold mb-1 text-center">修士1,2年次</h2>
                    <h2 className="font-bold mb-4 text-center">『複数RGB-Dセンサによるリアルタイム物体認識』</h2>
                    <p className="mb-4">
                        <span className="font-bold">
                            概要：
                        </span>
                        複数のRGB-Dセンサを利用して，ロボットシミュレーション環境とシミュレーション内のカメラキャリブレーションを同時に遂行します．
                    </p>
                    <p className="mb-4">
                        <span className="font-bold">
                            実績：
                        </span>
                        2025/03　電子情報通信学会 総合大会 参加予定
                    </p>
                </div>
            </div>

        </div>
    );
}