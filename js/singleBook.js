function singleBook(data){
    for(const i in data){
        var isbn  = Object.values(data[i])[6];
        var ime  = Object.values(data[i])[5];
        var autor  = Object.values(data[i])[1];
        var cena  = Object.values(data[i])[3];
        var opis  = Object.values(data[i])[9];
        var slika  = Object.values(data[i])[12];
        var singleProduct  = document.getElementById('single-product');

        if (window.location.href.includes(isbn)){

            let row = document.createElement('div');
            row.className = 'row';
            singleProduct.appendChild(row);

            let col2 = document.createElement('div');
            col2.className = 'col-2';
            row.appendChild(col2);
            
            let srcSlike = document.createElement('img');
            srcSlike.setAttribute('src', slika);
            col2.append(srcSlike)

            let col22 = document.createElement('div');
            col22.className = 'col-2';
            row.appendChild(col22);

            col22.innerHTML = `<ul class="rating" id='rating'>
            <li class="rating-item" data-rate='1'></li>
            <li class="rating-item active" data-rate='2'></li>
            <li class="rating-item" data-rate='3'></li>
            <li class="rating-item" data-rate='4'></li>
            <li class="rating-item" data-rate='5'></li> 
            </ul>`

            // col22.innerHTML = '<p>Home / Book</p>'
            let p = document.createElement('p')
            p.innerHTML = `Home / Book`;
            col22.append(p)

            let naslov = document.createElement('h1');
            naslov.innerHTML = ime;
            col22.append(naslov)

            let pisac = document.createElement('p');
            pisac.className = 'authon';
            let i = document.createElement('i');
            i.innerHTML = `-${autor}-`
            pisac.appendChild(i)
            col22.append(pisac)


            let cenaH4 = document.createElement('h4');
            let cenaSpan = document.createElement('span');
            cenaSpan.innerHTML = '<br>' + 'Cena: ' + cena;

            cenaH4.append(cenaSpan);
            col22.append(cenaH4);

            let input = document.createElement("INPUT");
            input.setAttribute("type", "number");
            input.setAttribute("value", "1");
            col22.append(input)

            let btn = document.createElement('a');
            let node = document.createTextNode("Dodaj u korpu");
            btn.className = 'btn';
            btn.appendChild(node)
            col22.append(btn)

            let oKnjiziH4 = document.createElement('h4');
            let node2 = document.createTextNode("o Knjizi");
            oKnjiziH4.appendChild(node2);
            col22.appendChild(oKnjiziH4)

            let oKnjiziP = document.createElement('p');
            let i2 = document.createElement('i');
            let node3 = document.createTextNode(opis);
            i2.appendChild(node3)
            oKnjiziP.appendChild(i2)
            col22.append(oKnjiziP)

            
            const ulq = document.getElementById('rating');
            const li = document.getElementsByClassName('rating-item');
            console.log(li)
            ulq.onclick = e => {
                const elClass = e.target.classList;
                if(!elClass.contains('active')){
                    for(const i of li){
                        i.classList.remove('active')
                    }
                    console.log(e.target.getAttribute('data-rate'));
                    elClass.add('active');
                }
            }

        }

    }
    
}

