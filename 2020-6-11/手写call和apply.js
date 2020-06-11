Function.prototype.myCall = function(content){
    content = content || window
    
    content.fn = this

    let args = [...arguments].slice(1)

    content.fn(...arguments)
}

Function.prototype.myApply = function(content){
    content = content || window
    
    content.fn = this

    let args = [...arguments][1]

    content.fn(...args)
}
name='fuliang'

let obj = {
    name:'fuliang'
}

function con(sex){
    console.log(this.name+sex)
}
con.myApply(obj,['男'])

