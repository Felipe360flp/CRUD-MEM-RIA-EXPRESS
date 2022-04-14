
const personagens = [
    {
      id: 1,
      nome: 'Balthazar',
      Tipo:"mago",
      vida:20,
      mana:30,
      ataque:3,
      defesa:2,
      velocidade:2,
      inteligencia:10,
      sorte:2                   
    },
    {
      id: 2,
      nome: 'Iris',
      Tipo:"Bruxa",
      vida:20,
      mana:30,
      ataque:5,
      defesa:2,
      velocidade:3,
      inteligência:6,
      sorte:1                 
    },
    {
      id: 3,
      nome: 'Roramir',
      Tipo:"Barbaro",
      vida:20,
      mana:0,
      ataque:10,
      defesa:6,
      velocidade:5,
      inteligencia:3,
      sorte:2              
    },
    {
      id: 4,
      nome:"Diana",
      Tipo:"Amazona",
      vida:20,
      mana:0,
      ataque:6,
      defesa:4,
      velocidade:8,
      inteligencia:6,
      sorte:6           
    },
   
  ];

  const PersonagensService = () => {
    return personagens;
  };
  
  const PersonagensByIdService = (id) => {
    return personagens.find((personagem) => personagem.id == id);
  };

  const addpersonagensService = (personagem) =>{
    personagens.push(personagem);
    return 'ok';
};

const updateService = (id, editpersonagem) => {
  editpersonagem['id'] = id;
  const personagemIndex = personagens.findIndex((personagem) => personagem.id == id);
  personagens[personagemIndex] = editpersonagem;
  return editpersonagem;
};

const deleteService = (id) => {
  const personagemIndex = personagens.findIndex((personagem) => personagem.id == id);
  return personagens.splice(personagemIndex, 1);

}
  
module.exports ={
    PersonagensService,
    PersonagensByIdService,
    addpersonagensService,
    updateService,
    deleteService
};