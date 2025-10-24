function solution(word) {
    const words = [];
    const vowels = ['A', 'E', 'I', 'O', 'U'];

    function dfs(cur) {
      if (cur.length > 5) return;
      if (cur.length > 0) words.push(cur);
        for (let v of vowels) dfs(cur + v);
    }
    dfs('');
    words.sort();
    return words.indexOf(word) + 1;

}