const pro = new Promise((resolve)=>{
    const a = 1
    resolve(a)
    const b = 2
    console.log(2)
})


const a = pro.then((res)=>{
    console.log(res)
})