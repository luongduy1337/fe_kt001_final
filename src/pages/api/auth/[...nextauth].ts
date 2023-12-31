import NextAuth, { NextAuthOptions } from "next-auth"
import  CredentialsProvider  from "next-auth/providers/credentials"

export const authOptions : NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Credentials",
        // `credentials` is used to generate a form on the sign in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          usernameOrEmail: { label: "Email", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {

          /*NOTE - Trích xuất dữ liệu */
          
          const { usernameOrEmail , password } = credentials as any;

          const res = await fetch("http://localhost:8989/api/v1/auth/login", {
            method : "POST",
            headers : {
                "Content-Type": "application/json",
            },
            body : JSON.stringify({usernameOrEmail, password})
          })

          const user = await res.json();

          /*const dataReq = {
            usernameOrEmail,
            password 
          }

          const res = await axios.post("/api/v1/auth/login", dataReq);
          const user = res.data; */
          if(res.ok && user){
            return user;
          }else return null;
        }
      })
  ],

  callbacks : {
    async jwt({token, user}){
      return({...token, ...user});
    },
    async session({session, token, user}) {
        session.user = token;
        return session;

    },
  },

  session : {
    strategy : "jwt"
  },

  pages : {
    signIn : "/auth/login"
  }
}

export default NextAuth(authOptions)