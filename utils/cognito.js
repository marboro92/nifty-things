import Amplify, { Auth } from 'aws-amplify'

const createMockCognitoUser = ({ email }) => {
  return { user: { Username: email }, userConfirmed: true }
}

export const configureAmplify = () => {
  Amplify.configure({
    Auth: {
      userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID,
      userPoolWebClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
    },
  })
}

export const logIn = async ({ email, password }) => {
  const cognitoUser = process.env.NEXT_PUBLIC_MOCK_COGNITO
    ? createMockCognitoUser({ email })
    : await Auth.signIn(email, password)
  return cognitoUser
}

export const signUp = async ({ email, password }) => {
  const { user } = process.env.NEXT_PUBLIC_MOCK_COGNITO
    ? createMockCognitoUser({ email })
    : await Auth.signUp({
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

export const confirmSignUp = async ({ email, code }) => {
  await Auth.confirmSignUp(email, code)
}

export const getSession = async () => await Auth.currentSession()