const instance = tippy(document.getElementById('tooltip'));
instance.setContent('Clique para exibir os certificados');
instance.disable();

let cont = 0

document.getElementById('certificationsBtn').addEventListener('click', () => {
    cont += 1
    if (cont == 1) {
        setTimeout(() => {
            instance.enable()
            instance.show();
        }, 1000);

        setTimeout(() => {
            instance.disable();
        }, 4000);
    }
    if (cont == 2) {
        cont = 0
    }

})


