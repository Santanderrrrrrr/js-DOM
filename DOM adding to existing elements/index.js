//Pobieramy element z DOM (ze strony internetowej)
const btn = document.querySelector("button");
//tworzymy zmienną za pomocą zmienne let ponieważ będziemy ją zmiennia. Wartość przechowywana w zmiennej będzie pełniła funkcję licznika
let number = 1;
// dodatkowy licznik, który ma liczyć do pięciu
let activeNumber = 1;

//tworzymy funkcję i przypisujemy ją do zmienne dzięki czemu mozemy się do niej odwoływać z innych miejsc w programie
const addElement = function () {
    //tworzymy węzeł (element) html i przypisujemy do zmiennej. Istniej on tylko w pamęcim, na tym etapie nie jest dodany do strony
    const div = document.createElement('div');
    //do stworzonego element7u html (<div></div>) za pomocą właściwości textContent dodajemy zawartość międzu znaczniki
    div.textContent = number; //efekt -> <div>1</div>
    /*
    dodajemy element do strony dokładnie w miesjce tuż przed znacznikiem "body". "document.body" to skrót do "body", a metoda appendChild dodaje element na końcu obiektu na którym jest wywoływana. Dodawany element jest podawany w argumencie metody
    */
    //1 wersja if z modulo
    // if (number % 5 == 0) {
    //     div.classList.add("circle")
    // }


    //2 wersja if z dodatkowym licznikiem w nowej zmiennej

    if (activeNumber == 5) {
        div.classList.add("circle");
        activeNumber = 0;
        
    }
    document.body.appendChild(div);
    number++; //inkrementacja

    activeNumber++;
    // console.log(number);

}

//ustwaimy nasłuchiwanie na klik a jako funkcje zwrotną przypisujemy funkcje o nazwie addElement
btn.addEventListener("click", addElement)