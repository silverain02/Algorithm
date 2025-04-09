function solution(enroll, referral, seller, amount) {
    const tree = {}; // Object도 가능
    const score = {};

    for (let i = 0; i < enroll.length; i++) {
        tree[enroll[i]] = referral[i];
        score[enroll[i]] = 0;
    }
    score["-"] = 0;

    for (let i = 0; i < seller.length; i++) {
        let target = seller[i];
        let cost = amount[i] * 100;

        while (true) {
            const give = Math.floor(cost * 0.1);
            const keep = cost - give;
            score[target] += keep;

            if (give < 1 || target === "-") break;

            target = tree[target];
            cost = give;
        }
    }

    return enroll.map(name => score[name]);
}
