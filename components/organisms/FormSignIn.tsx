/** @format */

"use client";
import React, { useEffect, useMemo, useState } from "react";
import TitleSection from "../molecules/TitleSection";
import Button from "../atoms/Button";
import Divider from "../molecules/Divider";
import SocialButtons from "../molecules/SocialButtons";
import TermsAndPrivacy from "../molecules/TermsAndPrivacy";
import { useLocale, useTranslations } from "next-intl";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import Input from "../atoms/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUserSchema, TypeCreateUserSchema } from "@/lib/schema";

const defaultValues: TypeCreateUserSchema = {
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
  accountType: "customer",
  identityDocument: undefined,
  agencyLicense: undefined,
  businessAddressProof: undefined,
    accountHolderName: "",
    bankName: "",
    iban: "",
    accountNumber: "",
  
  drivingLicense: undefined,
};

const FormSignIn = () => {
  const t = useTranslations("signIn.page");
  const router = useRouter();
  const locale = useLocale();
  const [step, setStep] = useState(1);
  const [isSignUp, setIsSignUp] = useState(false);

  const form = useForm<TypeCreateUserSchema>({
    resolver: zodResolver(createUserSchema(t)),
    mode: "onTouched",
    defaultValues,
  });

  useEffect(() => {
    form.reset();
  }, [locale]);

  const handleNext = async () => {
    const fieldsToValidate: { [key: number]: string[] } = {
      1: ["email", "password", ...(isSignUp ? ["confirmPassword"] : [])],
      2: ["firstName", "lastName"],
      3: ["identityDocument"],
      5: ["accountHolderName", "bankName", "iban", "accountNumber"],
      4:
        form.watch("accountType") === "agence"
          ? ["agencyLicense", "businessAddressProof"]
          : ["drivingLicense"],
    };

    form.clearErrors(fieldsToValidate[step] as (keyof TypeCreateUserSchema)[]);

    const touchedFields = Object.keys(form.formState.touchedFields);
    if (touchedFields.length === 0) return;

    const isValid = await form.trigger(fieldsToValidate[step] as any);
    if (!isValid) return;

    if (!isSignUp || step >= 5) return;

    setStep((prev) => prev + 1);
  };

  const reset = () => {
    setStep(1);
    setIsSignUp(!isSignUp);
    // form.reset();
  };

  const handlePrev = () => setStep((prev) => prev - 1);

  const onSubmit: SubmitHandler<TypeCreateUserSchema> = (data) => {
    console.log(data);
    // form.reset();
    // router.push("/");
  };

  

  return (
    <div className='max-w-md p-5 gap-2 flex flex-col mr-36 justify-between items-center'>
      <TitleSection
        title={t("title")}
        desc={t("description")}
        titleClass='text-2xl'
      />

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-full flex flex-col gap-2'>
        {step === 1 && (
          <>
            <Input
              id='email'
              name='email'
              type='text'
              label={t("email.label")}
              placeholder={t("email.placeholder")}
              register={form.register}
              error={form.formState?.errors?.email?.message ?? ""}
            />
            <Input
              name='password'
              id='password'
              label={t("password.label")}
              placeholder={t("password.placeholder")}
              type='password'
              register={form.register}
              error={form.formState?.errors?.password?.message ?? ""}
            />
          </>
        )}
        {step === 1 && isSignUp && (
          <>
            <Input
              name='confirmPassword'
              id='confirmPassword'
              label={t("confirmPassword.label")}
              placeholder={t("confirmPassword.placeholder")}
              type='password'
              register={form.register}
              error={form.formState?.errors?.confirmPassword?.message ?? ""}
            />
          </>
        )}
        {step === 2 && (
          <>
            <Input
              name='firstName'
              id='firstName'
              type='text'
              label={t("firstName.label")}
              placeholder={t("firstName.placeholder")}
              register={form.register}
              error={form.formState?.errors?.firstName?.message ?? ""}
            />
            <Input
              name='lastName'
              id='lastName'
              label={t("lastName.label")}
              placeholder={t("lastName.placeholder")}
              type='text'
              register={form.register}
              error={form.formState?.errors?.lastName?.message ?? ""}
            />
          </>
        )}
        {step === 3 && isSignUp && (
          <>
            <Input
              name='accountType'
              id='accountType'
              label={t("accountType.label")}
              type='radio'
              defaultValue='customer'
              options={[
                {
                  label: t("accountType.agence"),
                  value: "agence",
                },
                {
                  label: t("accountType.customer"),
                  value: "customer",
                },
              ]}
              register={form.register}
              error={form.formState?.errors?.accountType?.message ?? ""}
            />
            <Input
              name='identityDocument'
              id='identityDocument'
              label={t("identityDocument.label")}
              type='file'
              register={form.register}
              error={
                form.formState?.errors?.identityDocument?.message?.toString() ??
                ""
              }
            />
          </>
        )}
        {step === 5 && isSignUp && form.watch("accountType") === "agence" && (
          <>
            <Input
              name='agencyLicense'
              id='agencyLicense'
              label={t("agencyLicense.label")}
              type='file'
              register={form.register}
              error={
                form.formState?.errors?.agencyLicense?.message?.toString() ?? ""
              }
            />
            <Input
              name='businessAddressProof'
              id='businessAddressProof'
              label={t("businessAddressProof.label")}
              type='file'
              register={form.register}
              error={
                form.formState?.errors?.businessAddressProof?.message?.toString() ??
                ""
              }
            />
          </>
        )}

        {step === 4 && isSignUp && (
          <>
            <Input
              name='accountHolderName'
              id='bankDetails.accountHolderName'
              label={t("bankDetails.accountHolderName.label")}
              placeholder={t("bankDetails.accountHolderName.placeholder")}
              type='text'
              register={form.register}
              error={
                form.formState?.errors?.accountHolderName
                  ?.message ?? ""
              }
            />
            <Input
              name='bankName'
              id='bankDetails.bankName'
              label={t("bankDetails.bankName.label")}
              placeholder={t("bankDetails.bankName.placeholder")}
              type='text'
              register={form.register}
              error={
                form.formState?.errors?.bankName?.message ?? ""
              }
            />
            <Input
              name='iban'
              id='bankDetails.iban'
              label={t("bankDetails.iban.label")}
              placeholder={t("bankDetails.iban.placeholder")}
              type='text'
              register={form.register}
              error={form.formState?.errors?.iban?.message ?? ""}
            />
            <Input
              name='accountNumber'
              id='bankDetails.accountNumber'
              label={t("bankDetails.accountNumber.label")}
              placeholder={t("bankDetails.accountNumber.placeholder")}
              type='text'
              register={form.register}
              error={
                form.formState?.errors?.accountNumber?.message ??
                ""
              }
            />
          </>
        )}

        {step === 5 && isSignUp && form.watch("accountType") === "customer" && (
          <Input
            name='drivingLicense'
            id='drivingLicense'
            label={t("drivingLicense.label")}
            type='file'
            register={form.register}
            error={
              form.formState?.errors?.drivingLicense?.message?.toString() ?? ""
            }
          />
        )}

        <div className='flex justify-between w-full'>
          {step > 1 && (
            <Button
              type='button'
              onClick={handlePrev}
              text='السابق'
              className='w-1/3 justify-center  border border-white'
            />
          )}
          <Button
            type={!isSignUp || (isSignUp && step === 5) ? "submit" : "button"}
            onClick={handleNext}
            text={t(`${isSignUp ? "buttons.next" : "buttons.submit"}`)}
            className={`${
              step <= 1 ? "w-full" : "w-1/3"
            } justify-center dark:bg-dark-accent`}
          />
        </div>

        <span
          onClick={reset}
          className='text-xs hover:underline text-center text-blue-600 cursor-pointer'>
          {t(
            `${
              isSignUp ? "buttons.alreadyHaveAccount" : "buttons.createAccount"
            }`
          )}
        </span>
      </form>
      {step <= 1 && !isSignUp && (
        <>
          <Divider text={t("or")} />
          <SocialButtons />
        </>
      )}
      <TermsAndPrivacy />
    </div>
  );
};

export default FormSignIn;
