export const metadata = {
  title: 'Games - BBI Boosting',
  description: 'List Game Page',
}

import React from 'react';
import Games from '@/src/components/games';
import PageIllustration from '@/src/components/page-illustration';

export default function GamesPage() {
  return (
    <>
      <PageIllustration/>
      <Games/>
    </>
  )
}

