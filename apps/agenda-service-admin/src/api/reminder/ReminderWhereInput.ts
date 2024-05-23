import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ReminderWhereInput = {
  id?: StringFilter;
  isSent?: BooleanNullableFilter;
  message?: StringNullableFilter;
  time?: DateTimeNullableFilter;
};
