import { SortOrder } from "../../util/SortOrder";

export type ReminderOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isSent?: SortOrder;
  message?: SortOrder;
  time?: SortOrder;
  updatedAt?: SortOrder;
};
