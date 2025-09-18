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
import { UserProgress } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function UserProgressCreateForm(props) {
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
    topicID: "",
    flashcardStats: "",
    quizStats: "",
    gameStats: "",
    overallProgress: "",
    lastActivity: "",
    createdAt: "",
    updatedAt: "",
  };
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [topicID, setTopicID] = React.useState(initialValues.topicID);
  const [flashcardStats, setFlashcardStats] = React.useState(
    initialValues.flashcardStats
  );
  const [quizStats, setQuizStats] = React.useState(initialValues.quizStats);
  const [gameStats, setGameStats] = React.useState(initialValues.gameStats);
  const [overallProgress, setOverallProgress] = React.useState(
    initialValues.overallProgress
  );
  const [lastActivity, setLastActivity] = React.useState(
    initialValues.lastActivity
  );
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUserID(initialValues.userID);
    setTopicID(initialValues.topicID);
    setFlashcardStats(initialValues.flashcardStats);
    setQuizStats(initialValues.quizStats);
    setGameStats(initialValues.gameStats);
    setOverallProgress(initialValues.overallProgress);
    setLastActivity(initialValues.lastActivity);
    setCreatedAt(initialValues.createdAt);
    setUpdatedAt(initialValues.updatedAt);
    setErrors({});
  };
  const validations = {
    userID: [{ type: "Required" }],
    topicID: [{ type: "Required" }],
    flashcardStats: [{ type: "JSON" }],
    quizStats: [{ type: "JSON" }],
    gameStats: [{ type: "JSON" }],
    overallProgress: [],
    lastActivity: [],
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
          topicID,
          flashcardStats,
          quizStats,
          gameStats,
          overallProgress,
          lastActivity,
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
          await DataStore.save(new UserProgress(modelFields));
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
      {...getOverrideProps(overrides, "UserProgressCreateForm")}
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
              topicID,
              flashcardStats,
              quizStats,
              gameStats,
              overallProgress,
              lastActivity,
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
        label="Topic id"
        isRequired={true}
        isReadOnly={false}
        value={topicID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              topicID: value,
              flashcardStats,
              quizStats,
              gameStats,
              overallProgress,
              lastActivity,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.topicID ?? value;
          }
          if (errors.topicID?.hasError) {
            runValidationTasks("topicID", value);
          }
          setTopicID(value);
        }}
        onBlur={() => runValidationTasks("topicID", topicID)}
        errorMessage={errors.topicID?.errorMessage}
        hasError={errors.topicID?.hasError}
        {...getOverrideProps(overrides, "topicID")}
      ></TextField>
      <TextAreaField
        label="Flashcard stats"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              topicID,
              flashcardStats: value,
              quizStats,
              gameStats,
              overallProgress,
              lastActivity,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.flashcardStats ?? value;
          }
          if (errors.flashcardStats?.hasError) {
            runValidationTasks("flashcardStats", value);
          }
          setFlashcardStats(value);
        }}
        onBlur={() => runValidationTasks("flashcardStats", flashcardStats)}
        errorMessage={errors.flashcardStats?.errorMessage}
        hasError={errors.flashcardStats?.hasError}
        {...getOverrideProps(overrides, "flashcardStats")}
      ></TextAreaField>
      <TextAreaField
        label="Quiz stats"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              topicID,
              flashcardStats,
              quizStats: value,
              gameStats,
              overallProgress,
              lastActivity,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.quizStats ?? value;
          }
          if (errors.quizStats?.hasError) {
            runValidationTasks("quizStats", value);
          }
          setQuizStats(value);
        }}
        onBlur={() => runValidationTasks("quizStats", quizStats)}
        errorMessage={errors.quizStats?.errorMessage}
        hasError={errors.quizStats?.hasError}
        {...getOverrideProps(overrides, "quizStats")}
      ></TextAreaField>
      <TextAreaField
        label="Game stats"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              topicID,
              flashcardStats,
              quizStats,
              gameStats: value,
              overallProgress,
              lastActivity,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.gameStats ?? value;
          }
          if (errors.gameStats?.hasError) {
            runValidationTasks("gameStats", value);
          }
          setGameStats(value);
        }}
        onBlur={() => runValidationTasks("gameStats", gameStats)}
        errorMessage={errors.gameStats?.errorMessage}
        hasError={errors.gameStats?.hasError}
        {...getOverrideProps(overrides, "gameStats")}
      ></TextAreaField>
      <TextField
        label="Overall progress"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={overallProgress}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              userID,
              topicID,
              flashcardStats,
              quizStats,
              gameStats,
              overallProgress: value,
              lastActivity,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.overallProgress ?? value;
          }
          if (errors.overallProgress?.hasError) {
            runValidationTasks("overallProgress", value);
          }
          setOverallProgress(value);
        }}
        onBlur={() => runValidationTasks("overallProgress", overallProgress)}
        errorMessage={errors.overallProgress?.errorMessage}
        hasError={errors.overallProgress?.hasError}
        {...getOverrideProps(overrides, "overallProgress")}
      ></TextField>
      <TextField
        label="Last activity"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={lastActivity && convertToLocal(new Date(lastActivity))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              userID,
              topicID,
              flashcardStats,
              quizStats,
              gameStats,
              overallProgress,
              lastActivity: value,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.lastActivity ?? value;
          }
          if (errors.lastActivity?.hasError) {
            runValidationTasks("lastActivity", value);
          }
          setLastActivity(value);
        }}
        onBlur={() => runValidationTasks("lastActivity", lastActivity)}
        errorMessage={errors.lastActivity?.errorMessage}
        hasError={errors.lastActivity?.hasError}
        {...getOverrideProps(overrides, "lastActivity")}
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
              topicID,
              flashcardStats,
              quizStats,
              gameStats,
              overallProgress,
              lastActivity,
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
              topicID,
              flashcardStats,
              quizStats,
              gameStats,
              overallProgress,
              lastActivity,
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
