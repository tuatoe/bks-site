
import $ from 'jquery';

 class DahnweihModal{
    constructor(){
      this.openModalButton = $('.open-dahnweih-modal');
      this.modal = $('.dahnweih-modal');
      this.closeModalButton = $('.dahnweih-modal__close');
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
        this.modal.addClass('dahnweih-modal--is-visible');
        return false;
    }

    closeModal(){
        this.modal.removeClass('dahnweih-modal--is-visible');
    }


 }
export default DahnweihModal;

