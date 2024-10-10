/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type CondominiosCreateFormInputValues = {
    nome?: string;
    cnpj?: string;
    endereco?: string;
    bairro?: string;
};
export declare type CondominiosCreateFormValidationValues = {
    nome?: ValidationFunction<string>;
    cnpj?: ValidationFunction<string>;
    endereco?: ValidationFunction<string>;
    bairro?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CondominiosCreateFormOverridesProps = {
    CondominiosCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nome?: PrimitiveOverrideProps<TextFieldProps>;
    cnpj?: PrimitiveOverrideProps<TextFieldProps>;
    endereco?: PrimitiveOverrideProps<TextFieldProps>;
    bairro?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CondominiosCreateFormProps = React.PropsWithChildren<{
    overrides?: CondominiosCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CondominiosCreateFormInputValues) => CondominiosCreateFormInputValues;
    onSuccess?: (fields: CondominiosCreateFormInputValues) => void;
    onError?: (fields: CondominiosCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CondominiosCreateFormInputValues) => CondominiosCreateFormInputValues;
    onValidate?: CondominiosCreateFormValidationValues;
} & React.CSSProperties>;
export default function CondominiosCreateForm(props: CondominiosCreateFormProps): React.ReactElement;
