let apicall = (x: boolean) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      x === true ? res(true) : res(false);
    }, 2000);
  });
};

const checkfunc = async () => {
 try{
    let apiArr = [true, false, true,false,true,false,true];
console.log(new Date().getSeconds())
    let promiseArr = [];
    for (let i = 0; i < apiArr.length; i++) {
      promiseArr.push(apicall(apiArr[i]));
    }
    let x = await Promise.all(promiseArr)
      console.log(x)
      console.log(new Date().getSeconds());

    //   Promise.all(newArr)
    //     .then((m) => console.log(m))
    //     .catch((e) => console.log(e, "error"));
  } catch (error) {
    console.log(error);
  }
};

checkfunc()
