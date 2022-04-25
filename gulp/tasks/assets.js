import gulp from 'gulp';
import config from '../config';

const fontsBuild = () => (
  gulp.src(`${config.src.fonts}/**/*`)
    .pipe(gulp.dest(config.dest.fonts))
);

const faviconBuild = () => (
  gulp.src(`${config.src.favicon}/**/*`)
    .pipe(gulp.dest(config.dest.favicon))
);

const videoBuild = () => (
  gulp.src(`${config.src.video}/**/*`)
    .pipe(gulp.dest(config.dest.video))
);

export const assetsBuild = gulp.parallel(fontsBuild, faviconBuild, videoBuild);

export const assetsWatch = () => {
  gulp.watch(`${config.src.fonts}/**/*`, fontsBuild);
  gulp.watch(`${config.src.favicon}/**/*`, faviconBuild);
  gulp.watch(`${config.src.video}/**/*`, videoBuild);
};
