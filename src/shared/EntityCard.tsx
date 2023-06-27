import ArrowIcon from "@/shared/svg/ArrowIcon";
import Image from "next/image";

export interface EntityCardProps {
  image: string;
  name: string;
}

export default function EntityCard({ name, image }: EntityCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 flex items-center">
      <Image
        width={64}
        height={64}
        className="w-16 h-16 rounded-full mr-4"
        src={image ? image : "/image/blank-profile.png"}
        alt={name}
      />
      <div className=" flex-auto">{name}</div>
      <div>
        <ArrowIcon />
      </div>
    </div>
  );
}
