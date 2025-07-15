import {z} from 'zod';

export const step2Form = z.object({
    selectedPlan: z.
    string({required_error: 'select a plan',invalid_type_error: 'please select a plan'})
    .nonempty('this field is required')
})


export type FormDataOfStep2 = z.infer<typeof step2Form>;