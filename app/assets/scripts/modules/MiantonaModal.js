
import $ from 'jquery';

 class MiantonaModal{
    constructor(){
      this.openModalButton = $('.open-miantona-modal');
      this.modal = $('.miantona-modal');
      this.closeModalButton = $('.miantona-modal__close');
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
        this.modal.addClass('miantona-modal--is-visible');
        return false;
    }

    closeModal(){
        this.modal.removeClass('miantona-modal--is-visible');
    }


 }
export default MiantonaModal;

