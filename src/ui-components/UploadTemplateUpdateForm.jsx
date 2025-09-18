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
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { UploadTemplate } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function UploadTemplateUpdateForm(props) {
  const {
    id: idProp,
    uploadTemplate: uploadTemplateModelProp,
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
    name: "",
    description: "",
    templateType: "",
    structure: "",
    downloadCount: "",
    createdAt: "",
    updatedAt: "",
  };
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [templateType, setTemplateType] = React.useState(
    initialValues.templateType
  );
  const [structure, setStructure] = React.useState(initialValues.structure);
  const [downloadCount, setDownloadCount] = React.useState(
    initialValues.downloadCount
  );
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = uploadTemplateRecord
      ? { ...initialValues, ...uploadTemplateRecord }
      : initialValues;
    setUserID(cleanValues.userID);
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setTemplateType(cleanValues.templateType);
    setStructure(
      typeof cleanValues.structure === "string" ||
        cleanValues.structure === null
        ? cleanValues.structure
        : JSON.stringify(cleanValues.structure)
    );
    setDownloadCount(cleanValues.downloadCount);
    setCreatedAt(cleanValues.createdAt);
    setUpdatedAt(cleanValues.updatedAt);
    setErrors({});
  };
  const [uploadTemplateRecord, setUploadTemplateRecord] = React.useState(
    uploadTemplateModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(UploadTemplate, idProp)
        : uploadTemplateModelProp;
      setUploadTemplateRecord(record);
    };
    queryData();
  }, [idProp, uploadTemplateModelProp]);
  React.useEffect(resetStateValues, [uploadTemplateRecord]);
  const validations = {
    userID: [{ type: "Required" }],
    name: [{ type: "Required" }],
    description: [{ type: "Required" }],
    templateType: [{ type: "Required" }],
    structure: [{ type: "Required" }, { type: "JSON" }],
    downloadCount: [],
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
          name,
          description,
          templateType,
          structure,
          downloadCount,
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
            UploadTemplate.copyOf(uploadTemplateRecord, (updated) => {
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
      {...getOverrideProps(overrides, "UploadTemplateUpdateForm")}
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
              name,
              description,
              templateType,
              structure,
              downloadCount,
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
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              name: value,
              description,
              templateType,
              structure,
              downloadCount,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={true}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              name,
              description: value,
              templateType,
              structure,
              downloadCount,
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
      <TextField
        label="Template type"
        isRequired={true}
        isReadOnly={false}
        value={templateType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              name,
              description,
              templateType: value,
              structure,
              downloadCount,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.templateType ?? value;
          }
          if (errors.templateType?.hasError) {
            runValidationTasks("templateType", value);
          }
          setTemplateType(value);
        }}
        onBlur={() => runValidationTasks("templateType", templateType)}
        errorMessage={errors.templateType?.errorMessage}
        hasError={errors.templateType?.hasError}
        {...getOverrideProps(overrides, "templateType")}
      ></TextField>
      <TextAreaField
        label="Structure"
        isRequired={true}
        isReadOnly={false}
        value={structure}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              name,
              description,
              templateType,
              structure: value,
              downloadCount,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.structure ?? value;
          }
          if (errors.structure?.hasError) {
            runValidationTasks("structure", value);
          }
          setStructure(value);
        }}
        onBlur={() => runValidationTasks("structure", structure)}
        errorMessage={errors.structure?.errorMessage}
        hasError={errors.structure?.hasError}
        {...getOverrideProps(overrides, "structure")}
      ></TextAreaField>
      <TextField
        label="Download count"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={downloadCount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              userID,
              name,
              description,
              templateType,
              structure,
              downloadCount: value,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.downloadCount ?? value;
          }
          if (errors.downloadCount?.hasError) {
            runValidationTasks("downloadCount", value);
          }
          setDownloadCount(value);
        }}
        onBlur={() => runValidationTasks("downloadCount", downloadCount)}
        errorMessage={errors.downloadCount?.errorMessage}
        hasError={errors.downloadCount?.hasError}
        {...getOverrideProps(overrides, "downloadCount")}
      ></TextField>
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
              name,
              description,
              templateType,
              structure,
              downloadCount,
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
              name,
              description,
              templateType,
              structure,
              downloadCount,
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
          isDisabled={!(idProp || uploadTemplateModelProp)}
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
              !(idProp || uploadTemplateModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
