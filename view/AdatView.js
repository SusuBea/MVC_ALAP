class AdatView{
    constructor(szoveg, szuloElem){
        /*ha rákattintunk a gombra, akkor a p-tagbe írja ki a kapott szöveget*/
        this.szuloElem = szuloElem
        this.pElem =$('p')
        this.pElem =this.szuloElem.children('p')
        this.buttonElem=this.szuloElem.children('button')
        this.szoveg = szoveg;
        this.setPelem(this.szoveg)
        this.buttonElem.on("click", () => {
            console.log("katt")
            this.#esemenyTrigger("adatKeres") //adatKeres: itt adom meg az esemeny nevét
            //kiváltunk egy saját eseményt
        })

    }

    setPelem(ertek){
        this.pElem.append(ertek)
    }

    #esemenyTrigger(esemenynev){
        const e = new CustomEvent(esemenynev, {detail:this})
        window.dispatchEvent(e)
    }

}

export default AdatView;