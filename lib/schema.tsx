/** @format */

import { z } from "zod";

export function createUserSchema(t: (key: string) => string) {
  return z
    .object({
      email: z.string().email(t("email.validation")),
      password: z.string().min(6, t("password.validation")),
      confirmPassword: z.string().min(6, t("confirmPassword.validation")),
      firstName: z.string().min(2, t("firstName.validation")),
      lastName: z.string().min(2, t("lastName.validation")),
      accountType: z.enum(["agence", "customer"]),
      identityDocument: z
        .any()
        .refine((file) => {
            if(file === undefined || !file.length) return
            return file
        }, {
          message: t("identityDocument.validation"),
        }),
      agencyLicense: z.any().optional(),
      businessAddressProof: z.any().optional(),
      
          accountHolderName: z
            .string()
            .min(2, t("bankDetails.accountHolderName.validation")),
          bankName: z.string().min(2, t("bankDetails.bankName.validation")),
          iban: z.string().min(10, t("bankDetails.iban.validation")),
          accountNumber: z
            .string()
            .min(6, t("bankDetails.accountNumber.validation")),
        
      drivingLicense:  z.any()
        .refine((file) => {
            if(file === undefined || !file.length) return
            return file
        }, {
          message: t("drivingLicense.validation"),
        }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t("confirmPassword.validation"),
    })
    .superRefine((data, ctx) => {
      if (data.accountType === "agence") {
        if (!data.agencyLicense) {
          ctx.addIssue({
            code: "custom",
            message: t("agencyLicense.validation"),
          });
        }
        if (!data.businessAddressProof) {
          ctx.addIssue({
            code: "custom",
            message: t("businessAddressProof.validation"),
          });
        }
      } else if (data.accountType === "customer") {
        if (!data.drivingLicense) {
          ctx.addIssue({
            code: "custom",
            message: t("drivingLicense.validation"),
          });
        }
    }
    });
}

export type TypeCreateUserSchema = z.infer<
  Awaited<ReturnType<typeof createUserSchema>>
>;
