import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import SehkarModal from './modules/SehkarModal';
import EilerModal from './modules/EilerModal';
import DahnweihModal from './modules/DahnweihModal';
import AllisonModal from './modules/AllisonModal';
import MiantonaModal from './modules/MiantonaModal';
import ScholarshipApp from './modules/ScholarshipApp';
import Modal from './modules/Modal';
import TabContent from './modules/TabContent';
import PahModal from './modules/PahModal';


var mobileMenu = new MobileMenu();

//reveal our team section
new RevealOnScroll($('.our-team'), '85%');

//reveal what we do section
new RevealOnScroll($('.reveal-what-we-do'), '70%');

//reveal how you can help
new RevealOnScroll($('.reveal-how-you-can-help'), '70%');

//reveal about bks section
new RevealOnScroll($('.reveal-about-bks'), '70%'); 

//reveal gallery
new RevealOnScroll($('.reveal-gallery'), '70%'); 

//reveal gallery
new RevealOnScroll($('.reveal-scholarship'), '70%'); 

//reveal resource center
new RevealOnScroll($('.reveal-resource-center'), '70%');

//reveal events
new RevealOnScroll($('.reveal-events'), '70%');

var stickyHeader = new StickyHeader();

var scholarshipApp = new ScholarshipApp();

var modal = new Modal();

var tabContent = new TabContent();

var sehkarModal = new SehkarModal();
var eilerModal = new EilerModal();
var dahnweihModal = new DahnweihModal();
var allisonModal = new AllisonModal();
var miantonaModal = new MiantonaModal();
var pahModal = new PahModal();


