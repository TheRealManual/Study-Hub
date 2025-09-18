import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerUserProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfile, 'id'>;
  };
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly classes?: (UserClass | null)[] | null;
  readonly createdAt: string;
  readonly updatedAt: string;
}

type LazyUserProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfile, 'id'>;
  };
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly classes: AsyncCollection<UserClass>;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export declare type UserProfile = LazyLoading extends LazyLoadingDisabled ? EagerUserProfile : LazyUserProfile

export declare const UserProfile: (new (init: ModelInit<UserProfile>) => UserProfile) & {
  copyOf(source: UserProfile, mutator: (draft: MutableModel<UserProfile>) => MutableModel<UserProfile> | void): UserProfile;
}

type EagerUserClass = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserClass, 'id'>;
  };
  readonly id: string;
  readonly userID: string;
  readonly className: string;
  readonly title: string;
  readonly topics?: (UserTopic | null)[] | null;
  readonly createdAt: string;
  readonly updatedAt: string;
}

type LazyUserClass = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserClass, 'id'>;
  };
  readonly id: string;
  readonly userID: string;
  readonly className: string;
  readonly title: string;
  readonly topics: AsyncCollection<UserTopic>;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export declare type UserClass = LazyLoading extends LazyLoadingDisabled ? EagerUserClass : LazyUserClass

export declare const UserClass: (new (init: ModelInit<UserClass>) => UserClass) & {
  copyOf(source: UserClass, mutator: (draft: MutableModel<UserClass>) => MutableModel<UserClass> | void): UserClass;
}

type EagerUserTopic = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserTopic, 'id'>;
  };
  readonly id: string;
  readonly classID: string;
  readonly topicName: string;
  readonly title: string;
  readonly flashcards?: (UserFlashcard | null)[] | null;
  readonly quizQuestions?: (UserQuizQuestion | null)[] | null;
  readonly games?: (UserGame | null)[] | null;
  readonly notes?: (UserNote | null)[] | null;
  readonly createdAt: string;
  readonly updatedAt: string;
}

type LazyUserTopic = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserTopic, 'id'>;
  };
  readonly id: string;
  readonly classID: string;
  readonly topicName: string;
  readonly title: string;
  readonly flashcards: AsyncCollection<UserFlashcard>;
  readonly quizQuestions: AsyncCollection<UserQuizQuestion>;
  readonly games: AsyncCollection<UserGame>;
  readonly notes: AsyncCollection<UserNote>;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export declare type UserTopic = LazyLoading extends LazyLoadingDisabled ? EagerUserTopic : LazyUserTopic

export declare const UserTopic: (new (init: ModelInit<UserTopic>) => UserTopic) & {
  copyOf(source: UserTopic, mutator: (draft: MutableModel<UserTopic>) => MutableModel<UserTopic> | void): UserTopic;
}

type EagerUserFlashcard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserFlashcard, 'id'>;
  };
  readonly id: string;
  readonly topicID: string;
  readonly front: string;
  readonly back: string;
  readonly reviewCount?: number | null;
  readonly lastReviewed?: string | null;
  readonly nextReview?: string | null;
  readonly easeFactor?: number | null;
  readonly interval?: number | null;
  readonly source?: string | null;
  readonly createdAt: string;
  readonly updatedAt: string;
}

type LazyUserFlashcard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserFlashcard, 'id'>;
  };
  readonly id: string;
  readonly topicID: string;
  readonly front: string;
  readonly back: string;
  readonly reviewCount?: number | null;
  readonly lastReviewed?: string | null;
  readonly nextReview?: string | null;
  readonly easeFactor?: number | null;
  readonly interval?: number | null;
  readonly source?: string | null;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export declare type UserFlashcard = LazyLoading extends LazyLoadingDisabled ? EagerUserFlashcard : LazyUserFlashcard

export declare const UserFlashcard: (new (init: ModelInit<UserFlashcard>) => UserFlashcard) & {
  copyOf(source: UserFlashcard, mutator: (draft: MutableModel<UserFlashcard>) => MutableModel<UserFlashcard> | void): UserFlashcard;
}

type EagerUserQuizQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserQuizQuestion, 'id'>;
  };
  readonly id: string;
  readonly topicID: string;
  readonly question: string;
  readonly options: string[];
  readonly correctAnswer: number;
  readonly explanation?: string | null;
  readonly reviewCount?: number | null;
  readonly lastAnswered?: string | null;
  readonly correctAnswers?: number | null;
  readonly totalAttempts?: number | null;
  readonly difficulty?: string | null;
  readonly source?: string | null;
  readonly createdAt: string;
  readonly updatedAt: string;
}

type LazyUserQuizQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserQuizQuestion, 'id'>;
  };
  readonly id: string;
  readonly topicID: string;
  readonly question: string;
  readonly options: string[];
  readonly correctAnswer: number;
  readonly explanation?: string | null;
  readonly reviewCount?: number | null;
  readonly lastAnswered?: string | null;
  readonly correctAnswers?: number | null;
  readonly totalAttempts?: number | null;
  readonly difficulty?: string | null;
  readonly source?: string | null;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export declare type UserQuizQuestion = LazyLoading extends LazyLoadingDisabled ? EagerUserQuizQuestion : LazyUserQuizQuestion

export declare const UserQuizQuestion: (new (init: ModelInit<UserQuizQuestion>) => UserQuizQuestion) & {
  copyOf(source: UserQuizQuestion, mutator: (draft: MutableModel<UserQuizQuestion>) => MutableModel<UserQuizQuestion> | void): UserQuizQuestion;
}

type EagerUserGame = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserGame, 'id'>;
  };
  readonly id: string;
  readonly topicID: string;
  readonly type: string;
  readonly title: string;
  readonly description?: string | null;
  readonly content: string;
  readonly highScore?: number | null;
  readonly timesPlayed?: number | null;
  readonly lastPlayed?: string | null;
  readonly source?: string | null;
  readonly createdAt: string;
  readonly updatedAt: string;
}

type LazyUserGame = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserGame, 'id'>;
  };
  readonly id: string;
  readonly topicID: string;
  readonly type: string;
  readonly title: string;
  readonly description?: string | null;
  readonly content: string;
  readonly highScore?: number | null;
  readonly timesPlayed?: number | null;
  readonly lastPlayed?: string | null;
  readonly source?: string | null;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export declare type UserGame = LazyLoading extends LazyLoadingDisabled ? EagerUserGame : LazyUserGame

export declare const UserGame: (new (init: ModelInit<UserGame>) => UserGame) & {
  copyOf(source: UserGame, mutator: (draft: MutableModel<UserGame>) => MutableModel<UserGame> | void): UserGame;
}

type EagerUserNote = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserNote, 'id'>;
  };
  readonly id: string;
  readonly topicID: string;
  readonly title: string;
  readonly content: string;
  readonly tags?: (string | null)[] | null;
  readonly source?: string | null;
  readonly createdAt: string;
  readonly updatedAt: string;
}

type LazyUserNote = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserNote, 'id'>;
  };
  readonly id: string;
  readonly topicID: string;
  readonly title: string;
  readonly content: string;
  readonly tags?: (string | null)[] | null;
  readonly source?: string | null;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export declare type UserNote = LazyLoading extends LazyLoadingDisabled ? EagerUserNote : LazyUserNote

export declare const UserNote: (new (init: ModelInit<UserNote>) => UserNote) & {
  copyOf(source: UserNote, mutator: (draft: MutableModel<UserNote>) => MutableModel<UserNote> | void): UserNote;
}

type EagerUserProgress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProgress, 'id'>;
  };
  readonly id: string;
  readonly userID: string;
  readonly topicID: string;
  readonly flashcardStats?: string | null;
  readonly quizStats?: string | null;
  readonly gameStats?: string | null;
  readonly overallProgress?: number | null;
  readonly lastActivity?: string | null;
  readonly createdAt: string;
  readonly updatedAt: string;
}

type LazyUserProgress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProgress, 'id'>;
  };
  readonly id: string;
  readonly userID: string;
  readonly topicID: string;
  readonly flashcardStats?: string | null;
  readonly quizStats?: string | null;
  readonly gameStats?: string | null;
  readonly overallProgress?: number | null;
  readonly lastActivity?: string | null;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export declare type UserProgress = LazyLoading extends LazyLoadingDisabled ? EagerUserProgress : LazyUserProgress

export declare const UserProgress: (new (init: ModelInit<UserProgress>) => UserProgress) & {
  copyOf(source: UserProgress, mutator: (draft: MutableModel<UserProgress>) => MutableModel<UserProgress> | void): UserProgress;
}

type EagerSavedSession = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SavedSession, 'id'>;
  };
  readonly id: string;
  readonly userID: string;
  readonly name: string;
  readonly description?: string | null;
  readonly content: string;
  readonly totalItems?: number | null;
  readonly completedItems?: number | null;
  readonly lastAccessed?: string | null;
  readonly createdAt: string;
  readonly updatedAt: string;
}

type LazySavedSession = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SavedSession, 'id'>;
  };
  readonly id: string;
  readonly userID: string;
  readonly name: string;
  readonly description?: string | null;
  readonly content: string;
  readonly totalItems?: number | null;
  readonly completedItems?: number | null;
  readonly lastAccessed?: string | null;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export declare type SavedSession = LazyLoading extends LazyLoadingDisabled ? EagerSavedSession : LazySavedSession

export declare const SavedSession: (new (init: ModelInit<SavedSession>) => SavedSession) & {
  copyOf(source: SavedSession, mutator: (draft: MutableModel<SavedSession>) => MutableModel<SavedSession> | void): SavedSession;
}