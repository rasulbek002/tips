import Image from "next/image";

export interface EntityDetailCardProps {
  image: string | undefined;
  name: string | undefined;
  type: string | undefined;
}

export default function EntityDetailCard({
  image,
  name,
  type,
}: EntityDetailCardProps) {
  return (
    <div className=" text-center">
      <div className=" mb-4 flex justify-center ">
        <Image
          src={image ? image : '/image/blank-profile.png'}
          alt={name!}
          className="rounded-full"
          width={96}
          height={96}
        />
      </div>
      <h5 className="mb-1.5 font-bold text-2xl">
        {name}
      </h5>
      <p className=" text-base">{type}</p>
    </div>
  );
}
