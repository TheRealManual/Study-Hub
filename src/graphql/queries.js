/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($id: ID!) {
    getUserProfile(id: $id) {
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
export const listUserProfiles = /* GraphQL */ `
  query ListUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUserProfiles = /* GraphQL */ `
  query SyncUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getUserClass = /* GraphQL */ `
  query GetUserClass($id: ID!) {
    getUserClass(id: $id) {
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
export const listUserClasses = /* GraphQL */ `
  query ListUserClasses(
    $filter: ModelUserClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        className
        title
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUserClasses = /* GraphQL */ `
  query SyncUserClasses(
    $filter: ModelUserClassFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserClasses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userID
        className
        title
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const userClassesByUserID = /* GraphQL */ `
  query UserClassesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userClassesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        className
        title
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getUserTopic = /* GraphQL */ `
  query GetUserTopic($id: ID!) {
    getUserTopic(id: $id) {
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
export const listUserTopics = /* GraphQL */ `
  query ListUserTopics(
    $filter: ModelUserTopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        classID
        topicName
        title
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUserTopics = /* GraphQL */ `
  query SyncUserTopics(
    $filter: ModelUserTopicFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserTopics(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        classID
        topicName
        title
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const userTopicsByClassID = /* GraphQL */ `
  query UserTopicsByClassID(
    $classID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserTopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userTopicsByClassID(
      classID: $classID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        classID
        topicName
        title
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getUserFlashcard = /* GraphQL */ `
  query GetUserFlashcard($id: ID!) {
    getUserFlashcard(id: $id) {
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
export const listUserFlashcards = /* GraphQL */ `
  query ListUserFlashcards(
    $filter: ModelUserFlashcardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserFlashcards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUserFlashcards = /* GraphQL */ `
  query SyncUserFlashcards(
    $filter: ModelUserFlashcardFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserFlashcards(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const userFlashcardsByTopicID = /* GraphQL */ `
  query UserFlashcardsByTopicID(
    $topicID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFlashcardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userFlashcardsByTopicID(
      topicID: $topicID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getUserQuizQuestion = /* GraphQL */ `
  query GetUserQuizQuestion($id: ID!) {
    getUserQuizQuestion(id: $id) {
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
export const listUserQuizQuestions = /* GraphQL */ `
  query ListUserQuizQuestions(
    $filter: ModelUserQuizQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserQuizQuestions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUserQuizQuestions = /* GraphQL */ `
  query SyncUserQuizQuestions(
    $filter: ModelUserQuizQuestionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserQuizQuestions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const userQuizQuestionsByTopicID = /* GraphQL */ `
  query UserQuizQuestionsByTopicID(
    $topicID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserQuizQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userQuizQuestionsByTopicID(
      topicID: $topicID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getUserGame = /* GraphQL */ `
  query GetUserGame($id: ID!) {
    getUserGame(id: $id) {
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
export const listUserGames = /* GraphQL */ `
  query ListUserGames(
    $filter: ModelUserGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUserGames = /* GraphQL */ `
  query SyncUserGames(
    $filter: ModelUserGameFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserGames(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const userGamesByTopicID = /* GraphQL */ `
  query UserGamesByTopicID(
    $topicID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userGamesByTopicID(
      topicID: $topicID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getUserNote = /* GraphQL */ `
  query GetUserNote($id: ID!) {
    getUserNote(id: $id) {
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
export const listUserNotes = /* GraphQL */ `
  query ListUserNotes(
    $filter: ModelUserNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUserNotes = /* GraphQL */ `
  query SyncUserNotes(
    $filter: ModelUserNoteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserNotes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const userNotesByTopicID = /* GraphQL */ `
  query UserNotesByTopicID(
    $topicID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userNotesByTopicID(
      topicID: $topicID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getUserProgress = /* GraphQL */ `
  query GetUserProgress($id: ID!) {
    getUserProgress(id: $id) {
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
export const listUserProgresses = /* GraphQL */ `
  query ListUserProgresses(
    $filter: ModelUserProgressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProgresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUserProgresses = /* GraphQL */ `
  query SyncUserProgresses(
    $filter: ModelUserProgressFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserProgresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getSavedSession = /* GraphQL */ `
  query GetSavedSession($id: ID!) {
    getSavedSession(id: $id) {
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
export const listSavedSessions = /* GraphQL */ `
  query ListSavedSessions(
    $filter: ModelSavedSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSavedSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncSavedSessions = /* GraphQL */ `
  query SyncSavedSessions(
    $filter: ModelSavedSessionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSavedSessions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
