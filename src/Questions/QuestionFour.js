switch (province) {
  case 'ONTARIO':
    rate = ONTARIO_RATE;
    amt = base * ONTARIO_RATE;
    calc = 2 * basis(amt) + extra(amt) * 1.05;
    break;

  case 'QUEBEC':
  case 'ALBERTA':
    rate = ALBERTA_RATE;
    if (province == 'QUEBEC') {
      rate = QUEBEC_RATE;
      point = 2;
    }
    amt = base * rate;
    calc = 2 * basis(amt) + extra(amt) * 1.05;

    break;
  default:
    rate = 1;
    amt = base;
    calc = 2 * basis(amt) + extra(amt) * 1.05;
}
