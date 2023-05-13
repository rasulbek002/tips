import Positions from "@/entities/positions";
import MainTitle from "@/shared/MainTitle";

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
