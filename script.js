//1065번 한수
var n = 1;
var result=0;
var input;
var readlineSync = require('readline-sync');
var r = readlineSync.creat
input=parseInt(readlineSync.question(''));

for(;n<=input;n++){
    if(n<100) result++;
    else{
        let hun, ten, one;
        hun = Math.floor(n/100);
        ten = Math.floor(n/10) - Math.floor(n/100)*10;
        one = n - Math.floor(n/10)*10;
        if (hun+one==ten*2) result++;
        }
}
console.log(result);
//2851번 슈퍼마리오"
var readlineSync = require(readline-sync);
var r = readlineSync.creat
var arr = [];
var i = 0;
var sum = 0;
for(;i<10;i++){
    arr.push(parseInt(readlineSync.question('')));
    console.log(arr[i]);
}
for(i=0;(arr[i]+sum<100)&&(i<10);i++)
    sum+=arr[i];
if(arr[i]+sum-100<=100-sum)
    sum+=arr[i];
alert(sum);
console.log(sum);
//10825번 국영수
var i = 0;
var stu = [];
var readlineSync = require(readline-sync);
var r = readlineSync.creat
var n = parseInt(readlineSync.question(''));

//학생 입력
function makeStudent(name, kor, eng, mat){
    return {
        name: name,
        kor: kor,
        eng: eng,
        mat: mat
    }
}
for (;i<n;i++){
    let name, kor, eng, mat;
    name = readlineSync.question('name');
    kor = parseInt(readlineSync.question('korean score'));
    eng = parseInt(readlineSync.question('english score'));
    mat = parseInt(readlineSync.question('math score'));
    stu.push(makeStudent(name, kor, eng, mat));
}
//알파벳순 정렬
function ascending(a,b){  
    if(a.name<b.name) return -1; 
    else if(a.name==b.name) return 0; 
    else return 1; 
} 
stu.sort(ascending);
//정렬함수(시작지점,끝지점,과목명,내림차순여부)
function line(start, end, sub, down){
    var r = 1;
    var ini_s = start;
    while(r!=0){
        r = 0;
        if(down){
            for(start=ini_s;start<end-1;start++){
                if(stu[start+1][sub] > stu[start][sub]){
                    let temp = stu[start+1];
                    stu[start+1] = stu[start];
                    stu[start] = temp;
                    r++;
                }
            }
        }
        else{
            for(start=ini_s;start<end-1;start++){
                if(stu[start+1][sub] < stu[start][sub]){
                    let temp = stu[start+1];
                    stu[start+1] = stu[start];
                    stu[start] = temp;
                    r++;
                }
            }
        }
    }
}

var start = 0;
var end = n;

line(start,end,"kor",1);

for(i=0;i<n-1;i++){
    if(stu[i].kor==stu[i+1].kor){
        var j, k;
        start = i;
        end = i+1;
        for(;end<n;end++) if(stu[end].kor != stu[end-1].kor) break;
        line(start,end,"eng",0);
        k = end;
        for(j=i;j<k-1;j++){
            if(stu[j].eng==stu[j+1].eng){
                start = j;
                end = j+1;
                for(;end<n;end++) if(stu[end].eng!=stu[end-1].eng) break;
                line(start,end,"mat",1);
                j = end;
            }
        }
        i = end;
    }
}
for(i=0;i<n;i++) console.log(stu[i].name);
//2n 타일링
var readlineSync = require(readline-sync);
var r = readlineSync.creat
var arr = [1, 2];
var i=2;
var n=parseInt(readlineSync.question(''));
console.log(n);
for(;i<n;i++)
    arr.push(arr[i-1]+arr[i-2]);
console.log(arr[n-1]);
//11729번 하노이탑
var readlineSync = require(readline-sync);
var r = readlineSync.creat
var N = parseInt(readlineSync.question(''));

console.log(Math.pow(2,N)-1);

move(N,1,2,3);

function move(n,from,by,to){
    if(n==1){
        console.log(from+" "+to);
    }
    else{
        move(n-1,from,to,by);
        move(1,from,by,to);
        move(n-1,by,from,to);
    }
}
//9461번 파도반 수열
let i, t, n;
let arr=[1,1,1,2,3];

var readlineSync = require('readline-sync');
var r = readlineSync.creat
t = parseInt(readlineSync.question('T: '));

for(i=5;i<100;i++) arr[i]=arr[i-5]+arr[i-1];
while(t--){
    n = parseInt(readlineSync.question('N: '));
    console.log(arr[n-1]);
}
//1018번 체스판
var i;
var arr = new Array(50);
var n, m, result=64;
var i, j, k, l;
var readlineSync = require('readline-sync');
var r = readlineSync.creat
for(i = 0; i < 50; i++) arr[i] = new Array(50);
n=parseInt(readlineSync.question('N: '));
m=parseInt(readlineSync.question('M: '));
for(i=0;i<n;i++)
    for(j=0;j<m;j++)
        arr[i][j]=readlineSync.question(i+''+j+' :');

for(i = 0; i < n-7; i++)
{
    for(j = 0; j < m-7; j++)
    {
        var temp1 = 0;
        var temp2 = 0;
        for(k = i; k < i+8; k++) 
            for(l = j; l < j+8; l++) {
                if ((k % 2) ^ (l % 2)) {
                    if (arr[k][l] == 'W') temp1++;
                    else if (arr[k][l] == 'B') temp2++;
                }
                else {
                    if (arr[k][l] == 'B') temp1++;
                    else if (arr[k][l] == 'W') temp2++;
                }
            }
        if(temp1>temp2&&result>temp2) result=temp2;
        else if(temp2>temp1&&result>temp1) result=temp1;
    }
}
console.log(result);
//2798번 블랙잭
let i,j,k,n,m,sum;
let arr=[];
var readlineSync = require('readline-sync');
var r = readlineSync.creat
n=parseInt(readlineSync.question(''));
m=parseInt(readlineSync.question(''));
for(i=0;i<n;i++)
	arr[i]=parseInt(readlineSync.question(''));
sum=0;

for(i=0;i<n-2;i++) 
	for(j=i+1;j<n-1;j++) 
		for(k=j+1;k<n;k++)
            if (arr[i]+arr[j]+arr[k]<=m&&arr[i]+arr[j]+arr[k]>sum) sum=arr[i]+arr[j]+arr[k];
console.log(sum);
