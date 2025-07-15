import {z} from 'zod';

export const step3Form = z.object({
    addOns: z
    .array(z.string(), {
        invalid_type_error: 'this fiel is required'
    })
})


export type FormDataOfStep3 = z.infer<typeof step3Form>;