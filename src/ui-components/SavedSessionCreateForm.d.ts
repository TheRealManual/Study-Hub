/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type SavedSessionCreateFormInputValues = {
    userID?: string;
    name?: string;
    description?: string;
    content?: string;
    totalItems?: number;
    completedItems?: number;
    lastAccessed?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type SavedSessionCreateFormValidationValues = {
    userID?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    totalItems?: ValidationFunction<number>;
    completedItems?: ValidationFunction<number>;
    lastAccessed?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SavedSessionCreateFormOverridesProps = {
    SavedSessionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextAreaFieldProps>;
    totalItems?: PrimitiveOverrideProps<TextFieldProps>;
    completedItems?: PrimitiveOverrideProps<TextFieldProps>;
    lastAccessed?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SavedSessionCreateFormProps = React.PropsWithChildren<{
    overrides?: SavedSessionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SavedSessionCreateFormInputValues) => SavedSessionCreateFormInputValues;
    onSuccess?: (fields: SavedSessionCreateFormInputValues) => void;
    onError?: (fields: SavedSessionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SavedSessionCreateFormInputValues) => SavedSessionCreateFormInputValues;
    onValidate?: SavedSessionCreateFormValidationValues;
} & React.CSSProperties>;
export default function SavedSessionCreateForm(props: SavedSessionCreateFormProps): React.ReactElement;
