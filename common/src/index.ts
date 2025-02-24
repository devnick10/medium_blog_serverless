import {z} from "zod"

export const signupInput = z.object({
    email: z.string().email(),
    password:z.string().min(4),
    name:z.string().optional()
})

export const signinInput = z.object({
    email: z.string().email(),
    password:z.string().min(4),
    name:z.string().optional()
})

export const createBlogInput = z.object({
    title: z.string().min(10),
    content:z.string().min(10),
})

export const updateBlogInput = z.object({
    title: z.string().min(10),
    content:z.string().min(10),
    id: z.string()
})

export type SingupInput = z.infer<typeof  signupInput>
export type SinginInput = z.infer<typeof  signinInput>
export type CreateBlogInput = z.infer<typeof  createBlogInput>
export type UpdateBlogInput = z.infer<typeof  updateBlogInput>
