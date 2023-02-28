"use client";
import { FC } from 'react';
import Teacher1 from '@/components/Teacher1'
import Teacher2 from '@/components/Teacher2'
import Teacher3 from '@/components/Teacher3'
import Teacher4 from '@/components/Teacher4'
import Teacher5 from '@/components/Teacher5'

import T1info from '@/components/T1info'
import T2info from '@/components/T2info'
import T3info from '@/components/T3info'
import T4info from '@/components/T4info'
import T5info from '@/components/T5info'



const t: FC = () => {
    return (
      <>
        <main style={{ marginTop: "80px" }}></main>
        
        <T1info/>
        <Teacher1 />
        <T2info/>
        <Teacher2 />
        <T3info/>
        <Teacher3 />
        <T4info/>
        <Teacher4 />
        <T5info/>
        <Teacher5 />

       </>
    )
}
export default t;