import {z} from 'zod';
const simplesRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const simplePhoneRegex = /^\d{11}$/;

export const step1Form = z.object({
    userName: z
    .string()
    .min(3, 'min 11 letters')
    .nonempty('this filed is required'),
    email: z.string()
    .email()
    .regex(simplesRegex, 'email must have @gmail.com ou @hotmail.com')
    .nonempty('this filed is required'),
    phoneNumber: z.string()
    .min(9)
    .regex(simplePhoneRegex, 'only numbers')
    .nonempty('this filed is required')
})


export type FormDataOfStep1 = z.infer<typeof step1Form>;