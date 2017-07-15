import $ from 'jquery';
 class ScholarshipApp{
    constructor(){
        this.applyNow = $('.apply-now');
        this.scholarshipApp = $('.bks');
        this.closeApp = $('.bks__close');
        this.events();
    }

    events(){
        this.applyNow.on('click',this.showApp.bind(this));
        
        this.closeApp.on('click',this.hideApplication.bind(this));
        
        //$(document).keyup(this.keyPressHandler.bind(this));
        
    }

    showApp(){
        this.scholarshipApp.addClass('bks--is-visible');
        return false;
    }
     
    hideApplication(){
        this.scholarshipApp.removeClass('bks--is-visible');
    } 
 }

export default ScholarshipApp;

