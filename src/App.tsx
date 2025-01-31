import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import dataProvider  from "./dataProvider";
import { authProvider } from "./authProvider";
import { AccountsList, AccountsCreate, AccountsEdit } from './userAcounts';
import userProvider from "./data_providers/usersProvider"


export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={userProvider}
    authProvider={authProvider}
  >
    {/* <Resource
      name="posts"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="comments"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
   */}
    <Resource
          name="accounts" 
          list={AccountsList}
          create={AccountsCreate}
          edit={AccountsEdit}
      />
  </Admin>
);
