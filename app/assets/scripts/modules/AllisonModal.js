
import $ from 'jquery';

 class AllisonModal{
    constructor(){
      this.openModalButton = $('.open-allison-modal');
      this.modal = $('.allison-modal');
      this.closeModalButton = $('.allison-modal__close');
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
        this.modal.addClass('allison-modal--is-visible');
        return false;
    }

    closeModal(){
        this.modal.removeClass('allison-modal--is-visible');
    }


 }
export default AllisonModal;

