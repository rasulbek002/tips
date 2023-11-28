import Button from "@/shared/Button";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import SuccessPopup from "@/shared/SuccessPopup";

const CreditCardForm = ({ sum }: { sum: number }) => {
  const [verifyCode, setVerifyCode] = useState({ state: false, code: "" });
  const [verify, setVerify] = useState<any>(false);
  const [createPaymentLoading, setCreatePaymentLoading] = useState(false);
  const [verifyCodeLoading, setVerifyCodeLoading] = useState(false);
  const [paymentSucceeded, setPaymentSucceeded] = useState<boolean | unknown>(
    false
  );
  const [paymentFailed, setPaymentFailed] = useState(false);
  const [token, setToken] = useState(null);
  const router = useRouter();
  const { id } = router.query;

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

  const makePayment = async () => {
    setCreatePaymentLoading(true);
    const endpoint = "https://checkout.test.paycom.uz/api";
    const authHeader = "ZPDODSiTYKuX0jyO7Kl2to4rQbNwG08jbghj";

    const regex = /(\d{2})(\d{2})/;

    // Use the regex to extract and format the text
    const formattedDate = expireDate.replace(regex, "$1/$2");

    const requestBody = {
      jsonrpc: "2.0",
      method: "cards.create",
      params: {
        card: { number: cardNumber, expire: formattedDate },
        save: false,
      },
      id,
    };

    const createdRequest: any = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          jsonrpc: "2.0",
          id: 123,
          result: {
            card: {
              number: "860006******6311",
              expire: "03/99",
              token:
                "NTg0YTg0ZDYyYWJiNWNhYTMxMDc5OTE0X1VnYU02ME92IUttWHVHRThJODRJNWE0Xl9EYUBPQCZjNSlPRlpLIWNWRz1PNFp6VkIpZU0kQjJkayoyVUVtUuKElmt4JTJYWj9VQGNAQyVqT1pOQ3VXZ2NyajBEMSYkYj0kVj9NXikrJE5HNiN3K25pKHRQOEVwOGpOcUYxQ2dtemk9dDUwKDNATjd2XythbibihJYoJispJUtuREhlaClraGlJWTlLMihrLStlRjd6MFI3VCgjVDlpYjQ1ZThaMiojPVNTZylYJlFWSjlEZGFuSjZDNDJLdlhXP3YmV1B2dkRDa3g5X2l4N28oU0pOVEpSeXZKYnkjK0h3ViZfdmlhUHMp",
              recurrent: true,
              verify: false,
            },
          },
        });
      }, 1000);
    });

    const {
      result: {
        card: { token },
      },
    } = createdRequest;

    setToken(token);

    const verifyRequest = {
      id,
      method: "cards.get_verify_code",
      params: {
        token,
      },
    };

    const verify = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          jsonrpc: "2.0",
          id: 123,
          result: {
            sent: true,
            phone: "99890*****31",
            wait: 60000,
          },
        });
      }, 1000);
    });

    setVerify(true);
    setCreatePaymentLoading(false);

    // axios
    //   .post(endpoint, requestBody, {
    //     headers: {
    //       "X-Auth": authHeader,
    //       "Cache-Control": "no-cache",
    //     },
    //   })
    //   .then((response) => {
    //     setPayment(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Payment request failed", error);
    //     setPayment(null);
    //   });
  };

  const verifyCodeMethod = async () => {
    const params = {
      id: 123,
      method: "cards.verify",
      params: {
        token:
          "NTg0YTg0ZDYyYWJiNWNhYTMxMDc5OTE0X1VnYU02ME92IUttWHVHRThJODRJNWE0Xl9EYUBPQCZjNSlPRlpLIWNWRz1PNFp6VkIpZU0kQjJkayoyVUVtUuKElmt4JTJYWj9VQGNAQyVqT1pOQ3VXZ2NyajBEMSYkYj0kVj9NXikrJE5HNiN3K25pKHRQOEVwOGpOcUYxQ2dtemk9dDUwKDNATjd2XythbibihJYoJispJUtuREhlaClraGlJWTlLMihrLStlRjd6MFI3VCgjVDlpYjQ1ZThaMiojPVNTZylYJlFWSjlEZGFuSjZDNDJLdlhXP3YmV1B2dkRDa3g5X2l4N28oU0pOVEpSeXZKYnkjK0h3ViZfdmlhUHMp",
        code: "666666",
      },
    };

    setVerifyCodeLoading(true);

    try {
      const data = await new Promise((resolve, reject) => {
        setTimeout(() => {
          // resolve({
          //   jsonrpc: "2.0",
          //   id: 123,
          //   result: {
          //     card: {
          //       number: "860006******6311",
          //       expire: "03/99",
          //       token:
          //         "NTg0YTgxZWYyYWJiNWNhYTMxMDc5OTExXyVwOTY4TzI3MTJRQ28lWmsoREEyRClYOCtxZ18kVWRLRm0xP3FucVUzJChZazhFV3I1dmtrQiZUaFU5MzZRdSlGbUJPSEh2K1IoWU0lYSg3ZEYlK1QhTUV4P3pUU+KElkMkXjNuIUR6U19pdjY4b3Ffbkt3ajImZTRhZll0dUptNjBVMUF4KXJKJD0qTlNeQmJ5X2Q3bXZNRnZ2UXhfU25TS0dpcGc9V1doUEZxKSM5R0dJYjA9U2dGX2ReZ3lATeKElj9mZWZJS3MzKVp5MjFeOVY5cE8jZWh6cHZLeWZXKSF2PVBfVVU4ei1Gbj82JkI3YjhuRCFWa1omaDB4JEliQm8h",
          //       recurrent: true,
          //       verify: true,
          //     },
          //   },
          // });

          reject({
            message: "error happened",
          });
        }, 1000);
      });

      setPaymentSucceeded(data);
    } catch (e: any) {
      setPaymentFailed(e.message);
    }

    setVerifyCodeLoading(true);
    // axios
    //   .post(endpoint, params, {
    //     headers: {
    //       "X-Auth": authHeader,
    //       "Cache-Control": "no-cache",
    //     },
    //   })
    //   .then((response) => {
    //     setPayment(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Payment request failed", error);
    //     setPayment(null);
    //   });
  };

  function onPaymentSucceeded() {
    setPaymentSucceeded(false);
    router.push("/");
  }

  function onPaymentFailed() {
    setPaymentFailed(false);
    router.push("/");
  }

  return (
    <div className="absolute top-[30%]">
      {!verify ? (
        <div>
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
        </div>
      ) : (
        <div>
          {!paymentSucceeded && !paymentFailed && (
            <div className=" flex justify-center flex-col items-center mx-auto">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Введите пароль с SMS
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="otp"
                  type="text"
                  placeholder="1232"
                />
              </div>

              <Button
                type="main"
                loading={verifyCodeLoading}
                title="Оплатить"
                onClick={verifyCodeMethod}
              />
            </div>
          )}
          {paymentSucceeded ? (
            <SuccessPopup sum={sum} onClose={onPaymentSucceeded}></SuccessPopup>
          ) : null}
          {paymentFailed ? (
            <SuccessPopup
              sum={sum}
              icon="/image/payment-failure.png"
              text="Упс... Gплата не прошла"
              onClose={onPaymentFailed}
            ></SuccessPopup>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default CreditCardForm;
