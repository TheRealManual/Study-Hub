// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserProfile, UserClass, UserTopic, UserFlashcard, UserQuizQuestion, UserGame, UserNote, UserProgress, SavedSession, UserFile, UploadTemplate } = initSchema(schema);

export {
  UserProfile,
  UserClass,
  UserTopic,
  UserFlashcard,
  UserQuizQuestion,
  UserGame,
  UserNote,
  UserProgress,
  SavedSession,
  UserFile,
  UploadTemplate
};