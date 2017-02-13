(function linking_wast_js() {


// linking.wast:3

let $1 = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x83\x80\x80\x80\x00\x02\x00\x00\x07\x88\x80\x80\x80\x00\x01\x04\x63\x61\x6c\x6c\x00\x00\x0a\x93\x80\x80\x80\x00\x02\x84\x80\x80\x80\x00\x00\x10\x01\x0b\x84\x80\x80\x80\x00\x00\x41\x02\x0b");

let $Mf = $1;



// linking.wast:7

register("Mf", $Mf)



// linking.wast:9

let $2 = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x02\x8b\x80\x80\x80\x00\x01\x02\x4d\x66\x04\x63\x61\x6c\x6c\x00\x00\x03\x84\x80\x80\x80\x00\x03\x00\x00\x00\x07\xa1\x80\x80\x80\x00\x03\x07\x4d\x66\x2e\x63\x61\x6c\x6c\x00\x00\x0c\x63\x61\x6c\x6c\x20\x4d\x66\x2e\x63\x61\x6c\x6c\x00\x01\x04\x63\x61\x6c\x6c\x00\x02\x0a\x9c\x80\x80\x80\x00\x03\x84\x80\x80\x80\x00\x00\x10\x00\x0b\x84\x80\x80\x80\x00\x00\x10\x03\x0b\x84\x80\x80\x80\x00\x00\x41\x03\x0b");

let $Nf = $2;



// linking.wast:17

assert_return(() => call($Mf, "call", []), 2);



// linking.wast:18

assert_return(() => call($Nf, "Mf.call", []), 2);



// linking.wast:19

assert_return(() => call($Nf, "call", []), 3);



// linking.wast:20

assert_return(() => call($Nf, "call Mf.call", []), 2);



// linking.wast:22

let $3 = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x01\x7f\x00\x02\x92\x80\x80\x80\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x05\x70\x72\x69\x6e\x74\x00\x00\x07\x89\x80\x80\x80\x00\x01\x05\x70\x72\x69\x6e\x74\x00\x00");



// linking.wast:26

register("reexport_f", $3)



// linking.wast:27

assert_unlinkable("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x01\x7e\x00\x02\x94\x80\x80\x80\x00\x01\x0a\x72\x65\x65\x78\x70\x6f\x72\x74\x5f\x66\x05\x70\x72\x69\x6e\x74\x00\x00");



// linking.wast:31

assert_unlinkable("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7f\x01\x7f\x02\x94\x80\x80\x80\x00\x01\x0a\x72\x65\x65\x78\x70\x6f\x72\x74\x5f\x66\x05\x70\x72\x69\x6e\x74\x00\x00");



// linking.wast:39

let $4 = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x06\x86\x80\x80\x80\x00\x01\x7f\x00\x41\x2a\x0b\x07\x8e\x80\x80\x80\x00\x02\x04\x67\x6c\x6f\x62\x03\x00\x03\x67\x65\x74\x00\x00\x0a\x8a\x80\x80\x80\x00\x01\x84\x80\x80\x80\x00\x00\x23\x00\x0b");

let $Mg = $4;



// linking.wast:43

register("Mg", $Mg)



// linking.wast:45

let $5 = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x02\x95\x80\x80\x80\x00\x02\x02\x4d\x67\x04\x67\x6c\x6f\x62\x03\x7f\x00\x02\x4d\x67\x03\x67\x65\x74\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x06\x86\x80\x80\x80\x00\x01\x7f\x00\x41\x2b\x0b\x07\xa1\x80\x80\x80\x00\x04\x07\x4d\x67\x2e\x67\x6c\x6f\x62\x03\x00\x06\x4d\x67\x2e\x67\x65\x74\x00\x00\x04\x67\x6c\x6f\x62\x03\x01\x03\x67\x65\x74\x00\x01\x0a\x8a\x80\x80\x80\x00\x01\x84\x80\x80\x80\x00\x00\x23\x01\x0b");

let $Ng = $5;



// linking.wast:54

assert_return(() => get($Mg, "glob"), 42);



// linking.wast:55

assert_return(() => get($Ng, "Mg.glob"), 42);



// linking.wast:56

assert_return(() => get($Ng, "glob"), 43);



// linking.wast:57

assert_return(() => call($Mg, "get", []), 42);



// linking.wast:58

assert_return(() => call($Ng, "Mg.get", []), 42);



// linking.wast:59

assert_return(() => call($Ng, "get", []), 43);



// linking.wast:64

let $6 = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x03\x60\x00\x01\x7f\x60\x00\x00\x60\x01\x7f\x01\x7f\x03\x84\x80\x80\x80\x00\x03\x00\x00\x02\x04\x84\x80\x80\x80\x00\x01\x70\x00\x0a\x07\x92\x80\x80\x80\x00\x03\x03\x74\x61\x62\x01\x00\x01\x68\x00\x01\x04\x63\x61\x6c\x6c\x00\x02\x09\x8a\x80\x80\x80\x00\x01\x00\x41\x02\x0b\x04\x00\x00\x00\x00\x0a\x9f\x80\x80\x80\x00\x03\x84\x80\x80\x80\x00\x00\x41\x04\x0b\x84\x80\x80\x80\x00\x00\x41\x7c\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x11\x00\x00\x0b");

let $Mt = $6;



// linking.wast:77

register("Mt", $Mt)



// linking.wast:79

let $7 = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x03\x60\x00\x00\x60\x00\x01\x7f\x60\x01\x7f\x01\x7f\x02\x92\x80\x80\x80\x00\x02\x02\x4d\x74\x04\x63\x61\x6c\x6c\x00\x02\x02\x4d\x74\x01\x68\x00\x01\x03\x84\x80\x80\x80\x00\x03\x01\x02\x02\x04\x85\x80\x80\x80\x00\x01\x70\x01\x05\x05\x07\xa1\x80\x80\x80\x00\x03\x07\x4d\x74\x2e\x63\x61\x6c\x6c\x00\x00\x0c\x63\x61\x6c\x6c\x20\x4d\x74\x2e\x63\x61\x6c\x6c\x00\x03\x04\x63\x61\x6c\x6c\x00\x04\x09\x8b\x80\x80\x80\x00\x01\x00\x41\x00\x0b\x05\x02\x02\x02\x01\x00\x0a\xa1\x80\x80\x80\x00\x03\x84\x80\x80\x80\x00\x00\x41\x05\x0b\x86\x80\x80\x80\x00\x00\x20\x00\x10\x00\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x11\x01\x00\x0b");

let $Nt = $7;



// linking.wast:98

assert_return(() => call($Mt, "call", [2]), 4);



// linking.wast:99

assert_return(() => call($Nt, "Mt.call", [2]), 4);



// linking.wast:100

assert_return(() => call($Nt, "call", [2]), 5);



// linking.wast:101

assert_return(() => call($Nt, "call Mt.call", [2]), 4);



// linking.wast:103

assert_trap(() => call($Mt, "call", [1]));



// linking.wast:104

assert_trap(() => call($Nt, "Mt.call", [1]));



// linking.wast:105

assert_return(() => call($Nt, "call", [1]), 5);



// linking.wast:106

assert_trap(() => call($Nt, "call Mt.call", [1]));



// linking.wast:108

assert_trap(() => call($Mt, "call", [0]));



// linking.wast:109

assert_trap(() => call($Nt, "Mt.call", [0]));



// linking.wast:110

assert_return(() => call($Nt, "call", [0]), 5);



// linking.wast:111

assert_trap(() => call($Nt, "call Mt.call", [0]));



// linking.wast:113

assert_trap(() => call($Mt, "call", [20]));



// linking.wast:114

assert_trap(() => call($Nt, "Mt.call", [20]));



// linking.wast:115

assert_trap(() => call($Nt, "call", [7]));



// linking.wast:116

assert_trap(() => call($Nt, "call Mt.call", [20]));



// linking.wast:118

assert_return(() => call($Nt, "call", [3]), -4);



// linking.wast:119

assert_trap(() => call($Nt, "call", [4]));



// linking.wast:121

let $8 = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x8a\x80\x80\x80\x00\x02\x60\x00\x01\x7f\x60\x01\x7f\x01\x7f\x02\x93\x80\x80\x80\x00\x02\x02\x4d\x74\x01\x68\x00\x00\x02\x4d\x74\x03\x74\x61\x62\x01\x70\x00\x05\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\x88\x80\x80\x80\x00\x01\x04\x63\x61\x6c\x6c\x00\x02\x09\x88\x80\x80\x80\x00\x01\x00\x41\x01\x0b\x02\x01\x00\x0a\x96\x80\x80\x80\x00\x02\x84\x80\x80\x80\x00\x00\x41\x06\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x11\x00\x00\x0b");

let $Ot = $8;



// linking.wast:134

assert_return(() => call($Mt, "call", [3]), 4);



// linking.wast:135

assert_return(() => call($Nt, "Mt.call", [3]), 4);



// linking.wast:136

assert_return(() => call($Nt, "call Mt.call", [3]), 4);



// linking.wast:137

assert_return(() => call($Ot, "call", [3]), 4);



// linking.wast:139

assert_return(() => call($Mt, "call", [2]), -4);



// linking.wast:140

assert_return(() => call($Nt, "Mt.call", [2]), -4);



// linking.wast:141

assert_return(() => call($Nt, "call", [2]), 5);



// linking.wast:142

assert_return(() => call($Nt, "call Mt.call", [2]), -4);



// linking.wast:143

assert_return(() => call($Ot, "call", [2]), -4);



// linking.wast:145

assert_return(() => call($Mt, "call", [1]), 6);



// linking.wast:146

assert_return(() => call($Nt, "Mt.call", [1]), 6);



// linking.wast:147

assert_return(() => call($Nt, "call", [1]), 5);



// linking.wast:148

assert_return(() => call($Nt, "call Mt.call", [1]), 6);



// linking.wast:149

assert_return(() => call($Ot, "call", [1]), 6);



// linking.wast:151

assert_trap(() => call($Mt, "call", [0]));



// linking.wast:152

assert_trap(() => call($Nt, "Mt.call", [0]));



// linking.wast:153

assert_return(() => call($Nt, "call", [0]), 5);



// linking.wast:154

assert_trap(() => call($Nt, "call Mt.call", [0]));



// linking.wast:155

assert_trap(() => call($Ot, "call", [0]));



// linking.wast:157

assert_trap(() => call($Ot, "call", [20]));



// linking.wast:159

let $9 = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x02\x8c\x80\x80\x80\x00\x01\x02\x4d\x74\x03\x74\x61\x62\x01\x70\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x09\x87\x80\x80\x80\x00\x01\x00\x41\x09\x0b\x01\x00\x0a\x88\x80\x80\x80\x00\x01\x82\x80\x80\x80\x00\x00\x0b");



// linking.wast:165

assert_unlinkable("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x02\x8c\x80\x80\x80\x00\x01\x02\x4d\x74\x03\x74\x61\x62\x01\x70\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x09\x87\x80\x80\x80\x00\x01\x00\x41\x0a\x0b\x01\x00\x0a\x88\x80\x80\x80\x00\x01\x82\x80\x80\x80\x00\x00\x0b");



// linking.wast:174

assert_unlinkable("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x02\x96\x80\x80\x80\x00\x02\x02\x4d\x74\x03\x74\x61\x62\x01\x70\x00\x0a\x02\x4d\x74\x03\x6d\x65\x6d\x02\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x09\x8d\x80\x80\x80\x00\x02\x00\x41\x07\x0b\x01\x00\x00\x41\x09\x0b\x01\x00\x0a\x8a\x80\x80\x80\x00\x01\x84\x80\x80\x80\x00\x00\x41\x00\x0b");



// linking.wast:184

assert_trap(() => call($Mt, "call", [7]));



// linking.wast:186

assert_unlinkable("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x02\x8c\x80\x80\x80\x00\x01\x02\x4d\x74\x03\x74\x61\x62\x01\x70\x00\x0a\x03\x82\x80\x80\x80\x00\x01\x00\x09\x8d\x80\x80\x80\x00\x02\x00\x41\x07\x0b\x01\x00\x00\x41\x0c\x0b\x01\x00\x0a\x8a\x80\x80\x80\x00\x01\x84\x80\x80\x80\x00\x00\x41\x00\x0b");



// linking.wast:195

assert_trap(() => call($Mt, "call", [7]));



// linking.wast:197

assert_unlinkable("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x02\x8c\x80\x80\x80\x00\x01\x02\x4d\x74\x03\x74\x61\x62\x01\x70\x00\x0a\x03\x82\x80\x80\x80\x00\x01\x00\x05\x83\x80\x80\x80\x00\x01\x00\x01\x09\x87\x80\x80\x80\x00\x01\x00\x41\x07\x0b\x01\x00\x0a\x8a\x80\x80\x80\x00\x01\x84\x80\x80\x80\x00\x00\x41\x00\x0b\x0b\x89\x80\x80\x80\x00\x01\x00\x41\x80\x80\x04\x0b\x01\x64");



// linking.wast:207

assert_trap(() => call($Mt, "call", [7]));



// linking.wast:212

let $10 = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7f\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x05\x07\x8e\x80\x80\x80\x00\x02\x03\x6d\x65\x6d\x02\x00\x04\x6c\x6f\x61\x64\x00\x00\x0a\x8d\x80\x80\x80\x00\x01\x87\x80\x80\x80\x00\x00\x20\x00\x2d\x00\x00\x0b\x0b\x90\x80\x80\x80\x00\x01\x00\x41\x0a\x0b\x0a\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09");

let $Mm = $10;



// linking.wast:220

register("Mm", $Mm)



// linking.wast:222

let $11 = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7f\x01\x7f\x02\x8b\x80\x80\x80\x00\x01\x02\x4d\x6d\x04\x6c\x6f\x61\x64\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x05\x83\x80\x80\x80\x00\x01\x00\x01\x07\x92\x80\x80\x80\x00\x02\x07\x4d\x6d\x2e\x6c\x6f\x61\x64\x00\x00\x04\x6c\x6f\x61\x64\x00\x01\x0a\x8d\x80\x80\x80\x00\x01\x87\x80\x80\x80\x00\x00\x20\x00\x2d\x00\x00\x0b\x0b\x8c\x80\x80\x80\x00\x01\x00\x41\x0a\x0b\x06\xf0\xf1\xf2\xf3\xf4\xf5");

let $Nm = $11;



// linking.wast:234

assert_return(() => call($Mm, "load", [12]), 2);



// linking.wast:235

assert_return(() => call($Nm, "Mm.load", [12]), 2);



// linking.wast:236

assert_return(() => call($Nm, "load", [12]), 242);



// linking.wast:238

let $12 = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7f\x01\x7f\x02\x8b\x80\x80\x80\x00\x01\x02\x4d\x6d\x03\x6d\x65\x6d\x02\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x88\x80\x80\x80\x00\x01\x04\x6c\x6f\x61\x64\x00\x00\x0a\x8d\x80\x80\x80\x00\x01\x87\x80\x80\x80\x00\x00\x20\x00\x2d\x00\x00\x0b\x0b\x8e\x80\x80\x80\x00\x01\x00\x41\x05\x0b\x08\xa0\xa1\xa2\xa3\xa4\xa5\xa6\xa7");

let $Om = $12;



// linking.wast:247

assert_return(() => call($Mm, "load", [12]), 167);



// linking.wast:248

assert_return(() => call($Nm, "Mm.load", [12]), 167);



// linking.wast:249

assert_return(() => call($Nm, "load", [12]), 242);



// linking.wast:250

assert_return(() => call($Om, "load", [12]), 167);



// linking.wast:252

let $13 = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x02\x8b\x80\x80\x80\x00\x01\x02\x4d\x6d\x03\x6d\x65\x6d\x02\x00\x00\x0b\x89\x80\x80\x80\x00\x01\x00\x41\xff\xff\x03\x0b\x01\x61");



// linking.wast:257

assert_unlinkable("\x00\x61\x73\x6d\x0d\x00\x00\x00\x02\x8b\x80\x80\x80\x00\x01\x02\x4d\x6d\x03\x6d\x65\x6d\x02\x00\x00\x0b\x89\x80\x80\x80\x00\x01\x00\x41\x80\x80\x04\x0b\x01\x61");



// linking.wast:265

let $14 = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7f\x01\x7f\x02\x8c\x80\x80\x80\x00\x01\x02\x4d\x6d\x03\x6d\x65\x6d\x02\x01\x01\x08\x03\x82\x80\x80\x80\x00\x01\x00\x07\x88\x80\x80\x80\x00\x01\x04\x67\x72\x6f\x77\x00\x00\x0a\x8c\x80\x80\x80\x00\x01\x86\x80\x80\x80\x00\x00\x20\x00\x40\x00\x0b");

let $Pm = $14;



// linking.wast:273

assert_return(() => call($Pm, "grow", [0]), 1);



// linking.wast:274

assert_return(() => call($Pm, "grow", [2]), 1);



// linking.wast:275

assert_return(() => call($Pm, "grow", [0]), 3);



// linking.wast:276

assert_return(() => call($Pm, "grow", [1]), 3);



// linking.wast:277

assert_return(() => call($Pm, "grow", [1]), 4);



// linking.wast:278

assert_return(() => call($Pm, "grow", [0]), 5);



// linking.wast:279

assert_return(() => call($Pm, "grow", [1]), -1);



// linking.wast:280

assert_return(() => call($Pm, "grow", [0]), 5);



// linking.wast:282

assert_unlinkable("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x02\xa7\x80\x80\x80\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x05\x70\x72\x69\x6e\x74\x00\x00\x02\x4d\x6d\x03\x6d\x65\x6d\x02\x00\x01\x02\x4d\x6d\x03\x74\x61\x62\x01\x70\x00\x00\x0b\x89\x80\x80\x80\x00\x01\x00\x41\x00\x0b\x03\x61\x62\x63");



// linking.wast:291

assert_return(() => call($Mm, "load", [0]), 0);



// linking.wast:293

assert_unlinkable("\x00\x61\x73\x6d\x0d\x00\x00\x00\x02\x8b\x80\x80\x80\x00\x01\x02\x4d\x6d\x03\x6d\x65\x6d\x02\x00\x01\x0b\x91\x80\x80\x80\x00\x02\x00\x41\x00\x0b\x03\x61\x62\x63\x00\x41\x80\x80\x14\x0b\x01\x64");



// linking.wast:301

assert_return(() => call($Mm, "load", [0]), 0);



// linking.wast:303

assert_unlinkable("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x02\x8b\x80\x80\x80\x00\x01\x02\x4d\x6d\x03\x6d\x65\x6d\x02\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x04\x84\x80\x80\x80\x00\x01\x70\x00\x00\x09\x87\x80\x80\x80\x00\x01\x00\x41\x00\x0b\x01\x00\x0a\x88\x80\x80\x80\x00\x01\x82\x80\x80\x80\x00\x00\x0b\x0b\x89\x80\x80\x80\x00\x01\x00\x41\x00\x0b\x03\x61\x62\x63");



// linking.wast:313

assert_return(() => call($Mm, "load", [0]), 0);

reinitializeRegistry();
})();