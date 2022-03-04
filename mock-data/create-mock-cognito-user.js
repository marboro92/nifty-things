export const createMockCognitoUser = ({ email = 'adam@gmail.com' }) => {
  return {
    user: { Username: email },
    userConfirmed: true,
    artistId: 'a04beeaa-98d6-11ec-aa98-124936d7e845',
  }
}
