const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split(`\n`);

//입력처리
const t = Number(stdin.shift())
for(let i=0; i<t; i++){
    const n = Number(stdin.shift())
    const arr = stdin.slice(0,n)
    stdin.splice(0,n)

    //obj로 전환
    const table = new Object()
    for (let item of arr){
        const [name, group] = item.split(' ')

        if(Object.keys(table).includes(group)){
            table[group]=[name,...table[group]]
        }else{
            table[group]= [name]
        }
    }

    //계산
    let result = 1
    for(let key in table){
        result = result * (table[key].length+1)
    }
    console.log(result-1)
}