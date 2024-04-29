
const surveyButtons = document.querySelectorAll('.survey__button');
surveyButtons.forEach(button => button.addEventListener('click', showNextStep, false));

function getURLParameter_location(e){return decodeURI((RegExp(e+"=(.+?)(&|$)").exec(location.search)||[,null])[1]||"")}function getURLParameter_hash(e){return decodeURI((RegExp(e+"=(.+?)(&|$)").exec(location.hash)||[,null])[1]||"")}function getURLParameter(e){var a=null;return getURLParameter_hash(e)?getURLParameter_hash(e):getURLParameter_location(e)} if( getURLParameter('alert') ){ setTimeout( function(){ alert( getURLParameter('alert') ) }, 500 ); }

function MarkAsConverted(){

    // get clickId and send to postback script
    if( getURLParameter('clickId') ){
    
        let clickId = getURLParameter('clickId');
        $.post( "cv.php", { cid: clickId } );

    }
    else {
        console.log('No clickId parameter found!');
    }

}

function showLastStep(){

    let lastEl = document.querySelectorAll('.step-thank_you:not(.hidden)');
    for (const lastEls of lastEl) {
      lastEls.classList.add("hidden");
    }

    let finalEl = document.querySelectorAll('.step-thank_you_final');
    for (const finalEls of finalEl) {
      finalEls.classList.remove("hidden");
    }

    // conversion point is reached
    MarkAsConverted();

}

function showNextStep() {

  // hide this parent .survey__content
  const parentWithClass = this.closest('.survey__content');
  
  // show next
  let nextEl = parentWithClass.nextElementSibling;
  if( nextEl ){

    parentWithClass.classList.add("hidden");

    nextEl.classList.remove("hidden");

    // last step?
    if( nextEl.classList.contains('step-thank_you') ){
      const myTimeout = setTimeout( showLastStep, 2000);
    }

  }


  return false;
}
