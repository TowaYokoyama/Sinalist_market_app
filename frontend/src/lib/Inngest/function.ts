import { inngest } from "./client";

export const signUpEmail = inngest.createFunction(
    {id:'sign-up-email'},
    {event:'app/user.created'},
    async({event, step}) => {
        const userProfile = `
        - Country:${event.data.country} 
        - Investment goals : ${event.data.investmentGoals}
        - Risktolerrance : ${event.data.riskTolerance}
        - Preferred industry : ${event.data.preferredIndustry}
        `
    }
)