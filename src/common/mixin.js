
export const signUp = {
    mounted() {
        // document.getElementsByTagName('body')[0].className =  'lmlsin'
        document.getElementsByTagName('body')[0].className = 'persons'
        document.getElementsByTagName('*')[0].className =  'xing'
    },
    deactivated() {
        document.body.removeAttribute('class','lmlsin')
    }
}

export const persons = {
    mounted() {
        document.getElementsByTagName('body')[0].className = 'persons'
    },
    deactivated() {
        document.body.removeAttribute('class','persons')
    }
}