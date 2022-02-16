import Amplify, { Auth } from 'aws-amplify'

export const configureAmplify = () => {
  Amplify.configure({
    Auth: {
      userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID,
      userPoolWebClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
    },
  })
}

export const logIn = async ({ email, password }) => {
  const cognitoUser = await Auth.signIn(email, password)
  return cognitoUser
}

export const signUp = async ({ email, password }) => {
  const { user } = await Auth.signUp({
    username: email,
    password,
    attributes: {
      email,
      preferred_username: email,
    },
  })
  if (user) {
    return user
  }
  throw new Error('User not registered')
}
