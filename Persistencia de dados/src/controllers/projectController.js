var Project = require('../models/projectModel');
 
exports.getProject = async function(req, res) {
  try {
    const result = await Project.find().populate('assignedTo');
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};
 
exports.create = function(req, res) {
  let project = new Project({
    title: req.body.title,
    description: req.body.description,
    assignedTo: req.body.assignedTo
  });
  project.save()
    .then(res.status(201).send(project.toJSON()))
    .catch((err) => {
      res.status(500).send({message: `Falha ao cadastrar projeto: ${err.message}`});
    });
};
 
exports.details = async function(req, res) {
  try {
const result = await Project.findById(req.params.id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.update = async function(req, res) {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
        assignedTo: req.body.assignedTo
      },
      { new: true } // Retorna o projeto atualizado
    );
    
    if (!updatedProject) return res.status(404).json({ message: 'Project not found' });
    res.json(updatedProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Função para deletar um projeto existente
exports.delete = async function(req, res) {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) return res.status(404).json({ message: 'Project not found' });
    res.json({ message: 'Project deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};