
import $ from 'jquery';

 class SehkarModal{
    constructor(){
      this.openModalButton = $('.open-sehkar-modal');
      this.modal = $('.sehkar-modal');
      this.closeModalButton = $('.sehkar-modal__close');
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
        this.modal.addClass('sehkar-modal--is-visible');
        return false;
    }

    closeModal(){
        this.modal.removeClass('sehkar-modal--is-visible');
    }


 }
export default SehkarModal;

