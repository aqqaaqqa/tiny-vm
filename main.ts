import{readdirSync as a,readFileSync as b,mkdirSync as c,writeFileSync as d}from"node:fs";
let B=new Uint8Array(65536),L=0;
const F=[(x,y)=>x+y|0,(x,y)=>x-y|0,Math.imul,0,0,0,0,0,(x,y)=>x&y,(x,y)=>x|y,(x,y)=>x^y,0,(x,y)=>x<<y,(x,y)=>x>>y,(x,y)=>(x>>>y)|0,0,(x,y)=>x==y?1:0,(x,y)=>x<y?1:0,(x,y)=>(x>>>0)<(y>>>0)?1:0];
function R(p,u){
let D=new Int32Array(256),s=0,C=new Int32Array(64),k=0,M=new Int32Array(256),g=0,x=0,t=0,V=0;
L=0;
for(;;){
if(t==1e6)return 10;
if(x<0||x>=p.length)return 9;
let o=p[x],m=o==1?1:o==2?4:o>47&&o<52?2:0,y=x+1+m;
if(x+m>=p.length)return 9;
t++;x=y;
if(o>15&&o<35&&o!=23&&o!=27&&o!=31){
if(s<2)return 2;
let z=D[s-1],w=D[s-2],r;
if(o>18&&o<23){if(!z)return 4;r=o==19?(w/z)|0:o==20?w%z|0:o==21?(w>>>0)/(z>>>0)|0:(w>>>0)%(z>>>0)|0}
else r=F[o-16](w,z);
D[s-2]=r;s--;continue;
}
switch(o){
case 0:return 0;
case 1:if(s>255)return 3;D[s++]=(p[y-1]<<24)>>24;break;
case 2:if(s>255)return 3;D[s++]=p[y-4]|p[y-3]<<8|p[y-2]<<16|p[y-1]<<24;break;
case 3:if(s<1)return 2;s--;break;
case 4:if(s<1)return 2;if(s>255)return 3;D[s]=D[s-1];s++;break;
case 5:if(s<2)return 2;V=D[s-1];D[s-1]=D[s-2];D[s-2]=V;break;
case 6:if(s<2)return 2;if(s>255)return 3;D[s]=D[s-2];s++;break;
case 7:if(s<3)return 2;V=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=V;break;
case 23:if(s<1)return 2;D[s-1]=-D[s-1]|0;break;
case 27:if(s<1)return 2;D[s-1]=~D[s-1];break;
case 48:case 49:case 50:{let r=(p[y-2]|p[y-1]<<8)<<16>>16;if(o>48){if(s<1)return 2;V=D[--s];if(o==49?V==0:V!=0)x=y+r}else x=y+r;break;}
case 51:if(k>63)return 7;C[k++]=y;x=p[y-2]|p[y-1]<<8;break;
case 52:if(k<1)return 8;x=C[--k];break;
case 64:if(s<1)return 2;V=D[s-1];if(V<0||V>255)return 6;D[s-1]=M[V];break;
case 65:if(s<2)return 2;V=D[s-1];if(V<0||V>255)return 6;M[V]=D[s-2];s-=2;break;
case 80:if(s<1)return 2;let z=String(D[--s]);if(L+z.length>65536)return 11;for(let j=0;j<z.length;j++)B[L++]=z.charCodeAt(j);break;
case 81:if(s<1)return 2;if(L>65535)return 11;B[L++]=D[--s]&255;break;
case 82:if(s>255)return 3;D[s++]=g<u.length?u[g++]:-1;break;
case 83:if(s<1)return 2;return D[--s]&255;
default:return 5;
}
}
}
const I=process.env.MAKEFUN_INPUT_DIR||"/input",O=process.env.MAKEFUN_OUTPUT_DIR||"/output";
for(const q of a(I).sort()){let e=R(b(I+"/"+q+"/program.bin"),b(I+"/"+q+"/input.bin"));c(O+"/"+q,{recursive:true});d(O+"/"+q+"/stdout.bin",B.subarray(0,L));d(O+"/"+q+"/exit.txt",e+"\n");}
