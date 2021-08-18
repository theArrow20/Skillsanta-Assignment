const set = new Set(['Beethoven', 'Mozart', 'Chopin', 'Chopin']);

function Set(a){
    this.a = a[0];
    this.b = a[1];
    this.c = a[2];
}
delete set.a;
console.log(set)

// OUTPUT-> Set { b: 'Mozart', c: 'Chopin' }