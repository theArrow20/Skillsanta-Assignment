function foo1()
{
return {
bar: "hello"
};
}

// Object {bar: "hello"}

function foo2()
{
return
{
bar: "hello"
};
}

//undefined

// This happens due to the semicolon , in javascript eve though semi colons are not compluslory we use them as a good coding practice..In function to there is no { in front of return statment.so IDE adds a semcolon infront of return .Due to this we get completely two different outputs