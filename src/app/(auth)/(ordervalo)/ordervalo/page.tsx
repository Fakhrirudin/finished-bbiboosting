export const metadata = {
  title: 'Order - BBI Boosting',
  description: 'Order Page',
}

import React from 'react';
import Ordervalo from '@/src/components/ordervalo';
import PageIllustration from '@/src/components/page-illustration';
import Footer from '@/src/components/ui/footer';

export default function OrdervPage() {
  return (
    <>
      <PageIllustration />
      <Ordervalo />
      <Footer />
    </>
  )
}

