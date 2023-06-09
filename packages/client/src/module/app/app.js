import React from 'react';

// import { ThemeProvider } from 'styled-components';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import toast, { Toaster } from 'react-hot-toast';

import i18next from '../common/i18n/config';

// import * as theme from '../../theme';
import * as Styled from './app.styled';
import { MainRouter } from '../navigation';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      cacheTime: Infinity
    }
  },
  queryCache: new QueryCache({
    onError: (error, query) => {
      // 🎉 only show error toasts if we already have data in the cache
      // which indicates a failed background update
      if (query.state.data !== undefined) {
        toast.error(i18next.t('common.something_went_wrong'));
      }
    }
  })
});

const env = process.env.REACT_APP_ENV;

const AppContainer = () => {
  return (
    <>
      {/*<ThemeProvider theme={theme}>*/}
      <Styled.GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <MainRouter />
        {env === 'local' || env === 'dev' ? <ReactQueryDevtools initialIsOpen={false} /> : null}
        <Toaster position="top-right" reverseOrder />
      </QueryClientProvider>
      {/*</ThemeProvider>*/}
    </>
  );
};
export default AppContainer;
