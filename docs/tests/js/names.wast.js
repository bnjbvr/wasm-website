(function names_wast_js() {


// names.wast:4

let $1 = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x66\x6f\x6f\x00\x00\x0a\x8a\x80\x80\x80\x00\x01\x84\x80\x80\x80\x00\x00\x41\x00\x0b");



// names.wast:8

assert_return(() => call($1, "foo", []), 0);



// names.wast:12

let $2 = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x66\x6f\x6f\x00\x00\x0a\x8a\x80\x80\x80\x00\x01\x84\x80\x80\x80\x00\x00\x41\x01\x0b");



// names.wast:16

assert_return(() => call($2, "foo", []), 1);



// names.wast:19

let $3 = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7d\x03\x8d\x80\x80\x80\x00\x0c\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x07\xec\x80\x80\x80\x00\x0c\x00\x00\x00\x01\x30\x00\x01\x01\x5f\x00\x02\x01\x24\x00\x03\x01\x40\x00\x04\x21\x7e\x21\x40\x23\x24\x25\x5e\x26\x2a\x28\x29\x5f\x2b\x60\x2d\x3d\x7b\x7d\x7c\x5b\x5d\x5c\x3a\x22\x3b\x27\x3c\x3e\x3f\x2c\x2e\x2f\x20\x00\x05\x03\x4e\x61\x4e\x00\x06\x08\x49\x6e\x66\x69\x6e\x69\x74\x79\x00\x07\x02\x69\x66\x00\x08\x06\x6d\x61\x6c\x6c\x6f\x63\x00\x09\x07\x5f\x6d\x61\x6c\x6c\x6f\x63\x00\x0a\x08\x5f\x5f\x6d\x61\x6c\x6c\x6f\x63\x00\x0b\x0a\x91\x81\x80\x80\x00\x0c\x87\x80\x80\x80\x00\x00\x43\x00\x80\xc8\x40\x0b\x87\x80\x80\x80\x00\x00\x43\x00\x80\xcb\x40\x0b\x87\x80\x80\x80\x00\x00\x43\x00\x00\xcc\x40\x0b\x87\x80\x80\x80\x00\x00\x43\x00\x80\xcc\x40\x0b\x87\x80\x80\x80\x00\x00\x43\x00\x00\x00\x41\x0b\x87\x80\x80\x80\x00\x00\x43\x00\x00\xcb\x40\x0b\x87\x80\x80\x80\x00\x00\x43\x00\x40\x00\x41\x0b\x87\x80\x80\x80\x00\x00\x43\x00\x80\x00\x41\x0b\x87\x80\x80\x80\x00\x00\x43\x00\xc0\x00\x41\x0b\x87\x80\x80\x80\x00\x00\x43\x00\x00\xc9\x40\x0b\x87\x80\x80\x80\x00\x00\x43\x00\x80\xc9\x40\x0b\x87\x80\x80\x80\x00\x00\x43\x00\x00\xca\x40\x0b");



// names.wast:51

run(() => call(instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x87\x80\x80\x80\x00\x01\x02\x24\x33\x00\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x00\x80\xc8\x40\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$3", $3)),  "run", []));  // assert_return(() => call($3, "", []), 6.265625)



// names.wast:52

run(() => call(instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x8d\x80\x80\x80\x00\x01\x02\x24\x33\x06\x6d\x61\x6c\x6c\x6f\x63\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x00\x00\xc9\x40\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$3", $3)),  "run", []));  // assert_return(() => call($3, "malloc", []), 6.28125)



// names.wast:53

run(() => call(instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x8e\x80\x80\x80\x00\x01\x02\x24\x33\x07\x5f\x6d\x61\x6c\x6c\x6f\x63\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x00\x80\xc9\x40\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$3", $3)),  "run", []));  // assert_return(() => call($3, "_malloc", []), 6.296875)



// names.wast:54

run(() => call(instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x33\x08\x5f\x5f\x6d\x61\x6c\x6c\x6f\x63\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x00\x00\xca\x40\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$3", $3)),  "run", []));  // assert_return(() => call($3, "__malloc", []), 6.3125)



// names.wast:55

run(() => call(instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\xa8\x80\x80\x80\x00\x01\x02\x24\x33\x21\x7e\x21\x40\x23\x24\x25\x5e\x26\x2a\x28\x29\x5f\x2b\x60\x2d\x3d\x7b\x7d\x7c\x5b\x5d\x5c\x3a\x22\x3b\x27\x3c\x3e\x3f\x2c\x2e\x2f\x20\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x00\x00\xcb\x40\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$3", $3)),  "run", []));  // assert_return(() => call($3, "~!@#$%^&*()_+`-={}|[]\\:\";'<>?,./ ", []), 6.34375)



// names.wast:56

run(() => call(instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x88\x80\x80\x80\x00\x01\x02\x24\x33\x01\x30\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x00\x80\xcb\x40\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$3", $3)),  "run", []));  // assert_return(() => call($3, "0", []), 6.359375)



// names.wast:57

run(() => call(instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x88\x80\x80\x80\x00\x01\x02\x24\x33\x01\x5f\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x00\x00\xcc\x40\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$3", $3)),  "run", []));  // assert_return(() => call($3, "_", []), 6.375)



// names.wast:58

run(() => call(instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x88\x80\x80\x80\x00\x01\x02\x24\x33\x01\x24\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x00\x80\xcc\x40\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$3", $3)),  "run", []));  // assert_return(() => call($3, "$", []), 6.390625)



// names.wast:59

run(() => call(instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x88\x80\x80\x80\x00\x01\x02\x24\x33\x01\x40\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x00\x00\x00\x41\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$3", $3)),  "run", []));  // assert_return(() => call($3, "@", []), 8.)



// names.wast:60

run(() => call(instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x8a\x80\x80\x80\x00\x01\x02\x24\x33\x03\x4e\x61\x4e\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x00\x40\x00\x41\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$3", $3)),  "run", []));  // assert_return(() => call($3, "NaN", []), 8.015625)



// names.wast:61

run(() => call(instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x33\x08\x49\x6e\x66\x69\x6e\x69\x74\x79\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x00\x80\x00\x41\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$3", $3)),  "run", []));  // assert_return(() => call($3, "Infinity", []), 8.03125)



// names.wast:62

run(() => call(instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x89\x80\x80\x80\x00\x01\x02\x24\x33\x02\x69\x66\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x00\xc0\x00\x41\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$3", $3)),  "run", []));  // assert_return(() => call($3, "if", []), 8.046875)



// names.wast:64

let $4 = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x8a\x80\x80\x80\x00\x02\x60\x01\x7f\x00\x60\x02\x7f\x7f\x00\x02\xa3\x80\x80\x80\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x05\x70\x72\x69\x6e\x74\x00\x00\x08\x73\x70\x65\x63\x74\x65\x73\x74\x05\x70\x72\x69\x6e\x74\x00\x00\x03\x82\x80\x80\x80\x00\x01\x01\x07\x8b\x80\x80\x80\x00\x01\x07\x70\x72\x69\x6e\x74\x33\x32\x00\x02\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x20\x00\x10\x00\x20\x01\x10\x01\x0b");



// names.wast:76

run(() => call($4, "print32", [42, 123]));

reinitializeRegistry();
})();