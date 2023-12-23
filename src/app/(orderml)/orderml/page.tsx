export const metadata = {
  title: 'Order - BBI Boosting',
  description: 'Order Page',
}

import React from 'react';
import Orderml from '@/src/components/orderml';
import PageIllustration from '@/src/components/page-illustration';
import Footer from '@/src/components/ui/footer';

export default function OrderPage() {
  return (
    <>
      <PageIllustration />
      <Orderml />
      <Footer />
    </>
  )
}

