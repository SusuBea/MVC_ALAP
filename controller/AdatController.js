import AdatModel from "../model/AdatModel.js";
import AdatView from "../view/AdatView.js";

class AdatController{
    constructor(){

         console.log("controller")
         this.adatView = new AdatView("Kattints a gombra", $(".tartalom"))
         this.adatModel = new AdatModel("Bea!");



         /** itt iratkozunk fel a view  eseményeire*/
         $(window).on("adatKeres" , (event) => {
            console.log(event.detail)
            const miObjektumunk = event.detail;
            console.log(miObjektumunk)
            let szoveg = this.adatModel.koszon()    
            this.adatView.setPelem(szoveg)
        })
    }
   

}

export default AdatController;