function solution(n)
{
    const n_arr = String(n).split('');
    
    return n_arr.reduce((acc, val) => 
        acc + Number(val)
        ,0
    )
}