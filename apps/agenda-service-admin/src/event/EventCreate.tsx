import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const EventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="end_time" source="endTime" />
        <TextInput label="location" source="location" />
        <TextInput label="name" source="name" />
        <DateTimeInput label="start_time" source="startTime" />
      </SimpleForm>
    </Create>
  );
};
