export const createMockCognitoUser = ({ email = 'mock_user@gmail.com' }) => {
  return {
    user: { Username: email },
    userConfirmed: true,
    creatorId: 'a04beeaa-98d6-11ec-aa98-124936d7e845',
    social: {
      web: '',
      discord: '',
      instagram: '',
      twitter: '',
      tiktok: '',
    },
  }
}
