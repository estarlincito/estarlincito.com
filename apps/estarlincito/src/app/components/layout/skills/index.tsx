import { Grid, Section, Title } from '@repo/ui';
import { CiApple } from 'react-icons/ci';
import { DiMysql } from 'react-icons/di';
import * as FA from 'react-icons/fa';
import { FaLanguage, FaReact, FaRobot } from 'react-icons/fa6';
import { LuFileJson } from 'react-icons/lu';
import { MdOutlineDataObject } from 'react-icons/md';
import {
  RiCheckboxMultipleFill as RiCheckbox,
  RiNextjsFill,
  RiTailwindCssFill as RiTailwind,
} from 'react-icons/ri';
import { SiPrisma, SiTypescript } from 'react-icons/si';
import { TbSeo } from 'react-icons/tb';

import Card from './card';

export const Skills = () => (
  <Section>
    <Title align='center' content=' Skills' mb='5' />

    <Grid columns='repeat(auto-fill, 130px)' gap='3' justify='center'>
      <Card color='var(--red-9)' Icon={FA.FaHtml5} label='HTML5' />
      <Card color='var(--sky-9)' Icon={FA.FaCss3Alt} label='CSS3' />
      <Card color='var(--sky-9)' Icon={RiTailwind} label='Tailwindcss' />
      <Card color='var(--yellow-9)' Icon={FA.FaJs} label='JavaScript' />
      <Card color='var(--blue-9)' Icon={SiTypescript} label='Typescript' />
      <Card color='var(--green-9)' Icon={FA.FaNodeJs} label='Node.js' />
      <Card color='var(--blue-9)' Icon={FaReact} label='React.js' />
      <Card color='var(--black-9)' Icon={RiNextjsFill} label='Next.js' />
      <Card color='var(--green-9)' Icon={DiMysql} label='MySQL' />
      <Card color='var(--gray-9)' Icon={MdOutlineDataObject} label='APIs' />
      <Card color='var(--violet-9)' Icon={TbSeo} label='SEO' />
      <Card color='var(--orange-9)' Icon={FaRobot} label='AI' />
      <Card color='var(--yellow-9)' Icon={LuFileJson} label='JSON' />
      <Card color='var(--red-9)' Icon={FA.FaGitAlt} label='Git' />
      <Card color='var(--black-9)' Icon={FA.FaGithub} label='GitHub' />
      <Card color='var(--black-9)' Icon={FA.FaLinux} label='Linux' />
      <Card color='var(--red-9)' Icon={CiApple} label='Mac OS' />
      <Card color='var(--blue-9)' Icon={FA.FaMicrosoft} label='Windowds' />
      <Card color='var(--sky-9)' Icon={FA.FaAndroid} label='Android' />
      <Card color='var(--jade-9)' Icon={RiCheckbox} label='Multitasking' />
      <Card color='var(--indigo-9)' Icon={FaLanguage} label='Multilingual' />
      <Card color='var(--bronze-9)' Icon={FA.FaDatabase} label='Data entry' />
      <Card color='var(--green-9)' Icon={SiPrisma} label='Prisma' />
      <Card color='var(--orange-9)' Icon={FA.FaCloudflare} label='cloudflare' />
    </Grid>
  </Section>
);
