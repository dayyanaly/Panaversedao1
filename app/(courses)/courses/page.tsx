"use client";
import { FC } from 'react';
import Program from '@/components/Program';
import Corecourses from '@/components/Corecourses'
import Metaverse from '@/components/Metaverse'
import Ai from '@/components/Ai'
import Cnc from '@/components/Cnc'
import Iot from '@/components/Iot'
import Genomics from '@/components/Genomics'
import Network from '@/components/Network'
import A from '@/components/A'
import B from '@/components/B'
import C from '@/components/C'
import D from '@/components/D'
import E from '@/components/E'
import F from '@/components/F'


const c: FC = () => {
  return (
    <>
      <main style={{ marginTop: "80px" }}></main>
      <Program />
      <Corecourses />
      <A />
      <Metaverse />
      <B />
      <Ai />
      <C/>
      <Cnc />
      <D />
      <Iot />
      <E />
      <Genomics/>
      <F />
      <Network />
      

    </>
  )
};

export default c;