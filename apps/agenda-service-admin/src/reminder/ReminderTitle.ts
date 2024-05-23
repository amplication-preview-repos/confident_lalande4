import { Reminder as TReminder } from "../api/reminder/Reminder";

export const REMINDER_TITLE_FIELD = "message";

export const ReminderTitle = (record: TReminder): string => {
  return record.message?.toString() || String(record.id);
};
