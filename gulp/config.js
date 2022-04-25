const srcPath = 'src';
const destPath = 'build';

const config = {
  src: {
    root: srcPath,
    sass: `${srcPath}/scss`,
    js: `${srcPath}/js`,
    fonts: `${srcPath}/assets/fonts`,
    images: `${srcPath}/assets/img`,
    iconsMono: `${srcPath}/assets/icons/mono`,
    iconsMulti: `${srcPath}/assets/icons/multi`,
    favicon: `${srcPath}/assets/favicon`,
    video: `${srcPath}/assets/vids`,
    pug: `${srcPath}/pug`,
  },

  dest: {
    root: destPath,
    html: destPath,
    css: `${destPath}/css`,
    js: `${destPath}/js`,
    fonts: `${destPath}/fonts`,
    images: `${destPath}/images`,
    favicon: `${destPath}/assets/favicon`,
    video: `${destPath}/assets/vids`,
  },

  setEnv() {
    this.isProd = process.argv.includes('--prod');
    this.isDev = !this.isProd;
  },
};

export default config;
