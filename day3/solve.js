let alas = 'sandal'
let warna = 'merah'
let harga = 'murah'

switch (true){
    case (alas == 'sandal' && warna == 'merah' && harga == 'murah'):
        console.log('Saya suka sandal merah yang murah.');
        break;
    case (alas == 'sandal' && warna == 'merah' && harga == 'mahal'):
        console.log('Saya suka sandal merah tapi mahal')
        break;
    case(alas == 'sandal' && warna == 'biru' && harga == 'murah'):
        console.log('Saya suka sandal biru yang murah');
        break;
    case(alas == 'sandal' && warna == 'biru' && harga == 'mahal'):
        console.log('Saya suka sendal biru tapi mahal')
        break;
    case(alas == 'sepatu' && warna == 'merah' && harga == 'murah'):
        console.log('Saya suka sepatu merah yang murah')
        break;
    case(alas == 'sepatu' && warna == 'merah' && harga == 'mahal'):
        console.log('Saya suka sepatu merah tapi mahal')
        break;
    case(alas == 'sepatu' && warna == 'biru' && harga == 'murah'):
        console.log('Saya suka sepatu biru yang murah')
        break;
    case(alas == 'sepatu' && warna == 'biru' && harga == 'mahal'):
        console.log('Saya suka sepatu biru tapi mahal')
        break;
    default:
        console.log('Tak suka alas kaki murah/mahal')
}