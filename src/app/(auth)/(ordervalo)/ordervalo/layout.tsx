'use client'

import React from 'react';
import PageIllustration from '@/src/components/page-illustration';
import Header4 from '@/src/components/ui/header4';
import Ordervalo from '@/src/components/ordervalo';
import Footer from '@/src/components/ui/footer';

export default function OrdervLayout() {
    return (
        <main>
            <Header4/>
            <PageIllustration />
            <Ordervalo />
            <Footer />
        </main>
        )
    }
