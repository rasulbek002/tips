import Button from "@/shared/Button";
import { useState } from "react";
import axios from "axios";

const CreditCardForm = () => {
  const [verifyCode, setVerifyCode] = useState({ state: false, code: "" });
  const [paymentLoading, setPayment] = useState<any>({});
  const [createPaymentLoading, setCreatePaymentLoading] = useState(true);

  const [cardNumber, setCardNumber] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCardNumberChange = (event: any) => {
    const input = event.target.value.replace(/\D/g, "").slice(0, 16); // Allow only digits and limit to 16 characters
    setCardNumber(input);
  };

  const handleExpireDateChange = (event: any) => {
    const input = event.target.value.replace(/\D/g, "").slice(0, 4); // Allow only digits and limit to 4 characters
    const formattedInput = input.replace(/^(\d{2})(\d{0,2})$/, "$1/$2"); // Format as MM/YY
    setExpireDate(formattedInput);
  };

  const handleCvvChange = (event: any) => {
    const input = event.target.value.replace(/\D/g, "").slice(0, 3); // Allow only digits and limit to 3 characters
    setCvv(input);
  };

  console.log(paymentLoading);

  const makePayment = () => {
    setCreatePaymentLoading(true);
    const endpoint = "https://checkout.test.paycom.uz/api";
    const authHeader = "ZPDODSiTYKuX0jyO7Kl2to4rQbNwG08jbghj";

    const requestBody = {
      jsonrpc: "2.0",
      method: "cards.create",
      params: {
        card: { number: "8600495473316478", expire: "0399" },
        save: false,
      },
      id: "5e730e8e0b852a417aa49ceb",
    };

    axios
      .post(endpoint, requestBody, {
        headers: {
          "X-Auth": authHeader,
          "Cache-Control": "no-cache",
        },
      })
      .then((response) => {
        setPayment(response.data);
      })
      .catch((error) => {
        console.error("Payment request failed", error);
        setPayment(null);
      });

    setCreatePaymentLoading(false);
  };
  return (
    <div className="flex flex-wrap gap-3 w-full p-5">
      <label className="relative w-full flex flex-col">
        <span className="font-bold mb-3">Card number</span>
        <input
          className="rounded-md peer pl-12   py-2 border-2 border-gray-200 placeholder-gray-300"
          type="text"
          name="card_number"
          placeholder="0000 0000 0000 0000"
          value={cardNumber}
          autoComplete=""
          onChange={handleCardNumberChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      </label>
      <div className=" flex">
        <label className="relative flex-1 flex flex-col">
          <span className="font-bold mb-3">Expire date</span>
          <input
            className="rounded-md peer pl-12 py-2 border-2 border-gray-200 placeholder-gray-300  w-full"
            type="text"
            name="expire_date"
            placeholder="MM/YY"
            autoComplete=""
            value={expireDate}
            onChange={handleExpireDateChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </label>

        <label className="relative flex-1 flex flex-col">
          <span className="font-bold flex items-center gap-3 mb-3">
            CVC/CVV
          </span>
          <input
            className="rounded-md w-full peer pl-12 py-2 border-2 border-gray-200 placeholder-gray-300"
            type="text"
            name="card_cvc"
            autoComplete=""
            placeholder="&bull;&bull;&bull;"
            value={cvv}
            onChange={handleCvvChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </label>
      </div>
      <Button
        type="main"
        loading={createPaymentLoading}
        title="Оплатить"
        onClick={makePayment}
      />
    </div>
  );
};

export default CreditCardForm;
