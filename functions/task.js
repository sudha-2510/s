function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}

console.log(greet('John')); 
console.log(greet());        
//
// public class ReverseNumberExample1   
// {  
// public static void main(String[] args)   
// {  
// int number = 987654, reverse = 0;  
// while(number != 0)   
// {  
// int remainder = number % 10;  
// reverse = reverse * 10 + remainder;  
// number = number/10;  
// }  
// System.out.println("The reverse of the given number is: " + reverse);  
// }  
// }  
var a=80;
var a1=a;
rev=0;
c=3;
sum=0;
while(a>0)
{
   rem=a%10;
   a=Math.floor(a/10);
   cube=rem**c;
   sum=sum+cube;
}
if(sum==a1)
{
   console.log("Palindrome");
   
}
else{
    console.log("Not a palindrome");
    
}
//
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

function nextPrime(N) {
    let prime = N + 1;
    while (!isPrime(prime)) {
        prime++;
    }
    return prime;
}

// Example usage:
console.log(nextPrime(10)); // Output: 11
console.log(nextPrime(17)); // Output: 19
//
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

function previousPrime(N) {
    let prime = N - 1;
    while (prime > 1 && !isPrime(prime)) {
        prime--;
    }
    return prime > 1 ? prime : null; // Return null if no previous prime exists
}

// Example usage:
console.log(previousPrime(10)); // Output: 7
console.log(previousPrime(17)); // Output: 13
