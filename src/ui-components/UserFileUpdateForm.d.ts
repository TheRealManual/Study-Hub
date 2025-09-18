/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { UserFile } from "../models";
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
export declare type UserFileUpdateFormInputValues = {
    userID?: string;
    fileName?: string;
    originalName?: string;
    fileType?: string;
    fileSize?: number;
    s3Key?: string;
    url?: string;
    description?: string;
    isPublic?: boolean;
    createdAt?: string;
    updatedAt?: string;
};
export declare type UserFileUpdateFormValidationValues = {
    userID?: ValidationFunction<string>;
    fileName?: ValidationFunction<string>;
    originalName?: ValidationFunction<string>;
    fileType?: ValidationFunction<string>;
    fileSize?: ValidationFunction<number>;
    s3Key?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    isPublic?: ValidationFunction<boolean>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserFileUpdateFormOverridesProps = {
    UserFileUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    fileName?: PrimitiveOverrideProps<TextFieldProps>;
    originalName?: PrimitiveOverrideProps<TextFieldProps>;
    fileType?: PrimitiveOverrideProps<TextFieldProps>;
    fileSize?: PrimitiveOverrideProps<TextFieldProps>;
    s3Key?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    isPublic?: PrimitiveOverrideProps<SwitchFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserFileUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserFileUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userFile?: UserFile;
    onSubmit?: (fields: UserFileUpdateFormInputValues) => UserFileUpdateFormInputValues;
    onSuccess?: (fields: UserFileUpdateFormInputValues) => void;
    onError?: (fields: UserFileUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserFileUpdateFormInputValues) => UserFileUpdateFormInputValues;
    onValidate?: UserFileUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserFileUpdateForm(props: UserFileUpdateFormProps): React.ReactElement;
