# Plugin translate

Petit plugin permettant l'affichage d'une partie d'un texte en fonction de la langue choisie.

___Alternative à l'ajax dans le cas de petites structures !___

## Pour l'obtenir

Inclure le fichier ___```translate.js```___ (ou ___```translate.min.js```___ pour une version minifiée) :
```html
<script src="translate.js"></script>
```

Ou cloner le dépôt :
```html
git clone https://github.com/alexisdelee/translate.git
```

## Utilisation

```html
<script src="translate.js"></script>
<script type="text/javascript">
    translate.conf({
        selector: '',
        separator: '',
        languages: [],
        language: []
    });
</script>
```

## API

Le plugin translate est composé d'une fonction contenant un namespace, appelé ___translate___. Il prend une unique option sous forme d'objet.

```javascript
translate.config();
```

## Options

Ce plugin est configuré par un objet en paramètre. Les propriétés suivantes sont supportées :

### Selector

Chaîne de caractères. Stocke la classe sélectionnée.

### Separator

Chaîne de caractères. Contient le séparateur.

### Languages

Tableau de chaînes de caractères. Stocke les langues utilises pour le plugin.

### Langage

Chaîne de caractères. Défini la langue utilisée.

Voici un petit exemple pour afficher le texte en espagnol à tous les éléments séparés par " // " ayant la classe "data-translate":

```javascript
translate.conf({
    selector: 'data-translate',
    separator: ' // ',
    languages: ["en", "fr", "es"],
    language: ["es"]
});
```