import $ from 'jquery';
 class ScholarshipApp{
    constructor(){
        this.applyNow = $('.apply-now');
        this.scholarshipApp = $('.scholarship__application');
        this.closeApp = $('.close-app');
        this.events();
    }

    events(){
        this.applyNow.on('click',this.showApp.bind(this));
        //this.closeApp.on('click',this.applyNow.show(),this.hideApplication.bind(this));
        
    }

    showApp(){
        this.scholarshipApp.toggleClass('scholarship__is-visible');
    }
     
    hideApplication(){
        this.scholarshipApp.removeClass('scholarship__is-visible');
    } 
 }

export default ScholarshipApp;

