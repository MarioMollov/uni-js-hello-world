function evenPower(arg1){
    let n=Number(arg1);
    let num=1;

    for(let i=0;i<=n;i++){
        if(i%2==0){
            console.log(num);
        }
        num*=2;
    }
}

//evenPower(10);

//while lopps training

function whileFirstTest(arg1){
    let n=Number(arg1);
    let num=1;

    while(num<=n){
        console.log(num);
        num=num*2+1;
    }
}
// whileFirstTest(33);

function num1to100(args){
    let i=0;
    let num=parseInt(args[i]);

    while(num<1||num>100){
        i++;
        console.log("Invalid number !");
        num=parseInt(args[i]);
    }
    console.log("The number is : "+num);
    
}

// num1to100([115,111,8,36]);


function GCD([arg1,arg2]){
    // GCD - Greates Common Divisor
    let a=parseInt(arg1);
    let b=parseInt(arg2);

    // Euklid algorithm

    while(b!=0){
        let oldB=b;
        b=a%b;
        a=oldB;
    }
    console.log("GCD = "+a);

}

// GCD([67,18]);

// do ... while loops training

function factorial(arg1){
    let n=parseInt(arg1);
    let fact=1;

    do{
        fact=fact*n;
        n--;
    }while(1<n);
    console.log(fact);
}

// factorial(6);

function sumDigits(arg1){
    let n=parseInt(arg1);
    let sum=0;

    do{
        sum=sum+(n%10);
        n=Math.trunc(n/10);
    }while(n>0)

    console.log(sum);
}

// sumDigits(4684321468);

function isPrime(arg1){
    let n=parseInt(arg1);
    let prime=true;

    if(n>1){
        for (let i=2;i<Math.sqrt(n);i++){
            if(n%i===0){
                prime=false;
                break;
            }
        }
        if(prime&&n>2){
            console.log(n+" Prime");
        }else {
            console.log(n+" Not prime");
        }
    }
}

// isPrime(7);
// isPrime(42);

function enterEvenDigit(args){
    i=0;
    let num=0;

    while (true){
        num=parseInt(args[i]);
        if(num%2==0){
            break;
        }
        console.log("The number is not even.");
        i++;
    }
    console.log("You enetred a even number : "+num);
}

// enterEvenDigit([6,4,8,5,7]);
// enterEvenDigit([5,8,6,2,7]);

function someTest(){
    let chek=true;

    for(let i=1;i<=3;i++){
        if(chek==true){
            for(let j=3;j>=1;j--){
                if(j+i==2){
                    chek=false;
                    break;
                }
                console.log(i+" "+j);
            }
        }
    }
}

// someTest();

function fibonacci(arg1){
    let n=Number(arg1);
    let f0=1;
    let f1=1;

    for(let i=0;i<n-1;i++){
        let fNetx=f0+f1;
        f0=f1;
        f1=fNetx;
    }
    console.log(f1);
}

// fibonacci(5);

function pyramid(arg1){
    let n=Number(arg1);
    let num=1;
    let result="";

    for (let row = 1;row <= n;row++){
        for(let col = 1;col < row;col++){
            if(col>1){
                result+="";
            }
            result+=num;
            num++
            if(num>n){
                break;
            }
        }
        console.log(result);
        result="";

        if(num>n){
            break;
        }
    }
}

// pyramid(30);

function table(arg1){
    let n=Number(arg1);
    let result="";

    for(let row=0;row<n;row++){
        for(let col=0;col<n;col++){
            let num=row+col+1;
            if(num>n){
                num=2*n-num;
            }
            result+=num;
        }
        console.log(result);
        result="";
    }
}

// table(4);

function passwordGenerator(input){
    const n=Number(input[0]);
    const l=Number(input[1]);
    let solution=``;

    for(var s1=1;s1<=n;s1++){
        for(var s2=1;s2<=n;s2++){
            for(var s3ascii=97;s3ascii<97+l;s3ascii++){
                let s3=String.fromCharCode(s3ascii);

                for(var s4ascii=97;s4ascii<97+l;s4ascii++){
                    let s4=String.fromCharCode(s4ascii);

                    for(var s5=Math.max(s1,s2)+1;s5<=n;s5++){
                        solution=`${s1}${s2}${s3}${s4}${s5}`;
                        console.log(solution);
                    }
                }
            }
        }
    }
}

// passwordGenerator([3,2])

function magicNumber(arg1){
    let n=Number(arg1);
    let result="";

    for(let s1=1;s1<=9;s1++){
        for(let s2=1;s2<=9;s2++){
            for(let s3=1;s3<=9;s3++){
                for(let s4=1;s4<=9;s4++){
                    for(let s5=1;s5<=9;s5++){
                        for(let s6=1;s6<=9;s6++){
                            result=`${s1}${s2}${s3}${s4}${s5}${s6}`;
                            if(s1*s2*s3*s4*s5*s6==n){
                                console.log(result)
                            }
                        }
                    }
                }
            }
        }
    }
}

// magicNumber(2);
// magicNumber(531441);

function stopingNumber([arg1,arg2,arg3]){
    let start=Number(arg1);
    let end =Number(arg2);
    let stopNum=Number(arg3);

    for(let i=end;i>=start;i--){
        if(i%2==0&&i%3==0){
            if(i==stopNum){
                break;
            }
            console.log(i+" ");
        }
    }
}

// stopingNumber([1,36,12]);

function specialNumber(arg1){
    let n=Number(arg1);
    let solution="";

    for(let s1=1;s1<=9;s1++){
        for(let s2=1;s2<=9;s2++){
            for(let s3=1;s3<=9;s3++){
                for(let s4=1;s4<=9;s4++){
                    if(n%s1==0 && n%s2==0
                      && n%s3==0 && n%s4==0){
                    
                        solution=`${s1}${s2}${s3}${s4}`;
                        console.log(solution);
                    }
                    
                }
            }
        }
    }
}

// specialNumber(11);

function digits(arg1){
    let number=Number(arg1);
    let digits=number;
    let d3=digits%10;
    digits=Math.trunc(digits/10);
    let d2=digits%10;
    digits=Math.trunc(digits/10);
    let d1=digits%10;
    let n=d1+d2;
    let m=d1+d3;

    for(let row=0;row<n;row++){
        for(let col=0;col<m;col++){
            if(number%5==0){
                number=number-d1;
            }else if(number%3==0){
                number=number-d2;
            }else{
                number=number+d3;
            }
            console.log(number);
        }
        console.log("\r\n");
    }
   
}

// digits(376);

function triangleArea([arg1,arg2,arg3,arg4,arg5,arg6]){
    let x1=Number(arg1);
    let y1=Number(arg2);
    let x2=Number(arg3);
    let y2=Number(arg4);
    let x3=Number(arg5);
    let y3=Number(arg6);

    let h=Math.abs(y2-y1);
    let a=Math.abs(x2-x3);

    let s =(a*h)/2;
    console.log(s);
}

// triangleArea([5,-2,6,1,1,1]);

function brickTransport([arg1,arg2,arg3]){
    let brick=Number(arg1);
    let workers=Number(arg2);
    let brickPerTrans=Number(arg3);

    let oneTrans=workers*brickPerTrans;
    console.log(Math.ceil(brick/oneTrans));
}

// brickTransport([5,12,30]);

function pointOnSection([arg1,arg2,arg3]){
    let first=Number(arg1);
    let second=Number(arg2);
    let point=Number(arg3);
    let start=Math.min(first,second);
    let end=Math.max(first,second);
    let distance=Math.min(Math.abs(start-point),Math.abs(end-point));

    if(start<=point && point<= end){
        console.log("in \r\n"+distance);
    }else{
        console.log("out\r\n"+distance);
    }
}

// pointOnSection([1,-2,3]);

function pointInShape([arg1,arg2]){
    let x=Number(arg1);
    let y=Number(arg2);
    let pointInShape1=x>=4&&x<=10&&y>=-5&&y<=3;
    let pointInShape2=x>=2&&x<=12&&y>=-3&&y<=1;

    if(pointInShape1||pointInShape2){
        console.log("in");
    }else {
        console.log("out");
    }
}

// pointInShape([11,-5]);

function fiveDaysLater([arg1,arg2]){
    let day=Number(arg1);
    let month=Number(arg2);

    if(month==4&&6&&9&&11){
        day=day+5;
        if(day>30){
            day=day-30;
            month++;
            if(month<10){
                console.log(day+".0"+month);
            }else if(month>12){
                month=month-12;
                console.log(day+".0"+month);
            }
        }else {
        month++;
        console.log(day+"."+month);
        }
    }else if(month==2){
        day=day+5;
        if(day>28){
            day=day-28;
            month++;
            if(month<10){
                console.log(day+".0"+month);
            }else if(month>12){
                month=month-12;
                console.log(day+".0"+month);
            }
        }else {
        month++;
        console.log(day+"."+month);
        }
    }else if(month==1||3||5||7||8||10||12){
        day=day+5;
        if(day>31){
            day=day-31;
            month++;
            if(month<10){
                console.log(day+".0"+month);
            }else if(month>12){
                month=month-12;
                console.log(day+".0"+month);
            }
        }else {
        month++;
        console.log(day+"."+month);
        }
    }
}

// fiveDaysLater([26,02]);

function sumOfNumbers([arg1,arg2,arg3]){
    let num1=Number(arg1);
    let num2=Number(arg2);
    let num3=Number(arg3);

    if(num1+num2==num3){
        console.log(num1+" + "+num2+" = "+num3);
    }else if(num1+num3==num2){
        console.log(num1+" + "+num3+" = "+num2);
    }else if(num3+num2==num1){
        console.log(num3+" + "+num2+" = "+num1);
    }else {
        console.log("No");
    }
}

// sumOfNumbers([2,6,3]);

function suma(args){
    let n=args.length
    let sum1=0;
    let sum2=0;
    let sum3=0;
    
    for(let i=0;i<n;i++){
        let num=args[i];
        if(i%3==0){
            sum1+=num;
        }else if(i%3==1){
            sum2+=num;
        }else if(i%3==2){
            sum3+=num;
        }
    }
    console.log("sum1 = "+sum1+"\r\nsum2 = "+sum2+"\r\nsum3 = "+sum3);
}

// suma([3,5,2,7,8]);

