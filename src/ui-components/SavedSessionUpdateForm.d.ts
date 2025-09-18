/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { SavedSession } from "../models";
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
export declare type SavedSessionUpdateFormInputValues = {
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
export declare type SavedSessionUpdateFormValidationValues = {
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
export declare type SavedSessionUpdateFormOverridesProps = {
    SavedSessionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type SavedSessionUpdateFormProps = React.PropsWithChildren<{
    overrides?: SavedSessionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    savedSession?: SavedSession;
    onSubmit?: (fields: SavedSessionUpdateFormInputValues) => SavedSessionUpdateFormInputValues;
    onSuccess?: (fields: SavedSessionUpdateFormInputValues) => void;
    onError?: (fields: SavedSessionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SavedSessionUpdateFormInputValues) => SavedSessionUpdateFormInputValues;
    onValidate?: SavedSessionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SavedSessionUpdateForm(props: SavedSessionUpdateFormProps): React.ReactElement;
