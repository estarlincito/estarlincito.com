import { Grid, Section } from '@radix-ui/themes';
import { Title } from '@repo/ui';
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

export const Skills = () => {
  return (
    <Section>
      <Title contents=' Skills' align='center' mb='5' />

      <Grid columns='repeat(auto-fill, 130px)' justify='center' gap='3'>
        <Card label='HTML5' Icon={FA.FaHtml5} color='var(--red-9)' />
        <Card label='CSS3' Icon={FA.FaCss3Alt} color='var(--sky-9)' />
        <Card label='Tailwindcss' Icon={RiTailwind} color='var(--sky-9)' />
        <Card label='JavaScript' Icon={FA.FaJs} color='var(--yellow-9)' />
        <Card label='Typescript' Icon={SiTypescript} color='var(--blue-9)' />
        <Card label='Node.js' Icon={FA.FaNodeJs} color='var(--green-9)' />
        <Card label='React.js' Icon={FaReact} color='var(--blue-9)' />
        <Card label='Next.js' Icon={RiNextjsFill} color='var(--black-9)' />
        <Card label='MySQL' Icon={DiMysql} color='var(--green-9)' />
        <Card label='APIs' Icon={MdOutlineDataObject} color='var(--gray-9)' />
        <Card label='SEO' Icon={TbSeo} color='var(--violet-9)' />
        <Card label='AI' Icon={FaRobot} color='var(--orange-9)' />
        <Card label='JSON' Icon={LuFileJson} color='var(--yellow-9)' />
        <Card label='Git' Icon={FA.FaGitAlt} color='var(--red-9)' />
        <Card label='GitHub' Icon={FA.FaGithub} color='var(--black-9)' />
        <Card label='Linux' Icon={FA.FaLinux} color='var(--black-9)' />
        <Card label='Mac OS' Icon={CiApple} color='var(--red-9)' />
        <Card label='Windowds' Icon={FA.FaMicrosoft} color='var(--blue-9)' />
        <Card label='Android' Icon={FA.FaAndroid} color='var(--sky-9)' />
        <Card label='Multitasking' Icon={RiCheckbox} color='var(--jade-9)' />
        <Card label='Multilingual' Icon={FaLanguage} color='var(--indigo-9)' />
        <Card label='Data entry' Icon={FA.FaDatabase} color='var(--bronze-9)' />
        <Card label='Prisma' Icon={SiPrisma} color='var(--green-9)' />
        <Card
          label='cloudflare'
          Icon={FA.FaCloudflare}
          color='var(--orange-9)'
        />
      </Grid>
    </Section>
  );
};
