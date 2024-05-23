export type Reminder = {
  createdAt: Date;
  id: string;
  isSent: boolean | null;
  message: string | null;
  time: Date | null;
  updatedAt: Date;
};
