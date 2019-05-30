// @flow

import * as React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQueryTheme';
import type { Theme } from '@material-ui/core/styles';
import classNames from 'classnames';
import compose from 'recompose/compose';
import type { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

import type { Classes } from '../../../types';
import styles from './styles';

type Props = {
  classes: Classes,
  topLeftContent: React.Node,
  topCenterContent: React.Node,
  topRightContent: React.Node,
  bottomLeftContent: React.Node,
  bottomCenterContent: React.Node,
  bottomRightContent: React.Node,
  smallScreenWidth: Breakpoint,
};

// TODO find a way to better overwrite the items styles
const style = {
  item: {
    padding: '0px',
  },
};

const TwoRowsAppBar = ({
  classes,
  topLeftContent,
  topCenterContent,
  topRightContent,
  bottomLeftContent,
  bottomCenterContent,
  bottomRightContent,
  smallScreenWidth = 'xs',
}: Props): React.Node => {
  const theme: Theme = useTheme();
  const smallScreen: boolean = useMediaQuery(
    theme.breakpoints.down(smallScreenWidth)
  );

  return (
    <Toolbar>
      <Grid
        container
        direction="column"
        className={classes.wrapper}
        spacing={2}
      >
        <Grid
          container
          className={classNames(classes.row, classes.topRow)}
          justify="space-between"
          spacing={2}
        >
          <Grid
            item
            style={style.item}
            xs={2}
            sm={4}
            md={3}
            lg={2}
            className={classes.left}
          >
            {topLeftContent}
          </Grid>
          <Grid
            item
            style={style.item}
            xs={8}
            sm={4}
            md={6}
            lg={8}
            className={classNames(classes.topCenter, {
              [`${classes.centerBig}`]: !smallScreen,
            })}
          >
            {topCenterContent}
          </Grid>
          <Grid
            item
            style={style.item}
            xs={2}
            sm={4}
            md={3}
            lg={2}
            className={classes.right}
          >
            {topRightContent}
          </Grid>
        </Grid>
        <Grid
          container
          className={classNames(classes.row, classes.bottomRow)}
          justify="space-between"
          spacing={2}
        >
          <Grid
            item
            style={style.item}
            xs={2}
            sm={4}
            md={3}
            lg={2}
            className={classes.left}
          >
            {bottomLeftContent}
          </Grid>
          <Grid
            item
            style={style.item}
            xs={8}
            sm={4}
            md={6}
            lg={8}
            className={classNames(classes.bottomCenter, {
              [`${classes.centerBig}`]: !smallScreen,
            })}
          >
            {bottomCenterContent}
          </Grid>
          <Grid
            item
            style={style.item}
            xs={2}
            sm={4}
            md={3}
            lg={2}
            className={classes.right}
          >
            {bottomRightContent}
          </Grid>
        </Grid>
      </Grid>
    </Toolbar>
  );
};

TwoRowsAppBar.defaultProps = {
  classes: {},
  topLeftContent: null,
  topCenterContent: null,
  topRightContent: null,
  bottomLeftContent: null,
  bottomCenterContent: null,
  bottomRightContent: null,
  smallScreenWidth: 'xs',
};

export default compose(withStyles<string, *>(styles))(
  React.memo<Props>(TwoRowsAppBar)
);
