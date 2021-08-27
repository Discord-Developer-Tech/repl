import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Discord({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      scope: "identify guilds",
    }),
  ],
  secret: process.env.JWT_SECRET,
  session: {
    jwt: true,
  },
  callbacks: {
    async redirect(url, baseUrl) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async session(session, user) {
      session.user.id = user.id;
      session.user.discriminator = user.discriminator;
      session.user.accessToken = user.accessToken;
      session.user.fullName = session.user.name + "#" + user.discriminator;

      return Promise.resolve(session);
    },
    async jwt(token, user, account, profile) {
      if (user) {
        token.accessToken = account.accessToken;
        token.refreshToken = account.refreshToken;
        token.id = profile.id;
        token.discriminator = profile.discriminator;
      }
      return Promise.resolve(token);
    },
  },
  database: process.env.DATABASE_URL,
});
