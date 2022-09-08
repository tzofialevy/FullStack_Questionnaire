

    



const str='<a href="http://example.com">'
function reg(str)
{
    let str1= str.replace('/=/g', ":");
    let str2=str1.replace('/"/g','');
    let str3=str2.replace('/>/','');
    console.log(str1)
    let index=str3.search('/\s/');
   // let res=RegExp.match('/\s[^]+/',str3)//From profit to end
    let res=str3.slice(index+1)
    console.log(res)
}
reg(str)