import Button from "@/shared/Button";
import Image from "next/image";

interface SuccessPopup {
  text?: string;
  icon?: string;
  sum?: string;
  onClose: () => void;
  buttonText?: string;
}

export default function SuccessPopup({
  text = "Ваш платеж произведен, спасибо!",
  icon = "/image/checkmark-circle.png",
  sum = "200 сум",
  buttonText = "Готово",
  onClose,
}: SuccessPopup) {
  return (
    <div className=" px-3  bg-main_bg fixed top-0 left-0 right-0 bottom-0 z-10 flex flex-col py-10 h-screen text-center">
      <div className="mx-auto mb-6">
        <Image width={96} height={96} src={icon} alt="text" />
      </div>
      <h2 className=" font-bold text-3xl mb-2">{sum} сум</h2>
      <h3 className="flex-auto text-xl">{text}</h3>
      <Button title={buttonText} type="main" onClick={onClose} />
    </div>
  );
}
