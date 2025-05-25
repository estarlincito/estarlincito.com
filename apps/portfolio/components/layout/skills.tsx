import { SECTIONS } from '@app/portfolio/constants/home';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card';
import { Heading } from '@repo/ui/components/heading';
import { Container } from '@repo/ui/layouts/container';
import { Grid } from '@repo/ui/layouts/grid';
import { Section } from '@repo/ui/layouts/section';
import { CiApple } from 'react-icons/ci';
import { DiMysql } from 'react-icons/di';
import * as FA from 'react-icons/fa';
import { FaLanguage, FaRobot } from 'react-icons/fa6';
import { LuFileJson } from 'react-icons/lu';
import { MdOutlineDataObject } from 'react-icons/md';
import {
  RiCheckboxMultipleFill as RiCheckbox,
  RiNextjsFill,
  RiTailwindCssFill as RiTailwind,
} from 'react-icons/ri';
import { SiPrisma, SiTypescript } from 'react-icons/si';
import { TbSeo } from 'react-icons/tb';

const items = [
  { color: 'text-red-600', Icon: FA.FaHtml5, title: 'HTML5' },
  { color: 'text-sky-600', Icon: FA.FaCss3Alt, title: 'CSS3' },
  { color: 'text-sky-600', Icon: RiTailwind, title: 'Tailwindcss' },
  { color: 'text-yellow-600', Icon: FA.FaJs, title: 'JavaScript' },
  { color: 'text-blue-600', Icon: SiTypescript, title: 'Typescript' },
  { color: 'text-green-600', Icon: FA.FaNodeJs, title: 'Node.js' },
  { color: 'text-blue-600', Icon: FA.FaReact, title: 'React.js' },
  { color: 'text-black-600', Icon: RiNextjsFill, title: 'Next.js' },
  { color: 'text-green-600', Icon: DiMysql, title: 'MySQL' },
  { color: 'text-gray-600', Icon: MdOutlineDataObject, title: 'APIs' },
  { color: 'text-violet-600', Icon: TbSeo, title: 'SEO' },
  { color: 'text-orange-600', Icon: FaRobot, title: 'AI' },
  { color: 'text-yellow-600', Icon: LuFileJson, title: 'JSON' },
  { color: 'text-red-600', Icon: FA.FaGitAlt, title: 'Git' },
  { color: 'text-black-600', Icon: FA.FaGithub, title: 'GitHub' },
  { color: 'text-black-600', Icon: FA.FaLinux, title: 'Linux' },
  { color: 'text-red-600', Icon: CiApple, title: 'Mac OS' },
  { color: 'text-blue-600', Icon: FA.FaMicrosoft, title: 'Windows' },
  { color: 'text-sky-600', Icon: FA.FaAndroid, title: 'Android' },
  { color: 'text-jade-600', Icon: RiCheckbox, title: 'Multitasking' },
  { color: 'text-indigo-600', Icon: FaLanguage, title: 'Multilingual' },
  { color: 'text-bronze-600', Icon: FA.FaDatabase, title: 'Data entry' },
  { color: 'text-green-600', Icon: SiPrisma, title: 'Prisma' },
  { color: 'text-orange-600', Icon: FA.FaCloudflare, title: 'cloudflare' },
];
export const Skills = () => (
  <Container asChild size='3'>
    <Section className='scroll-mt-28 mt-28' id='skills'>
      <Heading className='text-center mb-5' content={SECTIONS.SKILLS.title} />

      <Grid className='justify-center gap-3 grid-cols-[repeat(auto-fill,130px)]'>
        {items.map(({ Icon, color, title }) => (
          <Card key={title}>
            <CardContent className='flex items-center justify-center'>
              <Icon className={color} size='50px' />
            </CardContent>
            <CardHeader className='flex items-center justify-center'>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </Grid>
    </Section>
  </Container>
);
