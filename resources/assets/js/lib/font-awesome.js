import Vue from 'vue';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faBars, faTimes, faPlus, faMinus } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faAngleDown, faBars, faTimes, faPlus, faMinus);

Vue.component('font-awesome-icon', FontAwesomeIcon);

dom.i2svg();
dom.watch();
