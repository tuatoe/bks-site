
import $ from 'jquery';

 class EilerModal{
    constructor(){
      this.openModalButton = $('.open-eiler-modal');
      this.modal = $('.eiler-modal');
      this.closeModalButton = $('.eiler-modal__close');
      this.events();
    }

    events(){
      //clicking the open modal button
      this.openModalButton.on('click',this.openModal.bind(this));

      //clicking the x close modal button
      this.closeModalButton.on('click',this.closeModal.bind(this));

      //pushes any key
      $(document).keyup(this.keyPressHandler.bind(this));
    }

    keyPressHandler(e){
      if(e.keyCode == 27){
        this.closeModal();
      }
    }

    openModal(){
        this.modal.addClass('eiler-modal--is-visible');
        return false;
    }

    closeModal(){
        this.modal.removeClass('eiler-modal--is-visible');
    }


 }
export default EilerModal;

