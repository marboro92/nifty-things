export const createMockCognitoUser = ({ email = 'adam@gmail.com' }) => {
  return {
    user: { Username: email },
    userConfirmed: true,
    artistId: 'a04beeaa-98d6-11ec-aa98-124936d7e845',
    social: {
      web: 'https://www.asho.com',
      discord: 'https://www.discord.gg/a-sho#000',
      instagram: 'https://www.instagram.com/a-sho',
      twitter: 'https://www.twitter.com/a-sho',
      tiktok: 'https://www.tiktok.com/a-sho',
    },
  }
}
