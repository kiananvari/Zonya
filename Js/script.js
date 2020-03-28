//important : (npm install) to install Bootstrap modules
//import modules in .js file for Parcel Builder

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

//import styles file for Parcel Builder
import './../Styles/styles.css'



document.getElementById("startBtn").addEventListener("click", StartBtnClicked);

function StartBtnClicked() {

           console.log("startProjectClicked");

}

