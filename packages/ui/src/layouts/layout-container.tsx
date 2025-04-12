import { Grid, type GridProps } from '@radix-ui/themes';
import stylez from '@stylezjs/stylez';

const styles = stylez.create({
  minHeight: '100vh',
  width: '100%',
});

const stylesRows = stylez.create({
  gridTemplateRows: 'auto 1fr auto',
});

const baseClassName = stylez.className(styles).className;
const rowsClassName = stylez.className(stylesRows).className;

interface Props {
  threePart?: boolean;
}

export const LayoutContainer = ({ threePart, ...props }: Props & GridProps) => (
  <Grid
    className={`${baseClassName} ${threePart ? rowsClassName : ''}`}
    {...props}
  />
);

// export const LayoutContainer = withDefaultProps(Grid, {
//   minHeight: '100vh',
//   width: '100%',
// });
