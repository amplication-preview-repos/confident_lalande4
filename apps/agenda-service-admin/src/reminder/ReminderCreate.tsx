import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ReminderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="is_sent" source="isSent" />
        <TextInput label="message" source="message" />
        <DateTimeInput label="time" source="time" />
      </SimpleForm>
    </Create>
  );
};
