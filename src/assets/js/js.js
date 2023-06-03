var get_valid_message =  function get_valid_message(id,text,color){
    var message = document.querySelector(`#${id}`).querySelector('.v-input__details')
    message.innerHTML = text
    message.style.color= color
    console.log(message)
}
export default {get_valid_message}
