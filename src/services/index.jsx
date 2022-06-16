// auth service
export { signupService } from "./auth-services/signup-service";
export { loginService } from "./auth-services/login-service";

// note-services
export { postNoteService } from "./notes-services/post-note-service";
export { getNoteService } from "./notes-services/get-note-service";
export { editNoteService } from "./notes-services/edit-note-service";

// archive services
export { postArchiveService } from "./archive-services/post-archive-service";
export { getArchiveServices } from "./archive-services/get-archive-service";
export { restoreArchiveService } from "./archive-services/restore-archive-service";

// trash services
export { getTrashService } from "./trash-services/get-trash-service";
export { trashNoteService } from "./trash-services/trash-note-service";
export { restoreTrashedNoteService } from "./trash-services/restore-trash-note-service";
export { deleteTrashService } from "./trash-services/delete-treash-service";