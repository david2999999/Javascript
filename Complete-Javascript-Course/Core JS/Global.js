parseInt("3 blind mice") // => 3
parseFloat(" 3.14 meters") // => 3.14
parseInt("-12.34") // => -12
parseInt("0xFF") // => 255
parseInt("0xff") // => 255
parseInt("-0XFF") // => -255
parseFloat(".1") // => 0.1
parseInt("0.1") // => 0
parseInt(".1") // => NaN: integers can't start with "."
parseFloat("$72.47"); // => NaN: numbers can't start with "$"

parseInt("11", 2); // => 3 (1*2 + 1)
parseInt("ff", 16); // => 255 (15*16 + 15)
parseInt("zz", 36); // => 1295 (35*36 + 35)
parseInt("077", 8); // => 63 (7*8 + 7)
parseInt("077", 10); // => 77 (7*10 + 7)
