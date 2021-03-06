// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import gallerySlider from './modules/gallerySlider';
import exposure from './modules/exposure';
import partnersShowBtn from './modules/partnersShowBtn';
import participantsSlider from './modules/participantsSlider';
import map from './modules/map';
import fixedHeader from './modules/fixedHeader';
import anchorLInks from './modules/anchorLInks.js';
import openMenu from './modules/openMenu.js';
import numberMobileSlider from './modules/numberMobileSlider.js';
import sectionAnimation from './modules/sectionAnimation.js';
import revealBlocks from './modules/revealBlocks.js';
import initModal from './modules/initModal.js';
import initSelect from './modules/initSelect';
import startingAnimation from './modules/startingAnimation.js';
import programAnimation from './modules/programAnimation.js';
import registration from "./modules/registration.js";
import validation from './modules/validation.js';
import phoneMask from './modules/phoneMask.js';
import dadata from './modules/dadata.js';

window.addEventListener("load", ()=>{
  setTimeout(() => {
    startingAnimation();
  }, 200);
});

documenReady(() => {
  const kdwAPI = {
    parsleyForms: [],
    customSelects: []
  };
  window.kdwAPI = kdwAPI;

  lazyIMages();
  gallerySlider();
  exposure();
  partnersShowBtn();
  participantsSlider();
  map();
  fixedHeader();
  anchorLInks();
  openMenu();
  numberMobileSlider();
  sectionAnimation();
  revealBlocks();
  initModal();
  initSelect();
  programAnimation();
  registration();
  validation();
  phoneMask();
  dadata();
});
