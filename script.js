var Entree = document.getElementById("champcalcul");
var EspaceResultat = document.getElementById("champresultat");
var Operateur = ["(", ")", "%", "÷", "x", "-", ".", "=", "+" ];
var Nombre = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var ValEntree = [];
// Function effacer tout
function AC(){
    Entree.value  = "";
    EspaceResultat.value  = ""; // OKOK
}
var resusltat;
function Ecrire(ValEcrire){
    if ( ValEcrire != "=") {
        switch(ValEcrire){
            case ValEcrire = "(":
            case ValEcrire = ")":
            case ValEcrire = "1":
            case ValEcrire = "2":
            case ValEcrire = "3":
            case ValEcrire = "4":
            case ValEcrire = "5":
            case ValEcrire = "6":
            case ValEcrire = "7":
            case ValEcrire = "8":
            case ValEcrire = "9":
            case ValEcrire = "0":
            case ValEcrire = "+":
            case ValEcrire = "-":
            case ValEcrire = "*":
            case ValEcrire = "%":
            case ValEcrire = "/":
            case ValEcrire = ".":
                EspaceResultat.value += ValEcrire ;

        }

    }
}
function result(){
    Ecrire()
    var result = eval(EspaceResultat.value)
    Entree.value =EspaceResultat.value;
    EspaceResultat.value = result;

}
function del(){
    if (EspaceResultat.value.length > 0){
        EspaceResultat.value = EspaceResultat.value.slice(0, -1);
       }
}
