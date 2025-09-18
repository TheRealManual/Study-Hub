/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { UserProgress } from "../models";
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
export declare type UserProgressUpdateFormInputValues = {
    userID?: string;
    topicID?: string;
    flashcardStats?: string;
    quizStats?: string;
    gameStats?: string;
    overallProgress?: number;
    lastActivity?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type UserProgressUpdateFormValidationValues = {
    userID?: ValidationFunction<string>;
    topicID?: ValidationFunction<string>;
    flashcardStats?: ValidationFunction<string>;
    quizStats?: ValidationFunction<string>;
    gameStats?: ValidationFunction<string>;
    overallProgress?: ValidationFunction<number>;
    lastActivity?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserProgressUpdateFormOverridesProps = {
    UserProgressUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    topicID?: PrimitiveOverrideProps<TextFieldProps>;
    flashcardStats?: PrimitiveOverrideProps<TextAreaFieldProps>;
    quizStats?: PrimitiveOverrideProps<TextAreaFieldProps>;
    gameStats?: PrimitiveOverrideProps<TextAreaFieldProps>;
    overallProgress?: PrimitiveOverrideProps<TextFieldProps>;
    lastActivity?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserProgressUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserProgressUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userProgress?: UserProgress;
    onSubmit?: (fields: UserProgressUpdateFormInputValues) => UserProgressUpdateFormInputValues;
    onSuccess?: (fields: UserProgressUpdateFormInputValues) => void;
    onError?: (fields: UserProgressUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserProgressUpdateFormInputValues) => UserProgressUpdateFormInputValues;
    onValidate?: UserProgressUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserProgressUpdateForm(props: UserProgressUpdateFormProps): React.ReactElement;
