export const STATE = {
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
  DISABLED: 'DISABLED',
  READONLY: 'READONLY'
}

export const TYPE = {
  TEXT: "text",
  EMAIL: "email"
}

export const MESSAGE = {
  ERROR: "The field is invalid",
  SUCCESS: "Great!"
}

export const STATUS_MESSAGE_MAP = {
  [STATE.ERROR] : MESSAGE.ERROR,
  [STATE.SUCCESS] : MESSAGE.SUCCESS,
  [STATE.DISABLED] : "",
  [STATE.READONLY]: ""
}