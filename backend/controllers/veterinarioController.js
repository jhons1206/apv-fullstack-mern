import Veterinario from '../models/Veterinario.js';

const registrar = async (req, res) => {
	const { email } = req.body;

	// Prevenir usuarios duplicados
	const existeUsuario = await Veterinario.findOne({
		email,
	});

    if(existeUsuario){
        const error = new Error("Usuario ya ha sido registrado")
        return res.status(400).json({ msg: error.message })
    }

	try {
		// Guardar un Nuevo Veterinario
		const veterinario = new Veterinario(req.body);
		const veterinarioGuardado = await veterinario.save();

		res.json({ msg: 'Registrando usuario...' });
	} catch (error) {
		console.log(error);
	}
};

const perfil = (req, res) => {
	res.json({ msg: 'Mostrando Perfil' });
};

export { registrar, perfil };
