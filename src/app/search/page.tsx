import React, { Suspense } from 'react';

import SearchResults from './components/SearchResults';

function SearchPage() {
  return (
    <div className={'mx-5 sm:mx-[50px]'}>
      <Suspense>
        <SearchResults />
      </Suspense>
    </div>
  );
}

export default SearchPage;
