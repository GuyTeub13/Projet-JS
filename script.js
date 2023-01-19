
function recommandation(id, famOrigine, recomNom, crit) {
    this.id= id;
    this.recomNom= recomNom;
    this.famOrigine= famOrigine;
    this.crit= crit
    this.toString= function() {
      return this.famOrigine + " "+ recomNom;
    }
}

var catalogue= new Array();
catalogue.push(new recommandation("STR-1.01", "Strategie", "Définir et valider les besoins et les enjeux du projet afin d'anticiper les impacts", "Les réunions sont-elles limitées au strict minimum, en privilégiant le distanciel, lorsque les réunions nécessitent des déplacements physiques ? "));
catalogue.push(new recommandation("STR-1.02", "Strategie", "Définir et valider les besoins et les enjeux du projet afin d'anticiper les impacts", "Le télétravail est-il autorisé, sans limites, aux collaborateurs qui le souhaitent et dont l'activité le permet ?"));
catalogue.push(new recommandation("STR-1.C01", "Strategie", "Définir et valider les besoins et les enjeux du projet afin d'anticiper les impacts", "L'entreprise est-elle ouverte à une démarche NR qui pourrait fédérer les énergies autour d'un projet novateur ?"));
catalogue.push(new recommandation("STR-1.C02", "Strategie", "Définir et valider les besoins et les enjeux du projet afin d'anticiper les impacts", "Est-ce que les stratégies RSE et NR sont associées et systématiquement mises en oeuvre dans tous les projets ?"));
catalogue.push(new recommandation("STR-1.03", "Strategie", "Définir et valider les besoins et les enjeux du projet afin d'anticiper les impacts", "Comment faire du NR plus qu'un objectif de communication ? Est-ce que des résultats concrets sont associés à la démarche NR ? (pas de Greenwashing)"));
catalogue.push(new recommandation("STR-1.04", "Strategie", "Définir et valider les besoins et les enjeux du projet afin d'anticiper les impacts", "Le besoin métier est-il exprimé ?"));
catalogue.push(new recommandation("STR-1.05", "Strategie", "Définir et valider les besoins et les enjeux du projet afin d'anticiper les impacts", "La cible des utilisateurs (principale et secondaire) est-elle définie, pour préciser le besoin métier ?"));
catalogue.push(new recommandation("STR-1.06", "Strategie", "Définir et valider les besoins et les enjeux du projet afin d'anticiper les impacts", "Les matériels utilisateurs sont-ils identifiés ?"));
catalogue.push(new recommandation("STR-1.07", "Strategie", "Définir et valider les besoins et les enjeux du projet afin d'anticiper les impacts", "L’ensemble des produits et services sont-ils indispensables en ligne ? "));
catalogue.push(new recommandation("STR-1.08", "Strategie", "Définir et valider les besoins et les enjeux du projet afin d'anticiper les impacts", "Est ce que je peux proposer de couvrir les besoins autrement, en évitant le digital avec un moyen plus respectueux de l’environnement ? "));
catalogue.push(new recommandation("SPC-1.01", "Specifications", "Organiser les ressources humaines projets pour permettre la prise en compte de la démarche NR", "Les enjeux NR du projet ont-ils été communiqués à l'équipe dès l'origine ?" ))
catalogue.push(new recommandation("SPC-1.02", "Specifications", "Organiser les ressources humaines projets pour permettre la prise en compte de la démarche NR", "Les référents NR de l'organisation sont-ils identifiés ?"))
catalogue.push(new recommandation("SPC-1.C01", "Specifications", "Organiser les ressources humaines projets pour permettre la prise en compte de la démarche NR", "Quelle approche éditoriale est prévue pour sensibiliser les clients au NR ?"))
catalogue.push(new recommandation("SPC-1.03", "Specifications", "Organiser les ressources humaines projets pour permettre la prise en compte de la démarche NR", "Chaque entité de l'équipe Projet dispose-t-elle des compétences NR ?"))
catalogue.push(new recommandation("SPC-1.04", "Specifications", "Inclure les utilisateurs dans les ressources projet NR", "Les données ACV sont-elles réutilisées dans le cas d'une adaptation d'un service existant ?"))
catalogue.push(new recommandation("SPC-2.C01", "Specifications", "Inclure les utilisateurs dans les ressources projet NR", "La définition des besoins est-elle réalisée en consultant les utilisateurs finaux ?"))
catalogue.push(new recommandation("SPC-2.C02", "Specifications", "Inclure les utilisateurs dans les ressources projet NR", "Transmettez-vous une pédagogie NR aux utilisateurs ?"))
catalogue.push(new recommandation("ARCH-1.01", "Architecture", "Appliquer une démarche qui garantit les aspects NR", "Chaque composant peut-il faire l'objet de tests de 'Non Régression' au niveau fonctionnel ? "))
catalogue.push(new recommandation("ARCH-1.C01", "Architecture", "Appliquer une démarche qui garantit les aspects NR", "Une démarche BDD (Behaviour Driven Development)  est-elle mise en oeuvre pour piloter la réalisation par les usages ?"))
catalogue.push(new recommandation("ARCH-1.C02", "Architecture", "Appliquer une démarche qui garantit les aspects NR", "L'automatisation des tâches de compilation, de test, d'intégration et de déploiement existent-elles dans le workflow d'intégration continue ? "))
catalogue.push(new recommandation("ARCH-2.01", "Architecture", "Anticiper l'exploitation des services", "Des sondes existent-elles pour mesurer en production la consommation réelle du code et permettre un dimensionnement au plus juste ? "))
catalogue.push(new recommandation("BCK-1.01", "Back End", "Réduire l'impact des données de leur stockage et accès", "Est-ce que le nombre de requêtes est minimisé (proscrire l'usage de boucle) ?"))
catalogue.push(new recommandation("BCK-1.C01", "Back End", "Réduire l'impact des données de leur stockage et accès", "Est-ce qu'une alternative aux requêtes SQL est utilisée quand c'est possible (local storage ou assimilé)?"))
catalogue.push(new recommandation("BCK-1.02", "Back End", "Réduire l'impact des données de leur stockage et accès", "Est-ce que les requêtes implémentées utilisent les jointures plutôt que de multiplier les requêtes ?"))
catalogue.push(new recommandation("BCK-1.C02", "Back End", "Réduire l'impact des données de leur stockage et accès", "Est-ce que les données peuvent être sauvegardées de manière incrémentale ?"))
catalogue.push(new recommandation("CTN-1.01", "Contenus", "Appliquer une démarche éditoriale pour les contenus", "Est-ce que les prestataires retenus pour la production des contenus ont un engagement NR, RSE, accessibilité (formations, inclusion, éthique) ?"))
catalogue.push(new recommandation("CTN-1.C01", "Contenus", "Appliquer une démarche éditoriale pour les contenus", "Est-ce que l'ensemble des sources utilisées a été vérifié ?"))
catalogue.push(new recommandation("CTN-1.C02", "Contenus", "Appliquer une démarche éditoriale pour les contenus", "Est-ce que les faits et opinions sont clairement identifiables ?"))
catalogue.push(new recommandation("CTN-1.02", "Contenus", "Appliquer une démarche éditoriale pour les contenus", "Quels sont les droits d'utilisation des images, vidéos, illustrations et textes de mon site ?"))
catalogue.push(new recommandation("FRT-1.01", "Front End", "Valider le périmètre et la couverture fonctionnelle du projet", "Est-ce que les fonctions proposées sont bien en rapport avec un usage ?"))
catalogue.push(new recommandation("FRT-1.C01", "Front End", "Valider le périmètre et la couverture fonctionnelle du projet", "Chaque fonction du service est-elle appréhendée en regard de son importance dans le service ?"))
catalogue.push(new recommandation("FRT-1.C02", "Front End", "Valider le périmètre et la couverture fonctionnelle du projet", "Les fonctions secondaires ont-elles aussi un impact moindre sur l'impact environnemental ?"))
catalogue.push(new recommandation("FRT-1.02", "Front End", "Valider le périmètre et la couverture fonctionnelle du projet", "Utilisez-vous des standards de développement éprouvés ?"))
catalogue.push(new recommandation("HEB-1.C01", "Hebergement", "Réduire l'impact de l'hébergement", "Le refroidissement affecte-t-il  les nappes phréatiques ?"))
catalogue.push(new recommandation("HEB-1.C02", "Hebergement", "Réduire l'impact de l'hébergement", "L'emplacement du datacenter affecte-t-il l'écosystème à proximité ?"))
catalogue.push(new recommandation("HEB-1.C03", "Hebergement", "Réduire l'impact de l'hébergement", "La qualité de l'eau est-elle dégradée par son utilisation dans le datacenter ?"))
catalogue.push(new recommandation("HEB-1.01", "Hebergement", "Réduire l'impact de l'hébergement", "L'eau utilisée ne provient-elle pas du réseau d'eau potable ?"))
catalogue.push(new recommandation("UX/UI-1.01", "UX/UI", "Intégrer le Numérique Responsable dans les objectifs majeurs du projet", "Dans les méthodes d'idéation, l'ensemble des parties prenantes est-il pris en compte dans toute sa dimension (humaine) ?"))
catalogue.push(new recommandation("UX/UI-1.02", "UX/UI", "Intégrer le Numérique Responsable dans les objectifs majeurs du projet", "La planète est-elle prise en compte dans les méthodes d'idéation pour intégrer la dimension écologique (planet centric design) ?"))
catalogue.push(new recommandation("UX/UI-1.03", "UX/UI", "Intégrer le Numérique Responsable dans les objectifs majeurs du projet", "Les plus-values extra-financières du numérique responsable sont-elles valorisées dans le business model ?"))
catalogue.push(new recommandation("UX/UI-1.C01", "UX/UI", "Intégrer le Numérique Responsable dans les objectifs majeurs du projet", "Un process NR est-il prévu au niveau de la gouvernance projet ?"))





var panier= new Array();


function remplirCatalogue() {
      var cat= document.getElementById('cat');
    for (var i in catalogue) {
        var e= document.createElement("option");
        e.value=i;
          var txt= document.createTextNode(catalogue[i].id);
          e.appendChild(txt);
        cat.appendChild(e);
    }
}

function ajouterCase(parent, txt) {
  var e= document.createElement("td");
  e.appendChild(document.createTextNode(txt));
  parent.appendChild(e);
  }
  

    
    function ajouter() {
          var cat= document.getElementById('cat');
        var sel= cat.options[cat.selectedIndex].value;
        var recom= catalogue[sel];
        panier.push(recom);
        var ligne= document.createElement("tr");
        ajouterCase(ligne,recom.famOrigine); 
        ajouterCase(ligne,recom.id);
          ajouterCase(ligne,recom.recomNom);
          ajouterCase(ligne,recom.crit);
        document.getElementById("pan").appendChild(ligne);
    }
    


        var recom= catalogue[7];
        panier.push(recom);
        var ligne= document.createElement("tr");
        ajouterCase(ligne,recom.famOrigine); 
        ajouterCase(ligne,recom.id);
        ajouterCase(ligne,recom.recomNom);
        ajouterCase(ligne,recom.crit);
        document.getElementById("pan").appendChild(ligne);

        var recom= catalogue[31];
        panier.push(recom);
        var ligne= document.createElement("tr");
        ajouterCase(ligne,recom.famOrigine); 
        ajouterCase(ligne,recom.id);
        ajouterCase(ligne,recom.recomNom);
        ajouterCase(ligne,recom.crit);
        document.getElementById("pan").appendChild(ligne);

        var recom= catalogue[25];
        panier.push(recom);
        var ligne= document.createElement("tr");
        ajouterCase(ligne,recom.famOrigine); 
        ajouterCase(ligne,recom.id);
        ajouterCase(ligne,recom.recomNom);
        ajouterCase(ligne,recom.crit);
        document.getElementById("pan").appendChild(ligne);
