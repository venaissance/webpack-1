import x from './x.js'
import png from './assets/1.png' // 加载进来的是文件路径
console.log(png)

// 加载图片
const img = document.getElementById('demo')
img.innerHTML = `
    <img src="${png}">
`

const button = document.createElement('button')
button.innerHTML = `<button>懒加载</button>`
button.onclick = () => {
    const promise = import('./lazy.js')
    promise.then((module) => {
        const fn = module.default
        fn()
    }, () => {
        console.log('懒加载错误')
    })
}

document.body.appendChild(button)