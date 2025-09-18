/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { UserFile } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function UserFileUpdateForm(props) {
  const {
    id: idProp,
    userFile: userFileModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    userID: "",
    fileName: "",
    originalName: "",
    fileType: "",
    fileSize: "",
    s3Key: "",
    url: "",
    description: "",
    isPublic: false,
    createdAt: "",
    updatedAt: "",
  };
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [fileName, setFileName] = React.useState(initialValues.fileName);
  const [originalName, setOriginalName] = React.useState(
    initialValues.originalName
  );
  const [fileType, setFileType] = React.useState(initialValues.fileType);
  const [fileSize, setFileSize] = React.useState(initialValues.fileSize);
  const [s3Key, setS3Key] = React.useState(initialValues.s3Key);
  const [url, setUrl] = React.useState(initialValues.url);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [isPublic, setIsPublic] = React.useState(initialValues.isPublic);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userFileRecord
      ? { ...initialValues, ...userFileRecord }
      : initialValues;
    setUserID(cleanValues.userID);
    setFileName(cleanValues.fileName);
    setOriginalName(cleanValues.originalName);
    setFileType(cleanValues.fileType);
    setFileSize(cleanValues.fileSize);
    setS3Key(cleanValues.s3Key);
    setUrl(cleanValues.url);
    setDescription(cleanValues.description);
    setIsPublic(cleanValues.isPublic);
    setCreatedAt(cleanValues.createdAt);
    setUpdatedAt(cleanValues.updatedAt);
    setErrors({});
  };
  const [userFileRecord, setUserFileRecord] = React.useState(userFileModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(UserFile, idProp)
        : userFileModelProp;
      setUserFileRecord(record);
    };
    queryData();
  }, [idProp, userFileModelProp]);
  React.useEffect(resetStateValues, [userFileRecord]);
  const validations = {
    userID: [{ type: "Required" }],
    fileName: [{ type: "Required" }],
    originalName: [{ type: "Required" }],
    fileType: [{ type: "Required" }],
    fileSize: [{ type: "Required" }],
    s3Key: [{ type: "Required" }],
    url: [],
    description: [],
    isPublic: [],
    createdAt: [{ type: "Required" }],
    updatedAt: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          userID,
          fileName,
          originalName,
          fileType,
          fileSize,
          s3Key,
          url,
          description,
          isPublic,
          createdAt,
          updatedAt,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            UserFile.copyOf(userFileRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "UserFileUpdateForm")}
      {...rest}
    >
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={false}
        value={userID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID: value,
              fileName,
              originalName,
              fileType,
              fileSize,
              s3Key,
              url,
              description,
              isPublic,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.userID ?? value;
          }
          if (errors.userID?.hasError) {
            runValidationTasks("userID", value);
          }
          setUserID(value);
        }}
        onBlur={() => runValidationTasks("userID", userID)}
        errorMessage={errors.userID?.errorMessage}
        hasError={errors.userID?.hasError}
        {...getOverrideProps(overrides, "userID")}
      ></TextField>
      <TextField
        label="File name"
        isRequired={true}
        isReadOnly={false}
        value={fileName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              fileName: value,
              originalName,
              fileType,
              fileSize,
              s3Key,
              url,
              description,
              isPublic,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.fileName ?? value;
          }
          if (errors.fileName?.hasError) {
            runValidationTasks("fileName", value);
          }
          setFileName(value);
        }}
        onBlur={() => runValidationTasks("fileName", fileName)}
        errorMessage={errors.fileName?.errorMessage}
        hasError={errors.fileName?.hasError}
        {...getOverrideProps(overrides, "fileName")}
      ></TextField>
      <TextField
        label="Original name"
        isRequired={true}
        isReadOnly={false}
        value={originalName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              fileName,
              originalName: value,
              fileType,
              fileSize,
              s3Key,
              url,
              description,
              isPublic,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.originalName ?? value;
          }
          if (errors.originalName?.hasError) {
            runValidationTasks("originalName", value);
          }
          setOriginalName(value);
        }}
        onBlur={() => runValidationTasks("originalName", originalName)}
        errorMessage={errors.originalName?.errorMessage}
        hasError={errors.originalName?.hasError}
        {...getOverrideProps(overrides, "originalName")}
      ></TextField>
      <TextField
        label="File type"
        isRequired={true}
        isReadOnly={false}
        value={fileType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              fileName,
              originalName,
              fileType: value,
              fileSize,
              s3Key,
              url,
              description,
              isPublic,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.fileType ?? value;
          }
          if (errors.fileType?.hasError) {
            runValidationTasks("fileType", value);
          }
          setFileType(value);
        }}
        onBlur={() => runValidationTasks("fileType", fileType)}
        errorMessage={errors.fileType?.errorMessage}
        hasError={errors.fileType?.hasError}
        {...getOverrideProps(overrides, "fileType")}
      ></TextField>
      <TextField
        label="File size"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={fileSize}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              userID,
              fileName,
              originalName,
              fileType,
              fileSize: value,
              s3Key,
              url,
              description,
              isPublic,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.fileSize ?? value;
          }
          if (errors.fileSize?.hasError) {
            runValidationTasks("fileSize", value);
          }
          setFileSize(value);
        }}
        onBlur={() => runValidationTasks("fileSize", fileSize)}
        errorMessage={errors.fileSize?.errorMessage}
        hasError={errors.fileSize?.hasError}
        {...getOverrideProps(overrides, "fileSize")}
      ></TextField>
      <TextField
        label="S3 key"
        isRequired={true}
        isReadOnly={false}
        value={s3Key}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              fileName,
              originalName,
              fileType,
              fileSize,
              s3Key: value,
              url,
              description,
              isPublic,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.s3Key ?? value;
          }
          if (errors.s3Key?.hasError) {
            runValidationTasks("s3Key", value);
          }
          setS3Key(value);
        }}
        onBlur={() => runValidationTasks("s3Key", s3Key)}
        errorMessage={errors.s3Key?.errorMessage}
        hasError={errors.s3Key?.hasError}
        {...getOverrideProps(overrides, "s3Key")}
      ></TextField>
      <TextField
        label="Url"
        isRequired={false}
        isReadOnly={false}
        value={url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              fileName,
              originalName,
              fileType,
              fileSize,
              s3Key,
              url: value,
              description,
              isPublic,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.url ?? value;
          }
          if (errors.url?.hasError) {
            runValidationTasks("url", value);
          }
          setUrl(value);
        }}
        onBlur={() => runValidationTasks("url", url)}
        errorMessage={errors.url?.errorMessage}
        hasError={errors.url?.hasError}
        {...getOverrideProps(overrides, "url")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              fileName,
              originalName,
              fileType,
              fileSize,
              s3Key,
              url,
              description: value,
              isPublic,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <SwitchField
        label="Is public"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isPublic}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userID,
              fileName,
              originalName,
              fileType,
              fileSize,
              s3Key,
              url,
              description,
              isPublic: value,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.isPublic ?? value;
          }
          if (errors.isPublic?.hasError) {
            runValidationTasks("isPublic", value);
          }
          setIsPublic(value);
        }}
        onBlur={() => runValidationTasks("isPublic", isPublic)}
        errorMessage={errors.isPublic?.errorMessage}
        hasError={errors.isPublic?.hasError}
        {...getOverrideProps(overrides, "isPublic")}
      ></SwitchField>
      <TextField
        label="Created at"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={createdAt && convertToLocal(new Date(createdAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              userID,
              fileName,
              originalName,
              fileType,
              fileSize,
              s3Key,
              url,
              description,
              isPublic,
              createdAt: value,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
      ></TextField>
      <TextField
        label="Updated at"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={updatedAt && convertToLocal(new Date(updatedAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              userID,
              fileName,
              originalName,
              fileType,
              fileSize,
              s3Key,
              url,
              description,
              isPublic,
              createdAt,
              updatedAt: value,
            };
            const result = onChange(modelFields);
            value = result?.updatedAt ?? value;
          }
          if (errors.updatedAt?.hasError) {
            runValidationTasks("updatedAt", value);
          }
          setUpdatedAt(value);
        }}
        onBlur={() => runValidationTasks("updatedAt", updatedAt)}
        errorMessage={errors.updatedAt?.errorMessage}
        hasError={errors.updatedAt?.hasError}
        {...getOverrideProps(overrides, "updatedAt")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || userFileModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || userFileModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
