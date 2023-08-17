import { gql, useMutation } from "@apollo/client";
import { User } from '@interfaces/User';

export const saveUser = (body: User) => {
  const SAVE_USER_QUERY = gql`
    mutation AddUser($avatarURL: String = "", $id: ID = "", $name: String = "", $username: String = "") {
      createUsers(
        input: {id: $id, avatarURL: $avatarURL, username: $username, name: $name}
      ) {
        users {
          avatarURL
          id
          name
          username
        }
      }
    }
  `;


  const [addUserMutation, { loading, error }] = useMutation(SAVE_USER_QUERY);
  return addUserMutation({ variables:body });

}
