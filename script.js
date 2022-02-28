document.getElementById('btn').addEventListener('click', function(){
    const vc = parseInt(document.getElementById('vc').value);
    const nc = parseInt(document.getElementById('nc').value);
    const pc = parseInt(document.getElementById('pc').value);
    const vt = parseInt(document.getElementById('vt').value);
    const nt = parseInt(document.getElementById('nt').value);
    const pt = parseInt(document.getElementById('pt').value);
    const totalePartite=vc+nc+pc+vt+nt+pt;
    const uno=(vc+pt)/totalePartite;
    const x=(nc+nt)/totalePartite;
    const due=(pc+vt)/totalePartite;
    console.log(totalePartite);
    console.log(uno);
    console.log(x);
    console.log(due);

    if (uno>=0.5&&x<=0.25&&due<=0.25){
        document.getElementById('risultato').innerHTML='1';
    } else if (x>=0.5&&uno<=0.25&&due<=0.25){
        document.getElementById('risultato').innerHTML='X';
    } else if (due>=0.5&&uno<=0.25&&x<=0.25){
        document.getElementById('risultato').innerHTML='2';
    } else if (uno<=0.15){
        document.getElementById('risultato').innerHTML='X2';
    } else if (x<=0.15){
        document.getElementById('risultato').innerHTML='12';
    } else if (due<=0.15){
        document.getElementById('risultato').innerHTML='1X';
    } else if ((uno>due&&uno<x)||(uno<due&&uno>x)){
        document.getElementById('risultato').innerHTML='X2';
    } else if ((x>due&&x<uno)||(x<due&&x>uno)){
        document.getElementById('risultato').innerHTML='12';
    } else if ((due>x&&due<uno)||(due<x&&due>uno)){
        document.getElementById('risultato').innerHTML='1X';
    } else {
        document.getElementById('risultato').innerHTML='No Bet';
    }
}
)

