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
export declare type ConvencoesRegulamentosCreateFormInputValues = {
    possuiconvencao?: string;
    possuiregistro?: string;
    dataregistro?: string;
    cartorio?: string;
    possuiregulamentointerno?: string;
};
export declare type ConvencoesRegulamentosCreateFormValidationValues = {
    possuiconvencao?: ValidationFunction<string>;
    possuiregistro?: ValidationFunction<string>;
    dataregistro?: ValidationFunction<string>;
    cartorio?: ValidationFunction<string>;
    possuiregulamentointerno?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConvencoesRegulamentosCreateFormOverridesProps = {
    ConvencoesRegulamentosCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    possuiconvencao?: PrimitiveOverrideProps<TextFieldProps>;
    possuiregistro?: PrimitiveOverrideProps<TextFieldProps>;
    dataregistro?: PrimitiveOverrideProps<TextFieldProps>;
    cartorio?: PrimitiveOverrideProps<TextFieldProps>;
    possuiregulamentointerno?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ConvencoesRegulamentosCreateFormProps = React.PropsWithChildren<{
    overrides?: ConvencoesRegulamentosCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ConvencoesRegulamentosCreateFormInputValues) => ConvencoesRegulamentosCreateFormInputValues;
    onSuccess?: (fields: ConvencoesRegulamentosCreateFormInputValues) => void;
    onError?: (fields: ConvencoesRegulamentosCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ConvencoesRegulamentosCreateFormInputValues) => ConvencoesRegulamentosCreateFormInputValues;
    onValidate?: ConvencoesRegulamentosCreateFormValidationValues;
} & React.CSSProperties>;
export default function ConvencoesRegulamentosCreateForm(props: ConvencoesRegulamentosCreateFormProps): React.ReactElement;
