import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card';
import { Heading } from '@repo/ui/components/heading';
import { Container } from '@repo/ui/layouts/container';
import { Gallery } from '@repo/ui/layouts/gallery';
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
  { color: 'text-red-600', Icon: FA.FaHtml5, label: 'HTML5' },
  { color: 'text-sky-600', Icon: FA.FaCss3Alt, label: 'CSS3' },
  { color: 'text-sky-600', Icon: RiTailwind, label: 'Tailwindcss' },
  { color: 'text-yellow-600', Icon: FA.FaJs, label: 'JavaScript' },
  { color: 'text-blue-600', Icon: SiTypescript, label: 'Typescript' },
  { color: 'text-green-600', Icon: FA.FaNodeJs, label: 'Node.js' },
  { color: 'text-blue-600', Icon: FA.FaReact, label: 'React.js' },
  { color: 'text-black-600', Icon: RiNextjsFill, label: 'Next.js' },
  { color: 'text-green-600', Icon: DiMysql, label: 'MySQL' },
  { color: 'text-gray-600', Icon: MdOutlineDataObject, label: 'APIs' },
  { color: 'text-violet-600', Icon: TbSeo, label: 'SEO' },
  { color: 'text-orange-600', Icon: FaRobot, label: 'AI' },
  { color: 'text-yellow-600', Icon: LuFileJson, label: 'JSON' },
  { color: 'text-red-600', Icon: FA.FaGitAlt, label: 'Git' },
  { color: 'text-black-600', Icon: FA.FaGithub, label: 'GitHub' },
  { color: 'text-black-600', Icon: FA.FaLinux, label: 'Linux' },
  { color: 'text-red-600', Icon: CiApple, label: 'Mac OS' },
  { color: 'text-blue-600', Icon: FA.FaMicrosoft, label: 'Windows' },
  { color: 'text-sky-600', Icon: FA.FaAndroid, label: 'Android' },
  { color: 'text-jade-600', Icon: RiCheckbox, label: 'Multitasking' },
  { color: 'text-indigo-600', Icon: FaLanguage, label: 'Multilingual' },
  { color: 'text-bronze-600', Icon: FA.FaDatabase, label: 'Data entry' },
  { color: 'text-green-600', Icon: SiPrisma, label: 'Prisma' },
  { color: 'text-orange-600', Icon: FA.FaCloudflare, label: 'cloudflare' },
];

interface SkillsProps {
  title: string;
}
export const SkillsSection = ({ title }: SkillsProps) => (
  <Container asChild size='3'>
    <Section className='scroll-mt-28 mt-28' id='skills'>
      <Heading className='text-center mb-5' content={title} />

      {/* <Grid className='justify-center gap-3 grid-cols-[repeat(auto-fill,130px)]'> */}
      <Gallery size='2'>
        {items.map(({ Icon, color, label }) => (
          <Card key={label}>
            <CardContent className='flex items-center justify-center'>
              <Icon className={color} size='50px' />
            </CardContent>
            <CardHeader className='flex items-center justify-center'>
              <CardTitle>{label}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </Gallery>
      {/* </Grid> */}
    </Section>
  </Container>
);
