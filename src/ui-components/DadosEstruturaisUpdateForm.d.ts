/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { DadosEstruturais } from "../models";
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
export declare type DadosEstruturaisUpdateFormInputValues = {
    dataconstrucao?: string;
    idadepredial?: string;
    qtdunidades?: string;
    qtdaptsresidenciais?: string;
    qtdsalascomerciais?: string;
};
export declare type DadosEstruturaisUpdateFormValidationValues = {
    dataconstrucao?: ValidationFunction<string>;
    idadepredial?: ValidationFunction<string>;
    qtdunidades?: ValidationFunction<string>;
    qtdaptsresidenciais?: ValidationFunction<string>;
    qtdsalascomerciais?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DadosEstruturaisUpdateFormOverridesProps = {
    DadosEstruturaisUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    dataconstrucao?: PrimitiveOverrideProps<TextFieldProps>;
    idadepredial?: PrimitiveOverrideProps<TextFieldProps>;
    qtdunidades?: PrimitiveOverrideProps<TextFieldProps>;
    qtdaptsresidenciais?: PrimitiveOverrideProps<TextFieldProps>;
    qtdsalascomerciais?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DadosEstruturaisUpdateFormProps = React.PropsWithChildren<{
    overrides?: DadosEstruturaisUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    dadosEstruturais?: DadosEstruturais;
    onSubmit?: (fields: DadosEstruturaisUpdateFormInputValues) => DadosEstruturaisUpdateFormInputValues;
    onSuccess?: (fields: DadosEstruturaisUpdateFormInputValues) => void;
    onError?: (fields: DadosEstruturaisUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DadosEstruturaisUpdateFormInputValues) => DadosEstruturaisUpdateFormInputValues;
    onValidate?: DadosEstruturaisUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DadosEstruturaisUpdateForm(props: DadosEstruturaisUpdateFormProps): React.ReactElement;
