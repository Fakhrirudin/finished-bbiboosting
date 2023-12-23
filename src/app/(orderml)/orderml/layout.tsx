'use client'

import React from 'react';
import PageIllustration from '@/src/components/page-illustration';
import Orderml from '@/src/components/orderml';
import Footer from '@/src/components/ui/footer';
import Header4 from '@/src/components/ui/header4';

export default function OrderLayout() {
    return (
        <main>
            <Header4/>
            <PageIllustration />
            <Orderml />
            <Footer />
        </main>
        )
    }
