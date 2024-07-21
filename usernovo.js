import React , {useState} from 'react';
import styles from './styles.js'

function NovoUser({Acrescentar,activeUsers,newId}){
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e);
		const user = {
		id:			newId,
		username:	e.target[0].value,
		nome:       e.target[1].value,
		idade:      e.target[2].value,
		gn:         e.target[3].value,
		tlf:        e.target[4].value
	    }
		//let tdata=[];
        //for (let i=0; i< e.target.length;i++){ tdata.push(e.target[i].value); }
		
		//vefifica conteudos
		if (activeUsers.includes(user.username))	return alert('username j\u00e1 atribu\u00eddo'); 
		else if (user.username.length<2 )			return alert('username inv\u00e1lido');
		if (user.nome.length<5)						return alert('nome incompleto');
		if (user.idade<9)							return alert('idade inv\u00e1lida');
		if (user.tlf.length<9)  					return alert('nr.telefone inv\u00e1lido');
		Acrescentar(user);
	};
	//console.log(activeUsers);
	return (
		<div style={styles.formdiv}>
		<p>Registo de novo utilizador</p>
		<form onSubmit={handleSubmit}>
			<label>username:
				<input type="text" size="20" maxLength="10" defaultValue=''/></label><br/>
			<label>nome:
				<input type="text" size="20" maxLength="25" defaultValue=''/></label><br/>
			<label>idade:
				<input type="number" size="2" maxLength="2" defaultValue=''/></label>
			<label> g&eacute;nero:
				<input type="text" size="2" maxLength="2" defaultValue=''/></label><br/>
			<label>telefone:
				<input type="text" size="20" maxLength="13" defaultValue="+351"/></label><br/>
			<input type="submit" value=" Registar "/>
		</form>
		</div>
	)
}

export default NovoUser;