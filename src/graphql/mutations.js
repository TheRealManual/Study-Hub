/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
    $input: CreateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    createUserProfile(input: $input, condition: $condition) {
      id
      username
      email
      classes {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
    $input: UpdateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    updateUserProfile(input: $input, condition: $condition) {
      id
      username
      email
      classes {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
    $input: DeleteUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    deleteUserProfile(input: $input, condition: $condition) {
      id
      username
      email
      classes {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const createUserClass = /* GraphQL */ `
  mutation CreateUserClass(
    $input: CreateUserClassInput!
    $condition: ModelUserClassConditionInput
  ) {
    createUserClass(input: $input, condition: $condition) {
      id
      userID
      className
      title
      description
      topics {
        nextToken
        startedAt
        __typename
      }
      files {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const updateUserClass = /* GraphQL */ `
  mutation UpdateUserClass(
    $input: UpdateUserClassInput!
    $condition: ModelUserClassConditionInput
  ) {
    updateUserClass(input: $input, condition: $condition) {
      id
      userID
      className
      title
      description
      topics {
        nextToken
        startedAt
        __typename
      }
      files {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const deleteUserClass = /* GraphQL */ `
  mutation DeleteUserClass(
    $input: DeleteUserClassInput!
    $condition: ModelUserClassConditionInput
  ) {
    deleteUserClass(input: $input, condition: $condition) {
      id
      userID
      className
      title
      description
      topics {
        nextToken
        startedAt
        __typename
      }
      files {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const createUserTopic = /* GraphQL */ `
  mutation CreateUserTopic(
    $input: CreateUserTopicInput!
    $condition: ModelUserTopicConditionInput
  ) {
    createUserTopic(input: $input, condition: $condition) {
      id
      classID
      topicName
      title
      description
      type
      flashcards {
        nextToken
        startedAt
        __typename
      }
      quizQuestions {
        nextToken
        startedAt
        __typename
      }
      games {
        nextToken
        startedAt
        __typename
      }
      notes {
        nextToken
        startedAt
        __typename
      }
      files {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const updateUserTopic = /* GraphQL */ `
  mutation UpdateUserTopic(
    $input: UpdateUserTopicInput!
    $condition: ModelUserTopicConditionInput
  ) {
    updateUserTopic(input: $input, condition: $condition) {
      id
      classID
      topicName
      title
      description
      type
      flashcards {
        nextToken
        startedAt
        __typename
      }
      quizQuestions {
        nextToken
        startedAt
        __typename
      }
      games {
        nextToken
        startedAt
        __typename
      }
      notes {
        nextToken
        startedAt
        __typename
      }
      files {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const deleteUserTopic = /* GraphQL */ `
  mutation DeleteUserTopic(
    $input: DeleteUserTopicInput!
    $condition: ModelUserTopicConditionInput
  ) {
    deleteUserTopic(input: $input, condition: $condition) {
      id
      classID
      topicName
      title
      description
      type
      flashcards {
        nextToken
        startedAt
        __typename
      }
      quizQuestions {
        nextToken
        startedAt
        __typename
      }
      games {
        nextToken
        startedAt
        __typename
      }
      notes {
        nextToken
        startedAt
        __typename
      }
      files {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const createUserFlashcard = /* GraphQL */ `
  mutation CreateUserFlashcard(
    $input: CreateUserFlashcardInput!
    $condition: ModelUserFlashcardConditionInput
  ) {
    createUserFlashcard(input: $input, condition: $condition) {
      id
      topicID
      front
      back
      reviewCount
      lastReviewed
      nextReview
      easeFactor
      interval
      source
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const updateUserFlashcard = /* GraphQL */ `
  mutation UpdateUserFlashcard(
    $input: UpdateUserFlashcardInput!
    $condition: ModelUserFlashcardConditionInput
  ) {
    updateUserFlashcard(input: $input, condition: $condition) {
      id
      topicID
      front
      back
      reviewCount
      lastReviewed
      nextReview
      easeFactor
      interval
      source
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const deleteUserFlashcard = /* GraphQL */ `
  mutation DeleteUserFlashcard(
    $input: DeleteUserFlashcardInput!
    $condition: ModelUserFlashcardConditionInput
  ) {
    deleteUserFlashcard(input: $input, condition: $condition) {
      id
      topicID
      front
      back
      reviewCount
      lastReviewed
      nextReview
      easeFactor
      interval
      source
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const createUserQuizQuestion = /* GraphQL */ `
  mutation CreateUserQuizQuestion(
    $input: CreateUserQuizQuestionInput!
    $condition: ModelUserQuizQuestionConditionInput
  ) {
    createUserQuizQuestion(input: $input, condition: $condition) {
      id
      topicID
      question
      options
      correctAnswer
      explanation
      reviewCount
      lastAnswered
      correctAnswers
      totalAttempts
      difficulty
      source
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const updateUserQuizQuestion = /* GraphQL */ `
  mutation UpdateUserQuizQuestion(
    $input: UpdateUserQuizQuestionInput!
    $condition: ModelUserQuizQuestionConditionInput
  ) {
    updateUserQuizQuestion(input: $input, condition: $condition) {
      id
      topicID
      question
      options
      correctAnswer
      explanation
      reviewCount
      lastAnswered
      correctAnswers
      totalAttempts
      difficulty
      source
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const deleteUserQuizQuestion = /* GraphQL */ `
  mutation DeleteUserQuizQuestion(
    $input: DeleteUserQuizQuestionInput!
    $condition: ModelUserQuizQuestionConditionInput
  ) {
    deleteUserQuizQuestion(input: $input, condition: $condition) {
      id
      topicID
      question
      options
      correctAnswer
      explanation
      reviewCount
      lastAnswered
      correctAnswers
      totalAttempts
      difficulty
      source
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const createUserGame = /* GraphQL */ `
  mutation CreateUserGame(
    $input: CreateUserGameInput!
    $condition: ModelUserGameConditionInput
  ) {
    createUserGame(input: $input, condition: $condition) {
      id
      topicID
      type
      title
      description
      content
      highScore
      timesPlayed
      lastPlayed
      source
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const updateUserGame = /* GraphQL */ `
  mutation UpdateUserGame(
    $input: UpdateUserGameInput!
    $condition: ModelUserGameConditionInput
  ) {
    updateUserGame(input: $input, condition: $condition) {
      id
      topicID
      type
      title
      description
      content
      highScore
      timesPlayed
      lastPlayed
      source
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const deleteUserGame = /* GraphQL */ `
  mutation DeleteUserGame(
    $input: DeleteUserGameInput!
    $condition: ModelUserGameConditionInput
  ) {
    deleteUserGame(input: $input, condition: $condition) {
      id
      topicID
      type
      title
      description
      content
      highScore
      timesPlayed
      lastPlayed
      source
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const createUserNote = /* GraphQL */ `
  mutation CreateUserNote(
    $input: CreateUserNoteInput!
    $condition: ModelUserNoteConditionInput
  ) {
    createUserNote(input: $input, condition: $condition) {
      id
      topicID
      title
      content
      tags
      source
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const updateUserNote = /* GraphQL */ `
  mutation UpdateUserNote(
    $input: UpdateUserNoteInput!
    $condition: ModelUserNoteConditionInput
  ) {
    updateUserNote(input: $input, condition: $condition) {
      id
      topicID
      title
      content
      tags
      source
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const deleteUserNote = /* GraphQL */ `
  mutation DeleteUserNote(
    $input: DeleteUserNoteInput!
    $condition: ModelUserNoteConditionInput
  ) {
    deleteUserNote(input: $input, condition: $condition) {
      id
      topicID
      title
      content
      tags
      source
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const createUserProgress = /* GraphQL */ `
  mutation CreateUserProgress(
    $input: CreateUserProgressInput!
    $condition: ModelUserProgressConditionInput
  ) {
    createUserProgress(input: $input, condition: $condition) {
      id
      userID
      topicID
      flashcardStats
      quizStats
      gameStats
      overallProgress
      lastActivity
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const updateUserProgress = /* GraphQL */ `
  mutation UpdateUserProgress(
    $input: UpdateUserProgressInput!
    $condition: ModelUserProgressConditionInput
  ) {
    updateUserProgress(input: $input, condition: $condition) {
      id
      userID
      topicID
      flashcardStats
      quizStats
      gameStats
      overallProgress
      lastActivity
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const deleteUserProgress = /* GraphQL */ `
  mutation DeleteUserProgress(
    $input: DeleteUserProgressInput!
    $condition: ModelUserProgressConditionInput
  ) {
    deleteUserProgress(input: $input, condition: $condition) {
      id
      userID
      topicID
      flashcardStats
      quizStats
      gameStats
      overallProgress
      lastActivity
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const createSavedSession = /* GraphQL */ `
  mutation CreateSavedSession(
    $input: CreateSavedSessionInput!
    $condition: ModelSavedSessionConditionInput
  ) {
    createSavedSession(input: $input, condition: $condition) {
      id
      userID
      name
      description
      content
      totalItems
      completedItems
      lastAccessed
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const updateSavedSession = /* GraphQL */ `
  mutation UpdateSavedSession(
    $input: UpdateSavedSessionInput!
    $condition: ModelSavedSessionConditionInput
  ) {
    updateSavedSession(input: $input, condition: $condition) {
      id
      userID
      name
      description
      content
      totalItems
      completedItems
      lastAccessed
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const deleteSavedSession = /* GraphQL */ `
  mutation DeleteSavedSession(
    $input: DeleteSavedSessionInput!
    $condition: ModelSavedSessionConditionInput
  ) {
    deleteSavedSession(input: $input, condition: $condition) {
      id
      userID
      name
      description
      content
      totalItems
      completedItems
      lastAccessed
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const createUserFile = /* GraphQL */ `
  mutation CreateUserFile(
    $input: CreateUserFileInput!
    $condition: ModelUserFileConditionInput
  ) {
    createUserFile(input: $input, condition: $condition) {
      id
      userID
      classID
      topicID
      fileName
      originalName
      fileType
      fileSize
      s3Key
      url
      description
      isPublic
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const updateUserFile = /* GraphQL */ `
  mutation UpdateUserFile(
    $input: UpdateUserFileInput!
    $condition: ModelUserFileConditionInput
  ) {
    updateUserFile(input: $input, condition: $condition) {
      id
      userID
      classID
      topicID
      fileName
      originalName
      fileType
      fileSize
      s3Key
      url
      description
      isPublic
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const deleteUserFile = /* GraphQL */ `
  mutation DeleteUserFile(
    $input: DeleteUserFileInput!
    $condition: ModelUserFileConditionInput
  ) {
    deleteUserFile(input: $input, condition: $condition) {
      id
      userID
      classID
      topicID
      fileName
      originalName
      fileType
      fileSize
      s3Key
      url
      description
      isPublic
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const createUploadTemplate = /* GraphQL */ `
  mutation CreateUploadTemplate(
    $input: CreateUploadTemplateInput!
    $condition: ModelUploadTemplateConditionInput
  ) {
    createUploadTemplate(input: $input, condition: $condition) {
      id
      userID
      name
      description
      templateType
      structure
      downloadCount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const updateUploadTemplate = /* GraphQL */ `
  mutation UpdateUploadTemplate(
    $input: UpdateUploadTemplateInput!
    $condition: ModelUploadTemplateConditionInput
  ) {
    updateUploadTemplate(input: $input, condition: $condition) {
      id
      userID
      name
      description
      templateType
      structure
      downloadCount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const deleteUploadTemplate = /* GraphQL */ `
  mutation DeleteUploadTemplate(
    $input: DeleteUploadTemplateInput!
    $condition: ModelUploadTemplateConditionInput
  ) {
    deleteUploadTemplate(input: $input, condition: $condition) {
      id
      userID
      name
      description
      templateType
      structure
      downloadCount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
