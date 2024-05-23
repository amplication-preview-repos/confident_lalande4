import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ReminderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="is_sent" source="isSent" />
        <TextInput label="message" source="message" />
        <DateTimeInput label="time" source="time" />
      </SimpleForm>
    </Edit>
  );
};
