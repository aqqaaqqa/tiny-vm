import{readdirSync as a,readFileSync as b,mkdirSync as c,writeFileSync as d}from"node:fs"
let B=new Uint8Array(65536),L=0
function R(p,u){
let D=new Int32Array(576),s=0,k=0,g=0,x=0,t=0,V=0,A=n=>{if(s<n)throw 2},E=()=>{if(s>255)throw 3}
L=0
try{for(;;){
if(t==1e6)throw 10
if(x<0|x>=p.length)throw 9
let o=p[x],m=o==1?1:o==2?4:o>47&o<52?2:0,y=x+1+m
if(x+m>=p.length)throw 9
t++;x=y
if(o>15&o<35&o!=23&o!=27&o!=31){A(2);let z=D[s-1],w=D[s-2];if(o>18&o<23){if(!z)throw 4;D[s-2]=((o%2?o>20?(w>>>0)/(z>>>0):w/z:o>20?(w>>>0)%(z>>>0):w%z)|0)}else D[s-2]=[w+z|0,w-z|0,Math.imul(w,z),,,,,,w&z,w|z,w^z,,w<<z,w>>z,w>>>z|0,,w==z?1:0,w<z?1:0,(w>>>0)<(z>>>0)?1:0][o-16];s--;continue}
switch(o){
case 0:return 0
case 1:E();D[s++]=p[y-1]<<24>>24;break
case 2:E();D[s++]=p[y-4]|p[y-3]<<8|p[y-2]<<16|p[y-1]<<24;break
case 3:A(1);s--;break
case 4:A(1);E();D[s++]=D[s-2];break
case 5:A(2);V=D[s-1];D[s-1]=D[s-2];D[s-2]=V;break
case 6:A(2);E();D[s++]=D[s-3];break
case 7:A(3);V=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=V;break
case 23:A(1);D[s-1]=-D[s-1]|0;break
case 27:A(1);D[s-1]=~D[s-1];break
case 48:case 49:case 50:{let r=(p[y-2]|p[y-1]<<8)<<16>>16;if(o>48){A(1);if((o>49)==(D[--s]!=0))x=y+r}else x=y+r;break}
case 51:if(k>63)throw 7;D[256+k++]=y;x=p[y-2]|p[y-1]<<8;break
case 52:if(k<1)throw 8;x=D[256+--k];break
case 64:A(1);V=D[s-1];if(V<0|V>255)throw 6;D[s-1]=D[320+V];break
case 65:A(2);V=D[s-1];if(V<0|V>255)throw 6;D[320+V]=D[s-2];s-=2;break
case 80:A(1);let z=String(D[--s]);if(L+z.length>65536)throw 11;for(let j=0;j<z.length;)B[L++]=z.charCodeAt(j++);break
case 81:A(1);if(L>65535)throw 11;B[L++]=D[--s]&255;break
case 82:E();D[s++]=u[g++]??-1;break
case 83:A(1);return D[--s]&255
default:throw 5
}
}}catch(e){return e}
}
const N=process.env,I=N.MAKEFUN_INPUT_DIR||"/input",O=N.MAKEFUN_OUTPUT_DIR||"/output"
for(const q of a(I)){let e=R(b(I+"/"+q+"/program.bin"),b(I+"/"+q+"/input.bin"));c(O+"/"+q,{recursive:true});d(O+"/"+q+"/stdout.bin",B.subarray(0,L));d(O+"/"+q+"/exit.txt",e+"\n")}
