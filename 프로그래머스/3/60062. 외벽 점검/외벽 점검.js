function solution(n, weak, dist) {
    const len = weak.length;
    const extendedWeak = [...weak, ...weak.map(w => w + n)];
    let answer = dist.length + 1;

    const getPermutations = (arr, r) => {
        const results = [];
        if (r === 1) return arr.map(el => [el]);
        arr.forEach((fixed, idx, origin) => {
            const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
            const perms = getPermutations(rest, r - 1);
            const attached = perms.map(p => [fixed, ...p]);
            results.push(...attached);
        });
        return results;
    };

    for (let start = 0; start < len; start++) {
        for (let i = 1; i <= dist.length; i++) {
            const friendsPermutations = getPermutations(dist, i);
            for (const friends of friendsPermutations) {
                let count = 0;
                let position = extendedWeak[start];
                for (const friend of friends) {
                    const maxReach = position + friend;
                    count++;
                    let idx = start;
                    while (idx < start + len && extendedWeak[idx] <= maxReach) {
                        idx++;
                    }
                    if (idx === start + len) {
                        answer = Math.min(answer, count);
                        break;
                    }
                    position = extendedWeak[idx];
                }
            }
        }
    }

    return answer > dist.length ? -1 : answer;
}
