import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

const providers = [
  CredentialsProvider({
    name: 'Credentials',
    credentials: {
      username: { label: 'username', type: 'text' },
      password: { label: 'password', type: 'password' },
    },
    async authorize(credentials) {
      if (
        credentials.username === 'foodstorage' &&
        credentials.password === 'foodstorage'
      ) {
        return {
          name: 'Test-User',
          email: 'test@example.com',
        };
      } else {
        return null;
      }
    },
  }),
  GithubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
  }),
];

export const authOptions = {
  providers,
  secret: process.env.NEXT_PUBLIC_SECRET,
};
export default NextAuth(authOptions);
