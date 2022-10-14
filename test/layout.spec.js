const fs = require('fs')
const path = require('path')
const html = fs.readFileSync(path.resolve(__dirname,'../index.html'), 'utf-8')

describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

    describe('header', () => {
        describe('it has a header', () => {
            let header

            beforeEach(() => {
                header = document.querySelector('header')
            })

            test('it exists', () => { 
                expect(header).toBeTruthy()
            })
        })
    })
})