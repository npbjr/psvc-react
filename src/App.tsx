import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import { authProvider } from "./authProvider";
import { AccountsList, AccountsCreate, AccountsEdit } from './components/users';
import { CommentsCreate, CommentsEdit, CommentsList } from "./components/comments";
import { PagesList, PagesCreate, PagesEdit } from "./components/pages";
import {dataProvider} from './dataProviders/allProviders'

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
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
      <Resource 
        name="comments" 
        list={CommentsList}
        create={CommentsCreate}
        edit={CommentsEdit}
      />
    <Resource 
      name="pages" 
      list={PagesList}
      create={PagesCreate}
      edit={PagesEdit}
    />
    
  </Admin>
);
