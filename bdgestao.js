import React from 'react';
import styles from './styles.js'


function GetUsernames(db1){
	let users1=[];
	db1.map((item1) => { users1.push(item1.username); });
    return users1;
}

function GetNextId(db1){
	if (db1.data.length>=1) return (db1.data[(db1.data.length-1)].id + 1);
	else return 1;
}


function Listagem({Db,BtRemover,BtView, Btfunceditar }){
	return (
		<div>
	  {BtView ? <button style={styles.listabteditar} onClick = {Btfunceditar}>&#9776; Apenas Visualiza&ccedil;&atilde;o</button> :
				  <button style={styles.listabteditar} onClick = {Btfunceditar}>&#9998; Gerir Utilizadores</button>  }
	  {BtView ? <p>Gerir Utilizadores </p> : <p>Lista de Utilizadores </p> }
		
		<table style={styles.listaul}>
			<thead >
				<tr style={styles.listahead}>
	  {BtView ? <th style={styles.listacol1}>a&ccedil;&atilde;o</th> : null}
				<th style={styles.listacol2}>id</th>
				<th style={styles.listacol3}>username</th>
				<th style={styles.listacol4}>nome</th>
				<th style={styles.listacol5}>idade</th>
				<th style={styles.listacol6}>g&eacute;nero</th>
				<th style={styles.listacol7}>n&ordm; telefone</th>
				</tr>
			</thead>
			<tbody>
				<ListItem db={Db} btRemover={BtRemover} btView={BtView}/>
			</tbody>
		</table>
		
		</div>
	);
}

function ListItem({db,btRemover,btView}){
	const handleButtonRm = (e) => {
		//console.log(e.target.id);
		console.log(e);
		btRemover(e.target.id);
	};
	return db.data.map((item,idx) =>
	<tr key={idx+1} style={styles.listali}>
{btView?<td><button onClick={handleButtonRm} id={idx} title="Remover utilizador" style={styles.listabtrm}>&#10006;</button></td> : null}
		<td>{item.id} </td>
		<td>{item.username}</td>
		<td>{item.nome}</td>
		<td>{item.idade}</td>
		<td>{item.gn}</td>
		<td>{item.tlf}</td>
	</tr>);
}

export {Listagem,GetUsernames,GetNextId};