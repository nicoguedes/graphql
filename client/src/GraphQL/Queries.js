import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
    query{
            platform{
            id
            name
            commands{
                id
                howTo
                commandLine
            }
        }
    }
`;
