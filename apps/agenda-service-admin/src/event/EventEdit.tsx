import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="end_time" source="endTime" />
        <TextInput label="location" source="location" />
        <TextInput label="name" source="name" />
        <DateTimeInput label="start_time" source="startTime" />
      </SimpleForm>
    </Edit>
  );
};
