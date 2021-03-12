async function myFunc() {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log('Hi'));
        }, 1000);
    });
    async function my(){
        await new Promise((resolve) =>{
            setTimeout(() => {
                resolve(console.log('Byee'));
            }, 1000);
        });
    }
    my();
    console.log("hi")
}

myFunc();