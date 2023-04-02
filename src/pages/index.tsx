import Head from "next/head";

import { Inter } from "@next/font/google";
import MainTitle from "@/common/MainTitle";
import Positions from "@/components/positions";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className=" mb-5 text-center font-bold   ">
        <MainTitle title="Команда ресторана" />
      </div>

      <Positions />
    </div>
  );
}
