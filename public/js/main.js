// EXO 1

// let quest = prompt('Mettez un nombre')
// let quest2 = prompt('Mettez un nombre')
// console.log(quest,quest2);
// if (quest == quest2) {
//     alert(`le nombre ${quest} et ${quest2} sont-ils égaux?`)
//     alert("oui")
// } 
// EXO 2

// if (quest < quest2) {
//     alert(`le nombre ${quest} est-il plus petit que ${quest2} ?`)
//     alert(`oui`)
// } else {
//     alert(`le nombre ${quest} est-il plus petit que ${quest2} ?`)
//     alert("non")
// }

// EXO 3

// let prems = parseInt(prompt ('Mettez un premier nombre'))
// let dems = parseInt(prompt ('Mettez un second nombre'))
// let trems = parseInt(prompt ('Mettez un troisième nombre'))
// console.log(prems + dems);
// if (prems + dems == trems) {
//     alert(`la somme du nombre ${prems} + le nombre ${dems} est-elle plus grande que le nombre ${trems} ? oui`)
// } else {
//     alert(`la somme du nombre ${prems} + le nombre ${dems} est-elle plus grande que le nombre ${trems} ? non`)
// }
// EXO 4

// let pro = prompt('Tapez ici')
// console.log(pro.length);
// let result = pro.length
// alert('Merci de votre réponse!')
// let pro2 = prompt('Combien de caractères pensez-vous avoir dans votre phrase ?')
// if (pro2 == result) {
//     alert(`Bravo! il y'a bien ${result} caractères!`)
// } else {
//     alert(`Dommage! Tu n'étais qu'à ${Math.abs(result - pro2)} unités de la bonne réponse`)
// }

// EXO 5

// let prenom = prompt ('Veuillez introduire votre nom')
// if (prenom == 0) {
//     ask = prompt('Attention vous devez remplir le champs ci dessous, Quel est votre prénom ?')
// } else {
//     alert (`Bonjour ${prenom}`)
// }

// EXO 6
let pack = prompt ('Bienvenu(e) chez Beny Inc. désirez-vous vous abonnez ?')
let result1 = ('Normal')
let result2 = ('Luxe')
if (pack == 'oui') {
    prompt('Désirez-vous prendre le pack Normal ou de Luxe ?')
    alert(`Félicitation vous avez choisis la formule ${pack}!`)
} else {
    ask = prompt('Est-vous certaine ?')
    if (ask == 'oui') {
        alert('Dommage! Bonne journée')
    } else {
        prompt('Désirez-vous prendre le pack Normal ou de Luxe ?')
    }
    
}

// EXO 7
// let quest1 = prompt("Quel est ta couleur préférée ?")
// let quest2 = prompt ("Quel est ta ville préférée ?")
// let rep1 = "Bleu"
// let rep2 = "New York"
// if (ask != reponse1 && ask2 != reponse2) {
//         alert("Aucune des 2 réponses est valide");
//     } else if (ask != rep1 && quest2 == rep2) {
//         alert("Tu es presque ");
//     } else if (ask == rep1 && quest2 != rep2) {
//         alert("Tu es presque ");
//     } else if (ask == rep1 && quest2 == rep2) {
//         alert("Bien joué ");
//     };
    
let ask = prompt("Comment trouves-tu mes bombons? ");
let ask2 = prompt("Comment trouves-tu les marshmallows");
let reponse1 = "Bon";
let reponse2 = "Pas bon";
if (ask != reponse1 && ask2 != reponse2) {
    alert("Aucune des 2 réponses est valide");
} else if (ask != reponse1 && ask2 == reponse2) {
    alert("Tu es presque ");
} else if (ask == reponse1 && ask2 != reponse2) {
    alert("Tu es presque ");
} else if (ask == reponse1 && ask2 == reponse2) {
    alert("Bien joué ");
};

// Exo 8
// let age = prompt("Quel est votre age? ");
// if (age > 100) {
//     alert("Vous ne pouvez pas reserver car vous etes trop vieux");
// } else if ( age < 0) {
//     alert("Vous ne pouvez pas reserver car vous n'etes meme pas né");
// } else if ( age < 18) {
//     alert("Vous ne pouvez pas reserver car vous etes mineur");
// } else if ( age > 18 ) {
//     alert("Vous pouvez reserver car vous etes majeur");
// } else {
//     alert("Vous pouvez rentrer mais c'est tout juste")
// }

// Exo 9
// let riche = prompt("Est-ce que vous etes riche? ");
// let vacances = prompt("Voulez vous partir en vacances? ");
// let chat = prompt("Est-ce que vous avez un chat");
// if ( vacances == "non") {
//     alert("Pas de problème, ne partez pas en vacances");
// } else if ( riche == "non" || chat == "oui") {
//     alert("Meme si vous voulez, vous ne pouvez pas partir");
// } else if ( riche == "oui" && chat == "non") {
//     alert("Vous pourriez partir en vacances si vous le vouliez");
// } else if ( riche == "oui" && chat=="non" && vacances == "oui") {
//     alert("Tout est parfait, partez en vacances");
// } 

// if (vacances == "oui" ) {

//     if (riche == "non" || chat == "oui") {
//         alert("Meme si vous voulez, vous ne pouvez pas partir");

//     } else if (riche == "oui" && chat == "non") {
//         alert("Tout est parfait, partez en vacances");

//     } else if (riche == "oui" || chat == "non") {
//         alert("InchAllah, t'es riche sinon tu reste a la dar a fou")
//     }

// } else {
//     alert("Pas de problème, ne partez pas en vacances");
// }


