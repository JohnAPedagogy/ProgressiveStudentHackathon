
export enum SessionStatus {
  InvalidUserOrPass = "[INVALID USER OR PASSWORD]",
  LoginSuccess= "[LOGIN SUCCESS]",
  UserNotFound= "[USER NOT FOUND]",
  PasswordOK= "[PASSWORD OK]",
  PasswordTooShort= "[PASSWORD TOO SHORT]",
  PasswordDifferentFromRepeat= "[PASSWORDS ARE DIFFERENT]",
  Login= "[SESSION LOGIN]",
  LoginSession= "[LOGIN SESSION]"
}

export enum PersonPosition{
  Student,
  Tutor,
  HOD,
  
}