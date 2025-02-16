import usersProvider from './usersProvider';
import PagesProvider from './pagesProvider';
import CommentsProvider from './commentsProvider';
import LottoResultProvider from './lottoProvider';
import { defaultDataProvider } from 'react-admin';

export const dataProvider = new Proxy(defaultDataProvider, {
    get: (target, name) => {
        return (resource:any, params:any) => {
            if (typeof name === 'symbol' || name === 'then') {
                return;
            }
            if (resource.startsWith('comments')) {
                return CommentsProvider[name](resource.substring(5), params);
            }
            if (resource.startsWith('accounts')) {
                return usersProvider[name](resource.substring(5), params);
            }
            if (resource.startsWith('pages')) {
                return PagesProvider[name](resource.substring(5), params);
            }
            if (resource.startsWith('Lotto Result')) {
                return LottoResultProvider[name](resource.substring(5), params);
            }
            // if (resource.startsWith('aiassistant')) {
            //     return LottoResultProvider[name](resource.substring(5), params);
            // }
            
        }
    },
});
