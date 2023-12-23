'use client'


import React from 'react';
import PageIllustration from '@/src/components/page-illustration';
import Games from '@/src/components/games';
import Footer from '@/src/components/ui/footer';
import Header2 from '@/src/components/ui/header2';

export default function GamesLayout() {
    return (
        <main>
            <Header2/>
            <PageIllustration />
            <Games />
            <Footer/>
        </main>
        )
    }
