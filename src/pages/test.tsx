import CreditCardForm from "@/entities/payments/card/CreditCard";
import Positions from "@/entities/positions";
import MainTitle from "@/shared/MainTitle";

export default function Home() {
  return (
    <div>
      <div className="mb-5">
        <CreditCardForm />
      </div>
      
    </div>
  );
}
