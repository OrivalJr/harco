/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ConvencoesRegulamentos } from "../models";
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
export declare type ConvencoesRegulamentosUpdateFormInputValues = {
    possuiconvencao?: string;
    possuiregistro?: string;
    dataregistro?: string;
    cartorio?: string;
    possuiregulamentointerno?: string;
};
export declare type ConvencoesRegulamentosUpdateFormValidationValues = {
    possuiconvencao?: ValidationFunction<string>;
    possuiregistro?: ValidationFunction<string>;
    dataregistro?: ValidationFunction<string>;
    cartorio?: ValidationFunction<string>;
    possuiregulamentointerno?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConvencoesRegulamentosUpdateFormOverridesProps = {
    ConvencoesRegulamentosUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    possuiconvencao?: PrimitiveOverrideProps<TextFieldProps>;
    possuiregistro?: PrimitiveOverrideProps<TextFieldProps>;
    dataregistro?: PrimitiveOverrideProps<TextFieldProps>;
    cartorio?: PrimitiveOverrideProps<TextFieldProps>;
    possuiregulamentointerno?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ConvencoesRegulamentosUpdateFormProps = React.PropsWithChildren<{
    overrides?: ConvencoesRegulamentosUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    convencoesRegulamentos?: ConvencoesRegulamentos;
    onSubmit?: (fields: ConvencoesRegulamentosUpdateFormInputValues) => ConvencoesRegulamentosUpdateFormInputValues;
    onSuccess?: (fields: ConvencoesRegulamentosUpdateFormInputValues) => void;
    onError?: (fields: ConvencoesRegulamentosUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ConvencoesRegulamentosUpdateFormInputValues) => ConvencoesRegulamentosUpdateFormInputValues;
    onValidate?: ConvencoesRegulamentosUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ConvencoesRegulamentosUpdateForm(props: ConvencoesRegulamentosUpdateFormProps): React.ReactElement;
