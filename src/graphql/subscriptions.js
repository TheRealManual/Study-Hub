/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $owner: String
  ) {
    onCreateUserProfile(filter: $filter, owner: $owner) {
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
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $owner: String
  ) {
    onUpdateUserProfile(filter: $filter, owner: $owner) {
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
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $owner: String
  ) {
    onDeleteUserProfile(filter: $filter, owner: $owner) {
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
export const onCreateUserClass = /* GraphQL */ `
  subscription OnCreateUserClass(
    $filter: ModelSubscriptionUserClassFilterInput
    $owner: String
  ) {
    onCreateUserClass(filter: $filter, owner: $owner) {
      id
      userID
      className
      title
      topics {
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
export const onUpdateUserClass = /* GraphQL */ `
  subscription OnUpdateUserClass(
    $filter: ModelSubscriptionUserClassFilterInput
    $owner: String
  ) {
    onUpdateUserClass(filter: $filter, owner: $owner) {
      id
      userID
      className
      title
      topics {
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
export const onDeleteUserClass = /* GraphQL */ `
  subscription OnDeleteUserClass(
    $filter: ModelSubscriptionUserClassFilterInput
    $owner: String
  ) {
    onDeleteUserClass(filter: $filter, owner: $owner) {
      id
      userID
      className
      title
      topics {
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
export const onCreateUserTopic = /* GraphQL */ `
  subscription OnCreateUserTopic(
    $filter: ModelSubscriptionUserTopicFilterInput
    $owner: String
  ) {
    onCreateUserTopic(filter: $filter, owner: $owner) {
      id
      classID
      topicName
      title
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
export const onUpdateUserTopic = /* GraphQL */ `
  subscription OnUpdateUserTopic(
    $filter: ModelSubscriptionUserTopicFilterInput
    $owner: String
  ) {
    onUpdateUserTopic(filter: $filter, owner: $owner) {
      id
      classID
      topicName
      title
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
export const onDeleteUserTopic = /* GraphQL */ `
  subscription OnDeleteUserTopic(
    $filter: ModelSubscriptionUserTopicFilterInput
    $owner: String
  ) {
    onDeleteUserTopic(filter: $filter, owner: $owner) {
      id
      classID
      topicName
      title
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
export const onCreateUserFlashcard = /* GraphQL */ `
  subscription OnCreateUserFlashcard(
    $filter: ModelSubscriptionUserFlashcardFilterInput
    $owner: String
  ) {
    onCreateUserFlashcard(filter: $filter, owner: $owner) {
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
export const onUpdateUserFlashcard = /* GraphQL */ `
  subscription OnUpdateUserFlashcard(
    $filter: ModelSubscriptionUserFlashcardFilterInput
    $owner: String
  ) {
    onUpdateUserFlashcard(filter: $filter, owner: $owner) {
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
export const onDeleteUserFlashcard = /* GraphQL */ `
  subscription OnDeleteUserFlashcard(
    $filter: ModelSubscriptionUserFlashcardFilterInput
    $owner: String
  ) {
    onDeleteUserFlashcard(filter: $filter, owner: $owner) {
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
export const onCreateUserQuizQuestion = /* GraphQL */ `
  subscription OnCreateUserQuizQuestion(
    $filter: ModelSubscriptionUserQuizQuestionFilterInput
    $owner: String
  ) {
    onCreateUserQuizQuestion(filter: $filter, owner: $owner) {
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
export const onUpdateUserQuizQuestion = /* GraphQL */ `
  subscription OnUpdateUserQuizQuestion(
    $filter: ModelSubscriptionUserQuizQuestionFilterInput
    $owner: String
  ) {
    onUpdateUserQuizQuestion(filter: $filter, owner: $owner) {
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
export const onDeleteUserQuizQuestion = /* GraphQL */ `
  subscription OnDeleteUserQuizQuestion(
    $filter: ModelSubscriptionUserQuizQuestionFilterInput
    $owner: String
  ) {
    onDeleteUserQuizQuestion(filter: $filter, owner: $owner) {
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
export const onCreateUserGame = /* GraphQL */ `
  subscription OnCreateUserGame(
    $filter: ModelSubscriptionUserGameFilterInput
    $owner: String
  ) {
    onCreateUserGame(filter: $filter, owner: $owner) {
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
export const onUpdateUserGame = /* GraphQL */ `
  subscription OnUpdateUserGame(
    $filter: ModelSubscriptionUserGameFilterInput
    $owner: String
  ) {
    onUpdateUserGame(filter: $filter, owner: $owner) {
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
export const onDeleteUserGame = /* GraphQL */ `
  subscription OnDeleteUserGame(
    $filter: ModelSubscriptionUserGameFilterInput
    $owner: String
  ) {
    onDeleteUserGame(filter: $filter, owner: $owner) {
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
export const onCreateUserNote = /* GraphQL */ `
  subscription OnCreateUserNote(
    $filter: ModelSubscriptionUserNoteFilterInput
    $owner: String
  ) {
    onCreateUserNote(filter: $filter, owner: $owner) {
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
export const onUpdateUserNote = /* GraphQL */ `
  subscription OnUpdateUserNote(
    $filter: ModelSubscriptionUserNoteFilterInput
    $owner: String
  ) {
    onUpdateUserNote(filter: $filter, owner: $owner) {
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
export const onDeleteUserNote = /* GraphQL */ `
  subscription OnDeleteUserNote(
    $filter: ModelSubscriptionUserNoteFilterInput
    $owner: String
  ) {
    onDeleteUserNote(filter: $filter, owner: $owner) {
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
export const onCreateUserProgress = /* GraphQL */ `
  subscription OnCreateUserProgress(
    $filter: ModelSubscriptionUserProgressFilterInput
    $owner: String
  ) {
    onCreateUserProgress(filter: $filter, owner: $owner) {
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
export const onUpdateUserProgress = /* GraphQL */ `
  subscription OnUpdateUserProgress(
    $filter: ModelSubscriptionUserProgressFilterInput
    $owner: String
  ) {
    onUpdateUserProgress(filter: $filter, owner: $owner) {
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
export const onDeleteUserProgress = /* GraphQL */ `
  subscription OnDeleteUserProgress(
    $filter: ModelSubscriptionUserProgressFilterInput
    $owner: String
  ) {
    onDeleteUserProgress(filter: $filter, owner: $owner) {
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
export const onCreateSavedSession = /* GraphQL */ `
  subscription OnCreateSavedSession(
    $filter: ModelSubscriptionSavedSessionFilterInput
    $owner: String
  ) {
    onCreateSavedSession(filter: $filter, owner: $owner) {
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
export const onUpdateSavedSession = /* GraphQL */ `
  subscription OnUpdateSavedSession(
    $filter: ModelSubscriptionSavedSessionFilterInput
    $owner: String
  ) {
    onUpdateSavedSession(filter: $filter, owner: $owner) {
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
export const onDeleteSavedSession = /* GraphQL */ `
  subscription OnDeleteSavedSession(
    $filter: ModelSubscriptionSavedSessionFilterInput
    $owner: String
  ) {
    onDeleteSavedSession(filter: $filter, owner: $owner) {
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
