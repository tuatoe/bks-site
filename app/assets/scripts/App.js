import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';



var mobileMenu = new MobileMenu();

//reveal our team section
new RevealOnScroll($('.our-team'), '85%');

//reveal what we do section
//new RevealOnScroll($('.reveal-what-we-do'), '70%');

//reveal about bks section
//new RevealOnScroll($('.reveal-about-bks'), '70%');

var stickyHeader = new StickyHeader();

var modal = new Modal();