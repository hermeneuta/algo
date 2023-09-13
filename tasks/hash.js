//Fukcja sprawdzająca czy mniejsza tablica zawiera się w większej
//Podejście bez funkcji hashującej
function without_hash(arr1, arr2) {
    //1. sprawdzenie, która tablica jest mniejsza
    var small_arr;
    var big_arr;
    var is_subset = false;
    if (arr1.length < arr2.length) {
        small_arr = arr1;
        big_arr = arr2;
    }
    else {
        small_arr = arr2;
        big_arr = arr1;
    }
    //2. sprawdzenie element po elemencie czy mniejsza tablica jest podzbiorem większej
    for (var i = 0; i < small_arr.length; i++) {
        is_subset = false;
        for (var j = 0; j < big_arr.length; j++) {
            if (small_arr[i] === big_arr[j]) {
                is_subset = true;
                break;
            }
        }
        if (is_subset === false)
            return console.log(is_subset);
    }
    return console.log(is_subset);
}
without_hash([1, 2, 3, 4], [1, 2, 0]);
