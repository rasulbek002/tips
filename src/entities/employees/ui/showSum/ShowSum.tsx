
export interface ShowSumProps {
  sum: string;
  onClick: (value: string) => void;
  error?: boolean;
  selectedValue: string;
  text?: boolean
}

export default function ShowSum({
  sum,
  onClick,
  error = false,
  selectedValue,
  text = false
}: ShowSumProps) {
  let style = error
    ? "rounded-lg bg-white py-3 px-4  border-2 border-error_color "
    : " rounded-lg bg-white py-3 px-4 ";

  if (selectedValue === sum) {
    style = "rounded-lg bg-main_button py-3 px-4 text-center text-white";
  }

  return (


    <div style={{ display: 'flex', alignItems: "center", justifyContent: "center" }} className={style} onClick={() => onClick(sum)}>
      {sum} {!text && "cум"}
    </div>
  );
}
