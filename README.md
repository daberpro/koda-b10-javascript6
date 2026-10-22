# minitask 2
## Built in method objects

### String
- `charAt(index)`
  merupakan method yang digunakan untuk mengambil data char atau
  character dalam format UTF-16 code di `index`, method mengembalikan string
- `indexOf(searchString) dan indexOf(searchString, position)`
  merupakan method untuk mengambil index pertama dari string yang dicari, jika ditambahkan parameter `position` maka pencarian akan dimulai dari posisi yang dimasukan, jika tidak ada atau tidak ditemukan maka nilai yang dikembalikan oleh method ini adalah -1
- `repeat(count)`
  method ini mengembalikan sebanyak `count` string yang diulang - ulang, dan apabila `count` diisi dengan nilai negatif maka akan memberikan exception RangeError
- `replace(pattern, replacement)`
  method ini akan mengembalikan string baru dengan satu, sebagian, atau semua yang cocok dengan `pattern` yang akan diganti atau ditimpa dengan `replacement`, selain itu `pattern` juga bisa diisi menggunakan object RegExp (regular expression)
- `split(separator) dan split(separator, limit)`
  method ini akan memberikan array berisi substring berdasarkan `separator` yang diberikan, dimana substring dihasilkan melalui pemotongan string menggunakan `separator`
### Array
- `at(index)`
  method ini akan mengembalikan item dari array berdasarkan `index` dan nilai `index` boleh positif maupun negatif yang penting tetap bilangan bulat, jika dimasukn nilai -1 maka item yang diambil akan dimulai dari belakang seperti membalikan index
- `filter(callbackFn) dan filter(callbackFn, thisArg)`
  method ini akan menghasilkan salinan dari array yang memenuhi kondisi dari `callbackFn` dimana `callbackFn` merupakan fungsi yang harus mengembalikan nilai boolean
- `join() dan join(separator)`
  method ini akan mengembalikan string yang merupakan gabungan dari semua isi array yang dipisahkan oleh `,` atau `separator` yang lebih spesifik mislanya spasi
- `reverse()`
  method ini mengembalikan array baru yang merupakan reference dari array yang direference hanya saja urutan data didalam array kembalianya terbalik dengan array original
- `slice() dan slice(start) dan slice(start, end)`
  method ini mengembalikan salinan sebagian dari array, atau bisa juga dipahami bahwa method ini mengembalikan subs item dari array berdasarkan `start` dan `end`, jika hanya `start` yang diisi maka akan diambil mulai dari index `start` nya hingga ke index terakhir 

### Date
- `Date.now()`
  mengembalikan angka milisecond yang terhitung sejak 1 januari 1970
- `getDay()`
  method ini akan mengembalikan hari dalam bentuk angka 0 sampai 6, dimana 0 merupakan hari munggu dan  dan 6 adalah hari sabtu
- `getFullYear()`
  method ini akan mengembalikan tahun berdasarkan local time perangkat 
- `toJSON()`
  mengembalikan format date dalam bentuk string biasa dengan bentuk format `1975-08-19T23:15:30.000Z`
- `getSeconds()`
  method ini mengembalikan nilai detik dari waktu yang dimasukan berdasarkan local time

### Map
- `clear()`
  method ini berfungsi untuk menghapus semua item didalam map
- `has(key)`
  method ini mengembalikan boolean yang didapat apabila `key` ada didalam map
- `keys()`
  method ini mengembalikan keys yang ada dimap dan method ini merupakan turunan dari Iterator object, sehingga dapat digunakan dalam for loop
- `set(key, value)`
  method ini digunakan untuk menambah item baru ke dalam map, dengan menentukan `key` yang akan menjadi key dan `value` yang akan menjadi valuenya
- `getOrInsert(key, defaultValue)`
  method ini mengembalikan item jika `key` nya ada didalam map, dan jika tidak maka akan memasukan `key` dengan value `defaultValue`

### Set
- `add(value)`
  method ini akan memasukan nilai ke dalam objek set jika `value` belum ada didalam objek set
- `difference(other)`
  method ini digunakan untuk mendapatkan nilai set baru yang dimana nilai nya tidak ada didalam set `other`
- `intersection(other)`
  method ini digunakan untuk mendapatkan nilai set baru yang hanya berisi nilai yang ada pada set yang memanggil dan `other`
- `union(other)`
  method ini akan menggabungkan dan mengembalikan set yang memanggil dengan set `other` dan apabila ada dua nilai duplikat maka hanya 1 yang akan diambil
- `entries()`
  method ini akan mengembalikan sebuah iterator yang berisi array `[value,value]` dari setiap item set yang ada

## Built in functions
- `eval(script)`
  fungsi ini akan melakukan evaluasi ke `script` dan menjalankanya sebagai javascript biasa dan mengembalikan nilai yang merupakan hasil evaluasi `script`
- `isNaN(value)`
  fungsi ini akan mengembalikan nilai boolean apabila `value` merupakan `NaN` 
- `parseFloat(string)`
  fungsi ini akan mengembalikan nilai konversi float dari `string` yang diberikan
- `decodeURI(encodedURI)`
  mendekoding Uniform Resource Identifier (URI), yang sebelumnya di encode dengan fungsi `encodeURI()`
- `encodeURI(uri)`
  fungsi ini digunakan untuk melakukan enkoding ke `uri` dari string biasa ke string yang valid untuk digunakan sebagai uri
