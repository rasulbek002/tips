import Head from "next/head";

import { Inter } from "@next/font/google";
import MainTitle from "@/common/MainTitle";
import Positions from "@/components/positions";
import ArrowIcon from "@/components/svg/ArrowIcon";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="mb-5">
        <MainTitle title="Команда ресторана" />
      </div>

      <Positions />
    </div>
  );
}
