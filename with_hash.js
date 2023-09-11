//Sprawdzenie czy mniejsza tablica jest podzbiorem większej
//z wykorzystaniem funkcji hashującej
function with_hash(arr1, arr2) {
    var small_arr;
    var big_arr;
    var hash_table = {};
    //1. sprawdzenie, która tablica jest większa
    if (arr1.length < arr2.length) {
        small_arr = arr1;
        big_arr = arr2;
    }
    else {
        small_arr = arr2;
        big_arr = arr1;
    }
    //2. napisanie funkcji hashującej
    for (var _i = 0, big_arr_1 = big_arr; _i < big_arr_1.length; _i++) {
        var el = big_arr_1[_i];
        hash_table[el] = true;
    }
    //3. sprawdzenie czy mniejsza tablica jest podzbiorem większej
    for (var _a = 0, small_arr_1 = small_arr; _a < small_arr_1.length; _a++) {
        var el = small_arr_1[_a];
        if (!hash_table[el]) {
            return console.log(false);
        }
    }
    return console.log(true);
}
with_hash([1, 4, 5, 3], [6, 4]);
