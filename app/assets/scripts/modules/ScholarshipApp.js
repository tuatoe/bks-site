import $ from 'jquery';
 class ScholarshipApp{
    constructor(){
        this.applyNow = $('.apply-now');
        this.scholarshipApp = $('.scholarship__application');
        this.events();
    }

    events(){
        this.applyNow.click(alert('hi'));
    }

    showApp(){
        
        this.scholarshipApp.addClass('.scholarship--is-visible');
    }

 }
export default ScholarshipApp;


