class Product {
    constructor() {
        this.id = 1;
        this.stack = [];

    }
    add() {
        let product = this.read()

        if (this.validate(product)) {
            this.stack.push(product)
            this.id++

            this.listTable()

            console.log(this.stack)
            this.reset()
        }

    }
    reset() {
        document.getElementById('product').value = ''
        document.getElementById('price').value = ''
    }

    read() {
        let product = {}
        product.id = this.id
        product.name = document.getElementById('product').value
        product.price = document.getElementById('price').value

        return product

    }
    validate(product) {

        let msg = ''

        if (product.name == '') {
            msg += 'Insira o nome do produto\n'
        }

        if (product.price == '') {
            msg += 'Insira o preço do produto'
        }
        if (msg != '') {
            alert(msg)
            return false
        }
        return true
    }

    listTable(){
        let tbody = document.getElementById('tbody')

        tbody.innerText = ''

        for(let i = 0; this.stack.length > i; i++){
             let tr = tbody.insertRow()

             let td_id = tr.insertCell()
             let td_product = tr.insertCell()
             let td_price = tr.insertCell()
             let td_actions = tr.insertCell()

             td_id.innerText = this.stack[i].id
             td_product.innerText = this.stack[i].name
             td_price.innerText = this.stack[i].price

             let edit = document.createElement('img');

             let del = document.createElement('img');


             del.src = 'img/delete.svg'
             edit.src = 'img/edit.svg'

             td_actions.classList.add('separate')

             td_actions.appendChild(edit)
             td_actions.appendChild(del)
             
        }
    }
}

let produto = new Product