const name = { firstName: 'Philip',
lastName: 'Fry' };

const details = {
job: 'Delivery Boy',
employer: 'Planet Express'
};

let mergeList={
    ...name,...details
};

console.log(mergeList);