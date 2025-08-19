export default function PromiseTest(){
    const increase = (number) =>{
        return new Promise(
            (resolve, reject)=>{
                const result = number+10;
                console.log(number);
                if (result > 50){
                    const e = new Error("50보다 큰 수 입니다.")
                    return reject(e);
                }
                resolve(result);
            })
    
    }
    
    setTimeout(() => {
        increase(0)
        .then((number)=>{
            console.log(number);
            return increase(number);
        })
        .then((number)=>{
            console.log(number);
            return increase(number);
        })
        .then((number)=>{
            console.log(number);
            return increase(number);
        })
        .then((number)=>{
            console.log(number);
            return increase(number);
        })
        .then((number)=>{
            console.log(number);
            return increase(number);
        })
    }, 1000);

   


    return(
        <div>Promise Test</div>
    )
}