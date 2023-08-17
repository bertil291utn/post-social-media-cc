import { gql, useMutation, useQuery } from "@apollo/client";
import { User } from '@interfaces/User';

export const saveUser = async (body: User) => {
  if (!body) throw new Error('Canot be empty body');
  if (!Object.keys(body).length) throw new Error('Canot be empty body');

  const CHECK_EXISTING_USER_QUERY = gql`
    query CheckExistingUser($username: String) {
      users(username: $username) {
        username
      }
    }
  `;


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

  const { username } = body;

  const { data } = await useQuery(CHECK_EXISTING_USER_QUERY, {
    variables: { username },
  });

  if (data?.users.length) {
    console.log("User already exists");
    return;
  }

  const variables = { ...body };
  return addUserMutation({ variables });

}
