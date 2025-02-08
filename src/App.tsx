import {
  Admin,
  Resource,
  localStorageStore,
  useStore,
  StoreContextProvider,
} from "react-admin";
import { Layout } from "./Layout";
import { authProvider } from "./authProvider";
import { AccountsList, AccountsCreate, AccountsEdit } from './components/users';
import { CommentsCreate, CommentsEdit, CommentsList } from "./components/comments";
import { PagesList, PagesCreate, PagesEdit } from "./components/pages";
import { dataProvider } from './dataProviders/allProviders';
import CommentIcon from '@mui/icons-material/Comment';
import UserIcon from '@mui/icons-material/People';
import ArticleIcon from '@mui/icons-material/Article';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import { themes, ThemeName } from './themes/themes';
import { LottoResultList } from "./components/lotto";
const store = localStorageStore(undefined, 'ECommerce');

const App = () => {
  const [themeName] = useStore<ThemeName>('themeName', 'soft');
  const currentTheme = themes.find(theme => theme.name === themeName);
  
  return (
    <Admin
      layout={Layout}
      store={store}
      dataProvider={dataProvider}
      authProvider={authProvider}
      disableTelemetry
      lightTheme={currentTheme?.light}
      darkTheme={currentTheme?.dark}
      defaultTheme="light"
    >
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
      <Resource 
        
        icon={ThreeDRotation}
        name="lotto" 
        list={LottoResultList}
      />
    </Admin>
  );
};

const AppWrapper = () => (
  <StoreContextProvider value={store}>
    <App />
  </StoreContextProvider>
);

export default AppWrapper;
