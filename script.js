function imc(){
    let nom = document.getElementById("nom").value;
    let adress = document.getElementById("adress").value;
    let poid = document.getElementById("poid").value;
    let taille = document.getElementById("taille").value;
    const imcs = (poid / taille ** 2).toFixed(2);
    let cat={
        Class:'',
        catImc: 0,
        risq:''
    }
    if ( imcs < 18.5 ){
        cat.Class=" Poids insuffisant ";
        cat.catImc=imcs;
        cat.risq=" Accru "
    } else if (( imcs > 18.5 ) & ( imcs < 24.9 )) {
        cat.Class=" Poids normal ";
        cat.catImc=imcs;
        cat.risq=" Moindre "
    } else if (( imcs > 25.0 ) & ( imcs < 29.9 )) {
        cat.Class=" Exces de poids ";
        cat.catImc=imcs;
        cat.risq=" Accru "
    } else if (( imcs > 30.0 ) & ( imcs < 34.9 )) {
        cat.Class=" Obésité, classe I ";
        cat.catImc=imcs;
        cat.risq=" Elevé "
    } else if (( imcs > 35.0 ) & ( imcs < 39.9 )) {
        cat.Class=" Obésité, classe II ";
        cat.catImc=imcs;
        cat.risq=" Tres élevé "
    } else if ( imcs >= 40.0 ) {
        cat.Class=" Obésité, classe III ";
        cat.catImc=imcs;
        cat.risq=" Extremement élevé "
    }
    window.alert(nom+" adresse "+adress+" Voici votre IMC : Vous etes classifier dans:"+cat.Class+" et Votre imc: "+cat.catImc+" le risque de problemes de santé: "+cat.risq);
} 
