import { gql } from "apollo-server-express";

const userType = gql`
  enum Role {
    ADMIN
    MODERATOR
    USER
  }

  type User {
    id: ID
    fullName: String!
    username: String!
    email: String!
    role: Role!
    isEmailVerified: Boolean!
    createdAt: String!
    updatedAt: String!
  }

  type PaginatedUser {
    users: [User]!
    totalUsers: Int!
  }

  input RegisterInput {
    fullName: String!
    username: String!
    email: String!
    password: String!
  }

  input LoginInput {
    usernameOrEmail: String!
    password: String!
  }

  type UserResponse {
    user: User
    errors: [Error]
  }

  type Error {
    field: String!
    message: String!
  }

  type Query {
    getCurrentUser: User
    getUserById(userId: ID): User
    getAllUsers(currentPageNumber: Int!, limitValue: Int!): PaginatedUser!
  }

  type Mutation {
    register(userInfo: RegisterInput!): UserResponse!
    login(userInfo: LoginInput!): UserResponse!
    forgotPassword(email: String!): Boolean!
    changeForgotPassword(token: String!, newPassword: String!): UserResponse!
    sendAccountVerificationEmail: Boolean!
    verifyUserAccount(token: String!): UserResponse!
    changePassword(oldPassword: String!, newPassword: String!): UserResponse!
    sendNewEmailAddressVerificationEmail(
      newEmailAddress: String!
      password: String!
    ): UserResponse!
    changeEmailAddress(token: String!): UserResponse!
    logout: Boolean!
    changeUsername(newUsername: String!): UserResponse!
    changeFullName(newFullName: String!): UserResponse!
    addMockUserData(numberOfUsers: Int!): Boolean!
  }
`;

export default userType;
