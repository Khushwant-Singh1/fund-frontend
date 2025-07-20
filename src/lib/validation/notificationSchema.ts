import { z } from 'zod';

export const notificationSchema = z.object({
  _id: z.string(),
  userId: z.string(),
  title: z.string(),
  message: z.string(),
  read: z.boolean(),
  createdAt: z.string(),
});

export type Notification = z.infer<typeof notificationSchema>; 