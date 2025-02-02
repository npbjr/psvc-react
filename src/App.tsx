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
import CommentIcon from '@mui/icons-material/Comment';
import UserIcon from '@mui/icons-material/People';
import ArticleIcon from '@mui/icons-material/Article'
import dashboard from "./components/dashboard";
export const App = () => (
  <Admin
    dashboard={dashboard}
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
    icon={UserIcon}
          name="accounts" 
          list={AccountsList}
          create={AccountsCreate}
          edit={AccountsEdit}
      />
      <Resource 
      icon={CommentIcon}
        name="comments" 
        list={CommentsList}
        create={CommentsCreate}
        edit={CommentsEdit}
      />
    <Resource 
    icon={ArticleIcon}
      name="pages" 
      list={PagesList}
      create={PagesCreate}
      edit={PagesEdit}
    />
    
  </Admin>
);
