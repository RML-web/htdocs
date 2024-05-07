//Switch case
const metodoPago = promt("Escribe el método de pago")

switch (metodoPago) {
  case "efectivo":
    console.log(`Pagaste con efectivo`);
    break;
  case "cheque":
    console.log(`Pagaste con cheque`);
    break;
  case "tajeta":
    console.log(`Pagaste con tajeta`);
    break;
  case "bizum":
    console.log(`Pagaste con bizum`);
    break;
  case "bizum":
    console.log(`Pagaste con bizum`);
    break;
  default:
    console.log(`No has elegido método de pago`);
}