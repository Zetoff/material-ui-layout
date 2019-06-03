// @flow
// flow-typed signature: bf08cf27e4cfc75fd62700996656457e
// flow-typed version: <<STUB>>/css-mediaquery_v0.1.2/flow_v0.91.0

/**
 * This is an autogenerated libdef stub for:
 *
 *   'css-mediaquery'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

declare module 'css-mediaquery' {
  declare export type MediaQueryFeature = {|
    'orientation': string,
    'scan': string,
    'width': string | number,
    'height': string | number,
    'device-width': string | number,
    'device-height': string | number,
    'resolution': string | number,
    'aspect-ratio': string | number,
    'device-aspect-ratio': string | number,
    'device-pixel-ratio': string | number,
    'grid': string | number,
    'color': string | number,
    'color-index': string | number,
    'monochrome': string | number,
  |};

  declare export type Match = (
    query: string,
    values: $Shape<MediaQueryFeature>,
  ) => boolean;

  declare export var match: Match;

  declare export default {
    match: Match,
  };
}

/**
 * We include stubs for each file inside this npm package in case you need to
 * require those files directly. Feel free to delete any files that aren't
 * needed.
 */

// Filename aliases
declare module 'css-mediaquery/index' {
  declare module.exports: $Exports<'css-mediaquery'>;
}
declare module 'css-mediaquery/index.js' {
  declare module.exports: $Exports<'css-mediaquery'>;
}
