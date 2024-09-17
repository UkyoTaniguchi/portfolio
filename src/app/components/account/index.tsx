import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar"

export default function Account() {
  return (
    <div className="flex items-center">
      <div className="h-full w-full p-2">
        <div className="flex justify-center mb-5">
          <Avatar className="w-1/2 h-1/2">
              <AvatarImage src="サウナ.jpeg" className=""/>
              <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="text-center text-xl">
          <p>北九州市立大学大学院　国際環境工学研究科</p>
          <p>情報工学専攻</p>
        </div>
      </div>
    </div>
  );
}
