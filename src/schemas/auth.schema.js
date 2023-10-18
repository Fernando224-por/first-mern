import { z } from 'zod'
export const registerSchema = z.object({
  username: z.string({
    required_error: 'Username is Required'
  }),
  email: z.string({
    required_error: 'Email is requires'
  }).email({
    message: 'Invalid Email'
  }),
  password: z.string({
    required_error: 'Password is required'
  }).min(8, {
    message: 'Password must be a least a 8 characters'
  })
})

export const loginSchema = z.object({
  email: z.string({
    required_error: 'Email is required'
  }).email({
    message: 'Invalid Email'
  }),
  password: z.string({
    required_error: 'Password is required'
  }).min(6, {
    message: 'Password must be a least a 6 characters'
  })
})
