import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import {
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaDiscord,
  FaAmazon,
  FaCommentDots,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full bg-[#F9F6F7] p-4 md:p-8">
      <div className="w-full md:w-64 lg:w-72 flex items-center justify-center md:justify-start mb-6 md:mb-0">
        <Card className="w-full h-auto md:h-[550px] flex flex-col items-center bg-[#D58F99] shadow-lg border-0 p-4">
          <div className="flex flex-col items-center w-full h-full space-y-4">
            <div className="w-32 h-32 relative">
              <Image
                src="/icon.png"
                alt="アイコン"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-bold">彩音</h2>
            <div className="flex space-x-4 my-2">
              <a
                href="https://github.com/ayane0857"
                aria-label="GitHub"
                className="hover:opacity-80"
              >
                <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="https://x.com/ayane0857_"
                aria-label="Twitter"
                className="hover:opacity-80"
              >
                <FaTwitter className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="https://www.youtube.com/@ayane0857"
                aria-label="YouTube"
                className="hover:opacity-80"
              >
                <FaYoutube className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="https://discord.gg/qyTSUJFctN"
                aria-label="Discord"
                className="hover:opacity-80"
              >
                <FaDiscord className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
            <div className="w-full h-px bg-slate-200" />
            <div className="flex items-center space-x-2">
              <a
                href="mailto:tailangrongyi@gmail.com"
                className="flex items-center space-x-1 text-sm md:text-base hover:opacity-80"
              >
                <MdEmail className="w-4 h-4 md:w-5 md:h-5" />
                <span className="break-all">tailangrongyi@gmail.com</span>
              </a>
            </div>
            <div className="w-full h-px bg-slate-200" />
            <div className="flex flex-col space-y-2 w-full items-center">
              <a
                href="https://www.amazon.co.jp/hz/wishlist/ls/3PD4GD3W2M8AT"
                className="flex items-center space-x-2 text-sm md:text-base hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaAmazon className="w-4 h-4 md:w-5 md:h-5" />
                <span>ほしい物リスト</span>
              </a>
              <a
                href="https://marshmallow-qa.com/t8mh63w5fpziayd"
                className="flex items-center space-x-2 text-sm md:text-base hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCommentDots className="w-4 h-4 md:w-5 md:h-5" />
                <span>マシュマロ</span>
              </a>
            </div>
          </div>
        </Card>
      </div>

      <div className="w-full md:w-[calc(100%-16rem)] lg:w-[calc(100%-18rem)] flex items-center justify-start p-4 md:p-12">
        <div className="max-w-2xl">
          <p className="text-lg md:text-xl leading-relaxed">
            そこらへんにいる一般階級インフラレッド
            <br />
            動画編集やプログラミングとか暇があったらやってる
            <br />
            UniProに所属してるよ
            <br />
            ぬっこでもある
          </p>
          <div className="h-2"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="border-l-4 border-gray-200 pl-4">
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  DiscordBot開発中
                </h3>
                <ul className="space-y-1">
                  <li className="text-gray-700">
                    <a
                      href="https://ayano.uniproject.jp"
                      className="text-blue-600 hover:underline"
                    >
                      彩乃 Bot
                    </a>
                    を開発中
                  </li>
                </ul>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
