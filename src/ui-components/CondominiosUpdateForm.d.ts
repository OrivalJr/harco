/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Condominios } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CondominiosUpdateFormInputValues = {
    nome?: string;
    cnpj?: string;
    endereco?: string;
    bairro?: string;
};
export declare type CondominiosUpdateFormValidationValues = {
    nome?: ValidationFunction<string>;
    cnpj?: ValidationFunction<string>;
    endereco?: ValidationFunction<string>;
    bairro?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CondominiosUpdateFormOverridesProps = {
    CondominiosUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nome?: PrimitiveOverrideProps<TextFieldProps>;
    cnpj?: PrimitiveOverrideProps<TextFieldProps>;
    endereco?: PrimitiveOverrideProps<TextFieldProps>;
    bairro?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CondominiosUpdateFormProps = React.PropsWithChildren<{
    overrides?: CondominiosUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    condominios?: Condominios;
    onSubmit?: (fields: CondominiosUpdateFormInputValues) => CondominiosUpdateFormInputValues;
    onSuccess?: (fields: CondominiosUpdateFormInputValues) => void;
    onError?: (fields: CondominiosUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CondominiosUpdateFormInputValues) => CondominiosUpdateFormInputValues;
    onValidate?: CondominiosUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CondominiosUpdateForm(props: CondominiosUpdateFormProps): React.ReactElement;
