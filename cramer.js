function res() {
	const a1=parseFloat(document.getElementById('a1').value);
	const b1=parseFloat(document.getElementById('b1').value);
	const c1=parseFloat(document.getElementById('c1').value);
	const a2=parseFloat(document.getElementById('a2').value);
	const b2=parseFloat(document.getElementById('b2').value);
	const c2=parseFloat(document.getElementById('c2').value);
	const d=a1*b2-a2*b1;
	const dx=c1*b2-c2*b1;
	const dy=a1*c2-a2*c1;
	if (d==0) {
		document.getElementById('x-result').value = 'No hay una solucion unica';
		document.getElementById('y-result').value = 'No hay solucion unica';
	}else{
		const x=dx/d;
		const y=dy/d;
		document.getElementById('x-result').value = x;
		document.getElementById('y-result').value = y;
	}
}