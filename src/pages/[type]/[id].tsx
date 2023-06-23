import { fetchEmployeeApi } from "@/entities/employees/api/fetchEmployeeApi";
import LeaveTating from "@/entities/employees/ui/rate/LeaveTating";
import ShowSum from "@/entities/employees/ui/showSum/ShowSum";
import ArrowIcon from "@/shared/svg/ArrowIcon";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import useOutsideClick from "@/shared/hooks/useOutsideClick";
import { Employee } from "@/entities/employees/config/types";
import EntityDetailCard from "@/shared/EntityDetailCard";
import Button from "@/shared/Button";
import { setPayment } from "@/entities/payments/slice";
import { useDispatch, useSelector } from "react-redux";
import SuccessPopup from "@/shared/SuccessPopup";
import { RootState } from "@/App/redux/store";
import GooglePayButton from "@google-pay/button-react";

export default function EmployeePage() {
  const [anotherPrice, setAnotherPrice] = useState(false);
  const [paymentValue, setPaymentValue] = useState("");
  const [paymentValueError, setPaymentValueError] = useState(false);
  const [inputPaymentValue, setInputPaymentValue] = useState("");
  const [isPickedAnotherSum, setPickedAnotherSum] = useState(false);
  const [inputPaymentValueError, setInputPaymentValueError] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const { review, rate } = useSelector((state: RootState) => state.payments);

  const [user, setUser] = useState<Employee | null>(null);

  const ref = useRef(null);
  const modalRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;

  useEffect(() => {
    async function fetchUser() {
      const { data } = await fetchEmployeeApi(id as string);

      setUser(data as Employee);
    }

    fetchUser();
  });

  let modalStyle = anotherPrice
    ? "scale-y-1 origin-bottom fixed z-50 bottom-0 left-0 right-0 p-4 bg-main_bg rounded-t-lg transition-all"
    : "scale-y-0 origin-bottom fixed z-50 bottom-0 left-0 right-0 p-4 bg-main_bg rounded-t-lg transition-all";

  function goBack() {
    router.back();
  }

  const listSum = [
    {
      sum: "10000",
    },
    {
      sum: "15000",
    },
    {
      sum: "20000",
    },
  ];

  const inputStyle = inputPaymentValueError
    ? "rounded-lg active:outline-none py-2 px-4 w-full focus:outline-none mb-8 border-error_color border-2"
    : "rounded-lg active:outline-none py-2 px-4 w-full focus:outline-none mb-8";

  useEffect(() => {
    if (anotherPrice) {
      (ref.current as HTMLInputElement | null)?.focus();
    }
  }, [anotherPrice]);

  function pickSum(value: string) {
    setPaymentValue(value);
    setPaymentValueError(false);
    setPickedAnotherSum(false);
  }

  function handleAnotherSum() {
    setAnotherPrice(true);
  }
  
  function closeInput() {
    setAnotherPrice(false);
  }

  function makePayment(goolePayData: any) {
    if (!paymentValue && !inputPaymentValue) {
      setPaymentValueError(true);
    } else {
      const data = {
        amount: paymentValue || inputPaymentValue,
        currency: "sum",
        username: id,
        review,
        rate,
        tokenizationData: goolePayData.paymentMethodData.tokenizationData,
      };
      console.log(goolePayData);
      console.log(data);
      console.log(JSON.stringify(data));
      setSuccess(true);
      setPaymentValueError(false);
    }
  }

  useEffect(() => {
    dispatch(
      setPayment({ type: "value", value: paymentValue || inputPaymentValue })
    );
  }, [inputPaymentValue, paymentValue]);

  function handleInputSum() {
    if (!inputPaymentValue) {
      setInputPaymentValueError(true);
    } else {
      setInputPaymentValueError(false);
      setPaymentValue("");
      setPickedAnotherSum(true);
      setAnotherPrice(false);
      setPaymentValueError(false);
    }
    (ref.current as HTMLInputElement | null)?.focus();
  }

  useOutsideClick(modalRef, () => {
    setAnotherPrice(false);
  });

  return (
    <div className=" pt-5 h-screen   ">
      {isSuccess ? (
        <SuccessPopup onClose={() => setSuccess(false)} />
      ) : (
        <div>
          <div
            onClick={goBack}
            className=" rotate-180 inline-block relative top-5"
          >
            <ArrowIcon />
          </div>
          <div className=" mb-8">
            <EntityDetailCard
              name={`${user?.firstName} ${user?.lastName}`}
              image={user?.image}
              type={user?.type}
            />
          </div>
          <div className=" mb-8">
            <h4 className=" mb-4 text-base font-bold">Выберите сумму</h4>
            <div className="grid grid-cols-2 gap-4 mb-2">
              {listSum?.map((item, index) => {
                return (
                  <ShowSum
                    key={index}
                    sum={item.sum}
                    onClick={pickSum}
                    error={paymentValueError && !isPickedAnotherSum}
                    selectedValue={paymentValue}
                  />
                );
              })}
              <ShowSum
                onClick={handleAnotherSum}
                error={paymentValueError && !isPickedAnotherSum}
                sum="Другая сумма"
                selectedValue={isPickedAnotherSum ? "Другая сумма" : ""}
              />
            </div>
            {paymentValueError && (
              <h5 className=" text-error_color text-xs ">Выберите сумму</h5>
            )}
          </div>

          <div className=" mb-8">
            <LeaveTating />
          </div>
          <div>
            <div className="mb-4">
              <Button
                type="main"
                title="Оплатить картой"
                onClick={makePayment}
              />
            </div>
            <div className=" mb-4">
              <GooglePayButton
                environment="TEST"
                paymentRequest={{
                  apiVersion: 2,
                  apiVersionMinor: 0,
                  allowedPaymentMethods: [
                    {
                      type: "CARD",
                      parameters: {
                        allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                        allowedCardNetworks: ["MASTERCARD", "VISA"],
                      },
                      tokenizationSpecification: {
                        type: "PAYMENT_GATEWAY",
                        parameters: {
                          gateway: "example",
                          gatewayMerchantId: "exampleGatewayMerchantId",
                        },
                      },
                    },
                  ],
                  merchantInfo: {
                    merchantId: "12345678901234567890",
                    merchantName: "Demo Merchant",
                  },
                  transactionInfo: {
                    totalPriceStatus: "FINAL",
                    totalPriceLabel: "Total",
                    totalPrice: paymentValue || inputPaymentValue + ".00",
                    currencyCode: "USD",
                    countryCode: "UZ",
                  },
                }}
                buttonSizeMode="fill"
                style={{ width: "100%" }}
                buttonType="pay"
                buttonLocale="ru"
                onLoadPaymentData={makePayment}
              />
            </div>
            {/* <div className=" mb-8">
              <Button
                type="secondary"
                title="Оплатить через"
                bg="black"
                icon={
                  <Image
                    src="/image/google.png"
                    alt="google pay"
                    width="64"
                    height="24"
                  />
                }
                onClick={makePayment}
              />
            </div> */}
          </div>
          <div className=" pb-4">
            <p className=" text-xs text-second_title mb-4">
              Я хочу покрыть комиссию сервиса 50 сум, чтобы покрыть издержки на
              перевод средств сотруднику.
            </p>
            <p className=" text-xs text-second_title mb-4">
              Я согласен (-а) с условиями{" "}
              <span className=" text-main_button">
                Пользовательского соглашения и Политики обработки персональных
                данных.
              </span>
            </p>
          </div>
          {anotherPrice && (
            <div className=" fixed top-0 left-0 right-0 bottom-0 bg-black opacity-40"></div>
          )}

          {anotherPrice && (
            <div ref={modalRef} className={modalStyle}>
              <div onClick={closeInput} className=" pb-6 -mt-4 pt-4">
                <div className=" bg-bottom_sheet h-1 w-12 rounded-sm text-center mx-auto  "></div>
              </div>
              <h3 className="text-base font-bold mb-6">Чаевые</h3>

              <input
                ref={ref}
                type="number"
                placeholder="Введите сумму"
                onChange={(e) => setInputPaymentValue(e.target.value)}
                className={inputStyle}
              />
              {inputPaymentValueError && (
                <h5 className=" text-xs text-error_color -mt-6 pb-4">
                  Введите сумму
                </h5>
              )}

              <div className=" mb-4">
                <Button
                  type="main"
                  title="Подтвердить"
                  onClick={handleInputSum}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
