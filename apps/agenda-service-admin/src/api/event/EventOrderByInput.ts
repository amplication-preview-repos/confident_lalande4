import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  createdAt?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  startTime?: SortOrder;
  updatedAt?: SortOrder;
};
