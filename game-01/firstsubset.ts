var arr:number[] = [ 2, 4, 6, 8 ,10,20,30];
let suma = 30;
var arry:number[] = [];
function firststep(rr: number[], pp: number[], plus: number, result:boolean, cant:number){
    rr.map(function(val, index){
        if(!result){ let n = index + 1;
            if(n<cant){
                let sum = val + rr[n];
                if(sum == plus){
                    pp.push(val);
                    pp.push(rr[n]);
                    result = true;
                    console.log(pp);
                }
            }}
    });
    if(!result){
        var rt = rr.shift();
        firststep(rr,pp, plus, result, rr.length);
    }
}

firststep(arr,arry,suma,false, arr.length);
       