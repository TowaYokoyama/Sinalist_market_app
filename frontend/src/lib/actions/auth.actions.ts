'use server'

import { auth } from "../better-auth/auth"

export const signUpwithEmail = async(data:SignUpFormData) => {
    try {
        await auth.api.signUpEmail({
            body: {email:data.email,password:data.password,name:data.fullName}
        })
        return {success:true}
    }catch(e){
        console.log('Sgn up failed',e)
        return {success:false, error: 'Sign up failed'}
    }
}

export const signInWithEmail = async (data: SignInFormData) => {
    try {
        const response = await auth.api.signInEmail({
            body: {email: data.email, password: data.password}
        })

        if(response) {
            return {success: true}
        }

        return {success: false, error: 'Sign in failed'}
    } catch (e) {
        console.log('Sign in failed', e)
        return {success: false, error: 'Sign in failed'}
    }
}
