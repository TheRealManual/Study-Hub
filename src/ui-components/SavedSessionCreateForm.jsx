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
import { SavedSession } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function SavedSessionCreateForm(props) {
  const {
    clearOnSuccess = true,
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
    content: "",
    totalItems: "",
    completedItems: "",
    lastAccessed: "",
    createdAt: "",
    updatedAt: "",
  };
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [content, setContent] = React.useState(initialValues.content);
  const [totalItems, setTotalItems] = React.useState(initialValues.totalItems);
  const [completedItems, setCompletedItems] = React.useState(
    initialValues.completedItems
  );
  const [lastAccessed, setLastAccessed] = React.useState(
    initialValues.lastAccessed
  );
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUserID(initialValues.userID);
    setName(initialValues.name);
    setDescription(initialValues.description);
    setContent(initialValues.content);
    setTotalItems(initialValues.totalItems);
    setCompletedItems(initialValues.completedItems);
    setLastAccessed(initialValues.lastAccessed);
    setCreatedAt(initialValues.createdAt);
    setUpdatedAt(initialValues.updatedAt);
    setErrors({});
  };
  const validations = {
    userID: [{ type: "Required" }],
    name: [{ type: "Required" }],
    description: [],
    content: [{ type: "Required" }, { type: "JSON" }],
    totalItems: [],
    completedItems: [],
    lastAccessed: [],
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
          content,
          totalItems,
          completedItems,
          lastAccessed,
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
          await DataStore.save(new SavedSession(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "SavedSessionCreateForm")}
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
              content,
              totalItems,
              completedItems,
              lastAccessed,
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
              content,
              totalItems,
              completedItems,
              lastAccessed,
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
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              name,
              description: value,
              content,
              totalItems,
              completedItems,
              lastAccessed,
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
      <TextAreaField
        label="Content"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              name,
              description,
              content: value,
              totalItems,
              completedItems,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.content ?? value;
          }
          if (errors.content?.hasError) {
            runValidationTasks("content", value);
          }
          setContent(value);
        }}
        onBlur={() => runValidationTasks("content", content)}
        errorMessage={errors.content?.errorMessage}
        hasError={errors.content?.hasError}
        {...getOverrideProps(overrides, "content")}
      ></TextAreaField>
      <TextField
        label="Total items"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={totalItems}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              userID,
              name,
              description,
              content,
              totalItems: value,
              completedItems,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.totalItems ?? value;
          }
          if (errors.totalItems?.hasError) {
            runValidationTasks("totalItems", value);
          }
          setTotalItems(value);
        }}
        onBlur={() => runValidationTasks("totalItems", totalItems)}
        errorMessage={errors.totalItems?.errorMessage}
        hasError={errors.totalItems?.hasError}
        {...getOverrideProps(overrides, "totalItems")}
      ></TextField>
      <TextField
        label="Completed items"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={completedItems}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              userID,
              name,
              description,
              content,
              totalItems,
              completedItems: value,
              lastAccessed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.completedItems ?? value;
          }
          if (errors.completedItems?.hasError) {
            runValidationTasks("completedItems", value);
          }
          setCompletedItems(value);
        }}
        onBlur={() => runValidationTasks("completedItems", completedItems)}
        errorMessage={errors.completedItems?.errorMessage}
        hasError={errors.completedItems?.hasError}
        {...getOverrideProps(overrides, "completedItems")}
      ></TextField>
      <TextField
        label="Last accessed"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={lastAccessed && convertToLocal(new Date(lastAccessed))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              userID,
              name,
              description,
              content,
              totalItems,
              completedItems,
              lastAccessed: value,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.lastAccessed ?? value;
          }
          if (errors.lastAccessed?.hasError) {
            runValidationTasks("lastAccessed", value);
          }
          setLastAccessed(value);
        }}
        onBlur={() => runValidationTasks("lastAccessed", lastAccessed)}
        errorMessage={errors.lastAccessed?.errorMessage}
        hasError={errors.lastAccessed?.hasError}
        {...getOverrideProps(overrides, "lastAccessed")}
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
              content,
              totalItems,
              completedItems,
              lastAccessed,
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
              content,
              totalItems,
              completedItems,
              lastAccessed,
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
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
