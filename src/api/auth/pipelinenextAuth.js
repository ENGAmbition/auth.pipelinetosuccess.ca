import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    providers:[
        Providers.credentials({
            // The name to display on the sign-in form
            name: 'Credentials',
            credentials: {
                username: {label: "Username", type: "text"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials, req){
                // validate credentials (username and password)
                // This is just a simple implementation but we might want to consider validating against a database
                // If credentials are valid
                if (credentials.username === 'someonesusername' && credentials.password === 'someonespassword'){
                    return {id: 1, username: 'somonesusername'};
                } else { // If credentials are invalid, returns null
                    return null;
                }
            }
        })
    ],
})
