const service = require("../services/service.js");

const homeController = (req,res) =>{
	res.send("home");
};

const getAll = (req, res) => {	
	res.send(service.PersonagensService());	
} 

const getBYID = (req,res) => {
	const idParam = req.params.id;
    res.send(service.personagensByIdService(idParam));
}

const add = (req,res) => {
	let retorno;
  
	if(req.body.id){
	  retorno = service.addpersonagensService(req,body);
	}else{
	  res.send({erro: 'id é obrigatório'});
	}
	if(retorno == 'ok'){
	  res.send({message:'Personagem cadastrado!'});
	}else{
	  res.send('Erro, Personagem não cadastrado!');
	}
};

const update = (req, res) => {
	const idParam = +req.params.id;
	const personagemEdit = req.body;
	const updatepersonagem = service.updateService(idParam, personagemEdit);
	res.send(updatepersonagem);
};
  
const del = (req, res) => {
	const idParam = req.params.id;
	service.deleteService(idParam);
	res.send({ message: 'Personagem deletado!' });
};

module.exports =
{
	homeController,
	getAll,
	getBYID,
	add,
	update,
	del
};
