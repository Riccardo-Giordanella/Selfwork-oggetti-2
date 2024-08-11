let rubrica = {
    "contacts" : [
        {nome : "Nicola", telefono : 3331111111},
        {nome: "Riccardo", telefono : 3332222222 },
        {nome : "Francesco", telefono : 3333333333},
        {nome : "Giovanni", telefono : 3334444444}
    ],

    mostra_contatti : function(){
        this.contacts.forEach((contatto)=> console.log(contatto));

    },

    aggiungi_contatto : function(name, phone){
        let nuovo_contatto = {nome : name, telefono : phone};
        this.contacts.push(nuovo_contatto);
    },

    rimuovi_contatto : function(nameindex){
        let index = this.contacts.indexOf(nameindex);
        if(index >= 0){
            this.contacts.splice(nameindex, 1);

        }else{
            console.log(`${nameindex} non presente in rubrica`);

        }

    },

    modifica_contatto: function (nome, nuovoNome, nuovoTelefono) {
        let contatto = this.contacts.find(contatto => contatto.nome === nome);
        if (contatto) {
            contatto.nome = nuovoNome || contatto.nome;
            contatto.telefono = nuovoTelefono || contatto.telefono;
        }
    },

    ricerca_contatto: function (nome) {
        return this.contacts.find(contatto => contatto.nome === nome);
    },
}

rubrica.mostra_contatti();
rubrica.aggiungi_contatto("Daniele", 3335555555);
rubrica.rimuovi_contatto("Daniele");
rubrica.modifica_contatto("Riccardo", "Giorgio", 3337777777);
rubrica.ricerca_contatto("Giovanni")
console.log(rubrica.contacts);
