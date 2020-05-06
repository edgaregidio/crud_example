// BANCO DE DADOS
var people = [
  {
    nome: 'Edgar',
    id: 1,
    time: 'Goiás',
    serie: 'A'
  },
  {
    nome: 'jefferson',
    id: 2,
    time: 'Vila',
    serie: 'C'
  },
  {
    nome: 'Jonston',
    id: 3,
    time: 'Vasco',
    serie: 'B'
  }
];

module.exports = {

  // CRIAR NOVO USUÁRIO
  create: async (req, res) => {
    const { nome, time, serie } = req.body;

    if (!nome || !time || !serie) {
      return res.status(400).json({ error: 'Fill in the fields correctly.' });
    }

    const lastId = people.reduce((id, person) => {
      return person.id > id ? person.id : id
    }, 0);

    const newPerson = {
      nome,
      id: lastId + 1,
      time,
      serie
    };

    people.push(newPerson);

    return res.json(newPerson);

  },

  delete: async (req, res) => {
    const { id } = req.params;

    const newPeople = people.filter(person => `${person.id}` != `${id}`)
    people = newPeople;
    return res.json(newPeople);
  },

  update: async (req, res) => {

    const { id } = req.params;
    const { nome, time, serie } = req.body;

    const indexUpdate = people.findIndex(person => `${person.id}` === `${id}`);
    console.log(indexUpdate)

    const personUpdated = people[indexUpdate];

    if (nome) personUpdated.nome = nome;
    if (time) personUpdated.time = time;
    if (serie) personUpdated.serie = serie;

    people[indexUpdate] = personUpdated;

    return res.json(personUpdated)
  },

  index: async (req, res) => {
    return res.json(people);
  },

  read: async (req, res) => {
    const { id } = req.params;

    const personSearch = people.filter(person => `${person.id}` === `${id}`)
    return res.json(personSearch[0] || {});
  }

}