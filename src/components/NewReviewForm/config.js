export const STATE = {
  DEFAULT: 'DEFAULT',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
  DISABLED: 'DISABLED',
  READONLY: 'READONLY'
}

export const TYPE = {
  TEXT: "text",
  NAME: "name",
  EMAIL: "email"
}

export const MESSAGE = {
  ERROR: "The field is invalid",
  SUCCESS: "Great!"
}

export const STATUS_MESSAGE_MAP = {
  [STATE.DEFAULT] : "",
  [STATE.ERROR] : MESSAGE.ERROR,
  [STATE.SUCCESS] : MESSAGE.SUCCESS,
  [STATE.DISABLED] : "",
  [STATE.READONLY]: ""
}