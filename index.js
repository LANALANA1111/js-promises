//1)დავწეროთ Promise რომლის მიხედვითაც პირობითად მოგვდის სამი სერვერიდან დატა ანუ გვჭირდება სამი ფუნქცია ფრომისით, 
// და ერთერთი მაინც რომ reject იყოს არ უნდა მქონდეს საშუალება რომ მივიღო response წარმატებულ შედეგად.


const firstpromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("image 1")
        }, 2000);
    })
}

const secondpromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("image 2")
        }, 3000);
    })
}

const thirdpromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("image not found")
            resolve("image 3")
        }, 4000);
    })
}

Promise.all([firstpromise(), secondpromise(), thirdpromise()])
.then((promise) => {
    console.log(promise)
})
.catch((err) => {
    console.log("err")
})



// 2)დავწეროთ ასინქრონული ფუნქციები სადაც გვექნება Promise, რომლის მიხედვითაც პირობითად მოგვდის ოთხი სერვერიდან
// user data და ეს Promise უნდა აბრუნებდეს სხვასხვა დატას, მაგალითად [{id: 1, name: 'luka', isAdmin: false}] 
// რომელიც პირველი დაასწრებს შესრულებას ის დატა უნდა მივიღო კონსოლში.


const userN1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{
                id: 1,
                name: "lana",
                isadmine: true
            }])
        },2000)
    })
}

const userN2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{
                id: 2,
                name: "luka",
                isadmine: false
            }])
        },5000)
    })
}

const userN3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{
                id: 3,
                name: "lela",
                isadmine: false
            }])
        },7000)
    })
}

const userN4 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{
                id: 4,
                name: "gia",
                isadmine: false
            }])
        },3000)
    })
}

Promise.race([userN1(), userN2(), userN3(), userN4(),])
.then((user) => {
    console.log(user)
})
.catch(console.log)