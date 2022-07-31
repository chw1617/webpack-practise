//css
import './index.less'
//img
import pic from '../public/nice.jpeg'
class Component{
    constructor(){
        console.log('this is component')
        this.render()
    }
    render(){
        const div = document.createElement('div')
        const img = document.createElement('img')
        img.src = pic
        div.className= 'color'
        div.innerHTML = 'hello webpack,learn it'
        div.append(img)
        document.body.append(div)
    }   
}

new Component()