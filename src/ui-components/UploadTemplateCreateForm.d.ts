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
export declare type UploadTemplateCreateFormInputValues = {
    userID?: string;
    name?: string;
    description?: string;
    templateType?: string;
    structure?: string;
    downloadCount?: number;
    createdAt?: string;
    updatedAt?: string;
};
export declare type UploadTemplateCreateFormValidationValues = {
    userID?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    templateType?: ValidationFunction<string>;
    structure?: ValidationFunction<string>;
    downloadCount?: ValidationFunction<number>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UploadTemplateCreateFormOverridesProps = {
    UploadTemplateCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    templateType?: PrimitiveOverrideProps<TextFieldProps>;
    structure?: PrimitiveOverrideProps<TextAreaFieldProps>;
    downloadCount?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UploadTemplateCreateFormProps = React.PropsWithChildren<{
    overrides?: UploadTemplateCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UploadTemplateCreateFormInputValues) => UploadTemplateCreateFormInputValues;
    onSuccess?: (fields: UploadTemplateCreateFormInputValues) => void;
    onError?: (fields: UploadTemplateCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UploadTemplateCreateFormInputValues) => UploadTemplateCreateFormInputValues;
    onValidate?: UploadTemplateCreateFormValidationValues;
} & React.CSSProperties>;
export default function UploadTemplateCreateForm(props: UploadTemplateCreateFormProps): React.ReactElement;
