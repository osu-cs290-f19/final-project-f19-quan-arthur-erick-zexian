

/***************
 * JavaScript for create_post page
 * Erick Branner
 ***************/


/* Variables */

const NUM_FIELDS = 10;
const OPTIONAL_IDX = 6;
const IPT_CLASS = 'create-input';

var postInfo;
var postInfoArr = new Array(NUM_FIELDS);


/* Functions */

function allFields(){
    for(var i = 0; i < NUM_FIELDS; i++){
        if(i != OPTIONAL_IDX){
            if(document.getElementsByClassName(IPT_CLASS)[i].value.toString() == ""){
                return false;
            }
        }
    }
    return true; 
}


function storeInput(){
    postInfo = document.getElementsByClassName(IPT_CLASS);
    for(var i = 0; i < NUM_FIELDS; i++){
        postInfoArr[i] = postInfo[i];
    }
    console.log(postInfoArr);
    console.log('== Input stored in postInfoArr');
    return;
}


/* Event Listeners */

var goBack = document.getElementById('create-back');
goBack.addEventListener('click', () =>{
    console.log('== Go back clicked');
});

var createButton = document.getElementById('create-accept');
createButton.addEventListener('click', () =>{
    // console.log('== Create clcked');
    if(!allFields()){
        alert('Please provide input for all fields');
    }
    else{
        // console.log('== Store input data')
        storeInput();
    }

});